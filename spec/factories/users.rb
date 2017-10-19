require 'faker'

FactoryGirl.define do
  factory :user do
    email { Faker::Internet.email }
    password 'secret12'
    password_confirmation 'secret12'
    profile

    factory :admin_user do
      after(:build) do |user|
        user.add_role(build(:admin_role))
      end
    end

    factory :staff_user do
      after(:build) do |user|
        user.add_role(build(:staff_role))
      end
    end

    factory :supervisor_user do
      after(:build) do |user|
        user.add_role(build(:supervisor_user))
      end
    end
  end
end