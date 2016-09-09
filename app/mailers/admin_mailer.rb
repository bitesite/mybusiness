class AdminMailer < ActionMailer::Base
  default from: "info@bitesite.ca"
  
  def visitor_has_entered_contest(contestant)
    @contestant = contestant
    
    mail(:to => "info@bitesite.ca",
         :from => "info@bitesite.ca",
         :reply_to => @contestant.email,
         :subject => "BiteSite.ca: Contest Entered by #{@contestant.email}")
  end
  
  def customer_contact(first_name, last_name, customer_email, message)
    @message = message
    @customer_email = customer_email
    @first_name = first_name
    @last_name = last_name
    
    mail(:to => "info@bitesite.ca",
         :from => @customer_email,
         :reply_to => @customer_email,
         :subject => "BiteSite.ca: Message from #{customer_email}")
  end
  
end
