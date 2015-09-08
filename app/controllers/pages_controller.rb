class PagesController < ApplicationController

  before_filter :build_contestant_hash, :only => [:wedding_contest_submit]
  before_filter :deny_access_for_non_admins, :only => [:admin]

  def home
    @title = "A Software Development and Video Production Firm based in Ottawa, Canada"
    @meta_description = "BiteSite is an Ottawa, Canada based company dedicated to building stylish, elegant, and robust Web and Mobile Applications and producing
                        eye-catching, professional media. It targets small to medium size businesses from start-ups to well established businesses.
                        BiteSite believes strongly in finding the right-fit customer for
                        the right-fit company to bring success to all who are invovled."
                        
    @recent_news_posts = NewsPost.published.limit(3)
    @video_listings = VideoListing.all
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
