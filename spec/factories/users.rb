require 'faker'

FactoryBot.define do
  factory :user do
    email { Faker::Internet.email }
    password 'secret12'
    password_confirmation 'secret12'

    after(:build) do |user|
      user.profile = build(:profile)
    end

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

  factory :user_for_profile, class: User do
    email { Faker::Internet.email }
    password 'secret12'
    password_confirmation 'secret12'
  end

end