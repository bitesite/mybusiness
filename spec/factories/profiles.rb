require 'faker'

FactoryBot.define do
  factory :profile do
    first_name {Faker::Name.first_name}
    last_name {Faker::Name.last_name}
    start_date {Faker::Date.backward(2)}
    sequence(:employee_number) {|n| "#{n}" }

    factory :profile_with_user do
      after(:build) do |profile|
        profile.user = build(:user_for_profile)
      end
    end
  end
end