class BlogPost < ApplicationRecord
  default_scope -> { order("created_at desc")}
  scope :published, -> { where(published: true) }
  belongs_to :user, optional: true
  has_many :blog_post_images
  mount_uploader :featured_image, BlogPostFeaturedImageUploader
end
