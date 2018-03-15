require 'faker'

FactoryBot.define do
  factory :blog_post_image do
    image "test.jpg"
    blog_post
  end
end