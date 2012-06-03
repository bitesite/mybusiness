class PagesController < ApplicationController
  def home
    @title = "bitesite.ca | websites made easy"
  end
  
  def packages
    @title = "bitesite.ca | packages"
  end

  def addons
    @title = "bitesite.ca | addons"
  end
  
  def portfolio
    @title = "bitesite.ca | portfolio"
  end

  def contact
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
  
end
