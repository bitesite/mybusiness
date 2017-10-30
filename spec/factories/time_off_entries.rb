require 'faker'

FactoryGirl.define do
  factory :time_off_entry do
    entry_date { Date.today }
    amount 1.0
    notes "Trip"
    time_off_type "Vacation Day"
    user
  end
end