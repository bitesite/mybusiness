class BlogPostImage < ApplicationRecord
  belongs_to :blog_post

  mount_uploader :image, BlogPostImageUploader
end
