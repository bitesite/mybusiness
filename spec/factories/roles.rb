require 'faker'

FactoryGirl.define do
  factory :role do
    factory :admin_role do
      name 'admin'
    end

    factory :staff_role do
      name 'staff'
    end

    factory :supervisor_role do
      name 'supervisor'
    end
  end
end