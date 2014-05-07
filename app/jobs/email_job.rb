class EmailJob 
  include SuckerPunch::Job

  def perform(first_name, last_name, customer_email, message)
    AdminMailer.customer_contact(first_name, last_name, customer_email, message).deliver
    VisitorMailer.contact_confirmation(first_name, last_name, customer_email, message).deliver
  end
end