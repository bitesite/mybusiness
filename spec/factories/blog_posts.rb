require 'faker'

FactoryBot.define do
  factory :blog_post do
    title 'My first blog post'
    body 'Welcome'
    published true

    factory :draft_blog_post do
      after(:build) do |blog_post|
        blog_post.published = false
      end
    end

  end
end