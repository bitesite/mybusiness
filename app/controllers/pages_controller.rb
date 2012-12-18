class PagesController < ApplicationController

  def home
    @title = "Home"
    @recent_news_posts = NewsPost.all(:limit => 3)
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
        
        ContactMailer.customer_contact(first_name, last_name, customer_email, message).deliver
        NotificationsMailer.contact_confirmation(first_name, last_name, customer_email, message).deliver
        @success = true
      end
    end
    
    respond_to do |format|
      format.html { redirect_to "/"}
      format.json { render :json => { :success => @success }.to_json }
    end
    
  end

end
