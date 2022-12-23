class VisitorMailerPreview < ActionMailer::Preview
  def contact_confirmation
    first_name = "test"
    last_name = "test"
    customer_email = "test@email.com"
    message = "this is a test message"

    VisitorMailer.contact_confirmation(first_name, last_name, customer_email, message)
  end
end
