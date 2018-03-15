require 'faker'

FactoryBot.define do
  factory :email_blacklisting do
    email { Faker::Internet.email }
  end
end