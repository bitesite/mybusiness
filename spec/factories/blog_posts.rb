require 'faker'

FactoryGirl.define do
  factory :blog_post do
    title 'My first blog post'
    body 'Welcome'
    published true
  end
end