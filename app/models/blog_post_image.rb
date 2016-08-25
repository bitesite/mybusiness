class BlogPostImage < ActiveRecord::Base
  attr_accessible :blog_post_id, :image
  belongs_to :blog_post

  mount_uploader :image, BlogPostImageUploader
end
