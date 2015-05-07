class PagesController < ApplicationController

  before_filter :build_contestant_hash, :only => [:wedding_contest_submit]
  before_filter :deny_access_for_non_admins, :only => [:admin]

  def home
    @title = "Ottawa Web Design and Development"
    @meta_description = "BiteSite is an Ottawa, Canada based company dedicated to building stylish, elegant, and robust Websites and Web Applications and producing
                        eye-catching media. It targets small to medium size businesses as well as individuals such as event organizers, teachers, and wedding couples.
                        Our media services include photography, video production, and graphic design. BiteSite believes strongly in finding the right-fit customer for
                        the right-fit company to bring success to all who are invovled."
                        
    @recent_news_posts = NewsPost.all(:limit => 3)
  end
  
  def video
    @title = "Ottawa Video Production"
    @meta_description = "BiteSite is an Ottawa, Canada based company dedicated to Web, Mobile, and Media. It believes strongly in the video format and has produced
                         Wedding Videos, Corporate Videos, and more. Whether it be professionally produced live video or stylish motion graphics, BiteSite will work
                         closely with you to make something that will truly blow your mind. Check out BiteSite's Video Production services today. Ottawa Videographer."
                         
    @videos = VideoListing.all
  end
  
  def wedding
    @title = "Ottawa Wedding Services"
    @meta_description = "BiteSite is an Ottawa, Canada based company dedicated to Web, Mobile, and Media. One of our specialties is providing services for Wedding
                         couples. Everything from Photography, to Video, to custom Websites, BiteSite will do everything it can to make your special day truly unique.
                         Whether it be for your engagement or for your big day, BiteSite has something for everybody. Check out BiteSite's Wedding Services today.
                         Ottawa Wedding Videographer. Ottawa Wedding Photographer. Ottawa Wedding Websites."
    
    @contest = Contest.find_by_name("Wedding Video 2013")
    @contestant = @contest.contestants.build
  end
  
  def wedding_contest_submit
    
    @contest = Contest.find_by_name("Wedding Video 2013")
    @contestant = @contest.contestants.build(@contestant_hash)
    @success = @contestant.save
    
    AdminMailer.visitor_has_entered_contest(@contestant).deliver
    VisitorMailer.contest_confirmation(@contestant).deliver
    
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
