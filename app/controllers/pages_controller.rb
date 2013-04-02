class PagesController < ApplicationController

  before_filter :build_contestant_hash, :only => [:wedding_contest_submit]

  def home
    @title = "Home"
    @recent_news_posts = NewsPost.all(:limit => 3)
  end
  
  def video
    @videos = VideoListing.all
    render :layout => "video"
  end
  
  def wedding
    
   @contest = Contest.find_by_name("Wedding Video 2013")
   @contestant = @contest.contestants.build
    
   render :layout => "wedding"
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
    
    if request.post?
      if !params[:email_address].blank? && !params[:message].blank?
        
        first_name = params[:first_name]
        last_name = params[:last_name]
        customer_email = params[:email_address]
        message = params[:message]
        
        AdminMailer.customer_contact(first_name, last_name, customer_email, message).deliver
        VisitorMailer.contact_confirmation(first_name, last_name, customer_email, message).deliver
        @success = true
      end
    end
    
    respond_to do |format|
      format.html { redirect_to "/"}
      format.json { render :json => { :success => @success }.to_json }
    end
    
  end
  
  private
  
  def build_contestant_hash
    notes = "#{params[:wedding_date]} / #{params[:wedding_location]} / #{params[:message]}"
    @contestant_hash = { first_name: params[:first_name], last_name: params[:last_name], email: params[:email], notes: notes }    
  end

end
