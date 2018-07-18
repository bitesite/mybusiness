require 'faker'

FactoryBot.define do
  factory :web_listing do
    name "Test Website"
    url "http://www.example.com/video"
    sequence(:position) {|n| n }
  end
end