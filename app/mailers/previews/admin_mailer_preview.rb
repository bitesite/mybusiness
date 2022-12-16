class AdminMailerPreview < ActionMailer::Preview
  def customer_contact
    AdminMailer.with(user: User.first).customer_contact
  end
end
