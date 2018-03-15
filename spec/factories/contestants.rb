require 'faker'

FactoryBot.define do
  factory :contestant do
    email { Faker::Internet.email }
    first_name { Faker::Name.first_name }
    last_name { Faker::Name.last_name }
    notes "Test"
    contest
  end
end