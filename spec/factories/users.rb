require 'faker'

FactoryGirl.define do
  factory :user do
    email { Faker::Internet.email }
    password 'secret12'
    password_confirmation 'secret12'
    profile

    factory :admin_user do
      after(:build) do |user|
        user.add_role :admin
      end
    end

    factory :staff_user do
      after(:build) do |user|
        user.add_role :staff
      end
    end

    factory :supervisor_user do
      after(:build) do |user|
        user.add_role :supervisor
      end
    end
  end
end