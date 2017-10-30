require 'faker'

FactoryGirl.define do
  factory :news_post do
    title "Test Post"
    body "Great news!"
    hidden false
  end
end