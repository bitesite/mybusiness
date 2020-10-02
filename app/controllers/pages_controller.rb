class PagesController < ApplicationController

  before_action :build_contestant_hash, :only => [:wedding_contest_submit]
  before_action :deny_access_for_non_admins, :only => [:admin]

  def home
    @title = "A Custom Software Firm based in Ottawa, Canada"
    @meta_description = "BiteSite is a Custom Software firm based in Ottawa, Canada focused on building web and mobile applications."
                        
    featured_blog_post_ids = Setting.find_by(name: 'featured_blog_post_ids')
    @latest_blog_posts = BlogPost.where(id: featured_blog_post_ids.value.split(","))
  end

  def services
    @title = "Custom Software Development Services"
    @meta_description = "BiteSite provides Custom Software development services and focuses on working with Ottawa area small to medium tech businesses. We specialize in
                         process management using agile methods like Scrum, product management, and software development to deliver
                         high quality web and mobile applications."
  end

  def video
    @title = "Video Production"
    @meta_description = "BiteSite provides Video production services and focuses on working with Ottawa area small to medium tech businesses. We provide a full suite
                         of services to deliver promo videos, explainer videos, training videos, testimonial videos, and more. From
                         live-action to animated, and from large projects to small, we're here to help."
  end

  def video_retainer
    redirect_to video_path
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
    @meta_description = "BiteSite is a Custom Software firm based in Ottawa, Canada focused on building web and mobile applications.
                        Contact us today whatever your interests are."
    
    

    if request.post?
      @first_name = params[:first_name]
      @last_name = params[:last_name]
      @email_address = params[:email_address]
      @message = params[:message]

      if !verify_recaptcha
        @success = false
        @result_message = "Please verify that you are not a robot."
      elsif @email_address.blank? || @message.blank?
        @success = false
        @result_message = "Please fill out both your email address and a message."
      elsif EmailBlacklisting.exists?(email: params[:email_address].upcase.strip)
        @success = false
        @result_message = "Your e-mail has been blacklisted. If you want to appeal this, please contact info@bitesite.ca directly."
      else
        ContactFormSubmission.create(first_name: @first_name,
                                     last_name: @last_name,
                                     email_address: @email_address,
                                     message: @message
                                    )

        EmailJob.perform_async(@first_name, @last_name, @email_address, @message)
        @success = true
        @result_message = "We've received your message and we'll be in touch shortly."
      end

    end
    
  end
  
  def admin
    @title = "Admin Menu"
  end

  def faq
    @title = "FAQ"
    @meta_description = "Browse frequently asked questions about BiteSite Inc. and its custom software services."
  end

  def about
    @title = "About"
    @meta_description = "Read about our company and our team members."
    @team_members = [
      { image: 'staff/casey.png', name: 'Casey Li', position: 'CEO & Founder' },
      { image: 'staff/jack.png', name: 'Jack Wu', position: 'Software Developer' },
      { image: 'staff/chris.png', name: 'Chris Francis', position: 'Software Developer' }
    ]
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
