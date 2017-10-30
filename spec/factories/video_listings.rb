require 'faker'

FactoryGirl.define do
  factory :video_listing do
    name "Test Video"
    link "http://www.example.com/video"
  end
end