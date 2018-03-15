require 'faker'

FactoryBot.define do
  factory :setting do
    name "test_setting"
    value "test value"
  end
end