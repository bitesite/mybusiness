class AdminMailerPreview < ActionMailer::AdminMailerPreview
  def customer_contact
    first_name = "test"
    last_name = "test"
    customer_email = "test@email.com"
    message = "this is a test message"
    AdminMailer.customer_contact(first_name, last_name, customer_email, message)
  end
end
