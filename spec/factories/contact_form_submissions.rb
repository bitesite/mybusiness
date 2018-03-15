require 'faker'

FactoryBot.define do
  factory :contact_form_submission do
    first_name { Faker::Name.first_name }
    last_name { Faker::Name.last_name }
    email_address { Faker::Internet.email }
    message "Test"
  end
end