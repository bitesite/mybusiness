require 'faker'

FactoryGirl.define do
  factory :email_blacklisting do
    email { Faker::Internet.email }
  end
end