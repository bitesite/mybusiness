require 'faker'

FactoryGirl.define do
  factory :career do
    title 'Software Developer'
    description 'This is a great job'
    capacity 'Full-time'
    location 'Ottawa, ON'
    archived false
  end
end