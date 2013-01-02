class ContactMailer < ActionMailer::Base
  default from: "info@bitesite.ca"
  
  def customer_contact(first_name, last_name, customer_email, message)
    @message = message
    @customer_email = customer_email
    @first_name = first_name
    @last_name = last_name
    
    mail(:to => "info@bitesite.ca",
         :from => @customer_email,
         :subject => "BiteSite.ca: Message from #{customer_email}")
  end
end
