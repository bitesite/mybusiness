require 'faker'

FactoryBot.define do
  factory :comment do
    name 'Casey Li'
    email { Faker::Internet.email }
    body 'This is a comment'
    blog_post
  end
end