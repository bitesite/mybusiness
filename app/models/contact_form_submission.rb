class ContactFormSubmission < ActiveRecord::Base
  default_scope -> { order("created_at desc")}

  attr_accessible :email_address, :first_name, :last_name, :message
end
