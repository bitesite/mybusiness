class PagesController < ApplicationController

  before_action :build_contestant_hash, :only => [:wedding_contest_submit]
  before_action :deny_access_for_non_admins, :only => [:admin]

  def home
    @title = "A Custom Software and Video Production Firm based in Ottawa, Canada"
    @meta_description = "BiteSite is a Custom Software and Video Production firm focused on working with small to medium Ottawa tech businesses. We build web and mobile
                         applications and produce corporate video."
                        
    @staff_listings = [
      {name: "Casey Li", position: "CEO & Founder", avatar: "staff/casey.png"},
      {name: "Tim Clark", position: "Filmmaker", avatar: "staff/tim.png"},
      {name: "Brendan McNeill", position: "Producer", avatar: "staff/brendan.png"},
      {name: "Jack Wu", position: "Software Developer", avatar: "staff/jack.png"},
      {name: "Chris Francis", position: "Software Developer", avatar: "staff/chris.png"},
      {name: "Jason Connell", position: "Filmmaker", avatar: "staff/jason.png"}
    ]
  end

  def software
    @title = "Custom Software Development"
    @meta_description = "BiteSite provides Custom Software development services and focuses on Ottawa area small to medium tech businesses. We specialize in
                         process management using agile methods like Scrum, product management, and software development to deliver
                         high quality web and mobile applications."
  end

  def video
    @title = "Video Production"
    @meta_description = "BiteSite provides Video production services and focuses on Ottawa area small to medium tech businesses. We provide a full suite
                         of services to deliver promo videos, explainer videos, training videos, testimonial videos, and more. From
                         live-action to animated, and from large projects to small, we're here to help."
  end

  def portfolio
    @title = "Portfolio"
  end
  
  def wedding_contest_submit
    
    @contest = Contest.find_by(name: "Wedding Video 2013")
    @contestant = @contest.contestants.build(@contestant_hash)
    @success = @contestant.save
    
    AdminMailer.visitor_has_entered_contest(@contestant).deliver_now
    VisitorMailer.contest_confirmation(@contestant).deliver_now
    
    respond_to do |format|
      format.json { render json: { success: @success }.to_json }
    end
  end

  def mobile_video_course
    @title = "Mobile Video Course"
  end

  def contact
    @title = "Contact"
    @meta_description = "BiteSite is a Custom Software and Video Production firm focusing on small to medium Ottawa tech businesses. We build web and mobile
                         applications and produce corporate video. Contact us today whatever your interests are."
    @success = false
    @message = ""

    if request.post?
      if !params[:email_address].blank? && !params[:message].blank?

        if EmailBlacklisting.exists?(email: params[:email_address].upcase.strip)
          @message = "Your e-mail has been blacklisted. If you want to appeal this, please contact info@bitesite.ca directly."
        else
          ContactFormSubmission.create({ first_name: params[:first_name],
                                         last_name: params[:last_name],
                                         email_address: params[:email_address],
                                         message: params[:message]
                                       })

          if params[:honey_pot].blank?
            first_name = params[:first_name]
            last_name = params[:last_name]
            customer_email = params[:email_address]
            message = params[:message]
          
            EmailJob.perform_async(first_name, last_name, customer_email, message)
            @success = true
          end
        end
      end
    end
    
    respond_to do |format|
      format.html
      format.json { render :json => { :success => @success, :message => @message }.to_json }
    end
    
  end
  
  def admin
    @title = "Admin Menu"
  end

  def faq
    @title = "FAQ"
  end

  def terms_and_conditions
    @title = "Terms and Conditions"
  end

  def setting_up_your_heroku_account
    @title = "Setting up your Heroku account"
  end

  def staff_dashboard
    if !can?(:view, :staff_dashboard)
      redirect_to root_path 
    else
      @title = "Staff Dashboard"
    end
  end

  private
  
    def build_contestant_hash
      if params[:newsletter] == "true"
        newsletter_text = "Interested in BiteSite Newsletter"
        register_mailchimp_user_for_newsletter(params[:first_name], params[:last_name], params[:email])
      else
        newsletter_text = "Not Interested in BiteSite Newsletter"
      end
      
      notes = "#{params[:wedding_date]} / #{params[:wedding_location]} / #{params[:message]} / #{newsletter_text}"
      @contestant_hash = { first_name: params[:first_name], last_name: params[:last_name], email: params[:email], notes: notes }    
    end

end
