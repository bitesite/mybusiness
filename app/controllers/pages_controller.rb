class PagesController < ApplicationController

  before_action :build_contestant_hash, :only => [:wedding_contest_submit]
  before_action :deny_access_for_non_admins, :only => [:admin]

  def home
    @title = "A Software Development and Video Production Firm based in Ottawa, Canada"
    @meta_description = "BiteSite is an Ottawa, Canada based company dedicated to building stylish, elegant, and robust Web and Mobile Applications and producing
                        eye-catching, professional media. It targets small to medium size businesses from start-ups to well established businesses.
                        BiteSite believes strongly in finding the right-fit customer for
                        the right-fit company to bring success to all who are invovled."
                        
    @recent_news_posts = NewsPost.published.limit(3)
    @video_listings = VideoListing.all


    @competencies = [
      {icon: "magnet" , title: "UI Design"},
      {icon: "desktop" , title: "Web Design"},
      {icon: "code" , title: "Web Development"},
      {icon: "mobile" , title: "iOS Development"},
      {icon: "mobile" , title: "Android Development"},
      {icon: "paint-brush" , title: "Graphic Design"},
      {icon: "camera-retro" , title: "Photography"},
      {icon: "video-camera" , title: "Film Production"},
      {icon: "fire" , title: "Motion Graphics"}
    ]

    @tools = [
      { icon: "desktop", title: "Ruby on Rails" },
      { icon: "desktop", title: "React" },
      { icon: "mobile", title: "React Native" },
      { icon: "desktop", title: "Heroku" },
      { icon: "video-camera", title: "Final Cut Pro X" },
      { icon: "video-camera", title: "Adobe Creative Cloud" },
      { icon: "video-camera", title: "Davinci Resolve" }
    ]

    @staff_listings = [
      {name: "Casey Li", position: "CEO & Founder", avatar: "staff/casey.png"},
      {name: "Ryan O'Connor", position: "Software Developer", avatar: "staff/ryan.png"},
      {name: "Tim Clark", position: "Filmmaker", avatar: "staff/tim.png"},
      {name: "Brendan McNeill", position: "Producer", avatar: "staff/brendan.png"},
      {name: "Yuhan Lee", position: "Software Developer", avatar: "staff/yuhan.png"}
    ]

  end

  def portfolio
    @title = "Portfolio"
    render layout: 'non_landing'
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

  def contact
    @title = "Home"
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
          
            EmailJob.new.async.perform(first_name, last_name, customer_email, message)
            @success = true
          end
        end
      end
    end
    
    respond_to do |format|
      format.html { redirect_to "/"}
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

  def international_safety
    @title = "International Safety Website - Case Study"
    render layout: 'non_landing'
  end

  def mydoma
    @title = "Mydoma Studio Video - Case Study"
    render layout: 'non_landing'
  end

  def splice
    @title = "Splice Web Application - Case Study"
    render layout: 'non_landing'
  end

  def lspark_grad
    @title = "L-SPARK Grad Video - Case Study"
    render layout: 'non_landing'
  end

  def lspark
    @title = "L-SPARK - Case Study"
    render layout: 'non_landing'
  end

  def d3m
    @title = "Teldio D3M - Case Study"
    render layout: 'non_landing'
  end

  def martello
    @title = "Martello All Devices Video - Case Study"
    render layout: 'non_landing'
  end

  def curtiss_wright
    @title = "Curtiss-Wright Defense Solutions TLCM Video - Case Study"
    render layout: 'non_landing'
  end

  def ewa
    @title = "Enterprise Wireless Alliance Cevo GO Video - Case Study"
    render layout: 'non_landing'
  end

  def solink
    @title = "Solink Explainer Video - Case Study"
    render layout: 'non_landing'
  end

  def christine_kelly
    @title = "Christine Kelly PHD Web Application"
    render layout: 'non_landing'
  end
  
  def filefacets
    @title = "FileFacets How it works Video"
    render layout: 'non_landing'
  end

  def inspec_homes
    @title = "Inspec Homes Web Application"
    render layout: 'non_landing'
  end

  def staff_dashboard
    if !can?(:view, :staff_dashboard)
      redirect_to root_path 
    else
      @title = "Staff Dashboard"
      render layout: 'non_landing'
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
