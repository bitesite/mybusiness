class PagesController < ApplicationController
  def home
    @title = "Home"
    @news_posts = NewsPost.limit(5)
  end
  
  def packages
    @title = "Packages"
  end

  def addons
    @title = "Addons"
  end
  
  def portfolio
    @title = "Portfolio"
  end

  def contact
    @title = "Contact"
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
  end
  
  def about
    @title = "About"
  end
  
end
