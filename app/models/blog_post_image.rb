class BlogPostImage < ActiveRecord::Base
  belongs_to :blog_post

  mount_uploader :image, BlogPostImageUploader
end
