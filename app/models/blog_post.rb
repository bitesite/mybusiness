class BlogPost < ApplicationRecord
  extend FriendlyId

  default_scope -> { order("created_at desc")}
  scope :published, -> { where(published: true) }
  
  belongs_to :user, optional: true
  has_many :blog_post_images
  
  mount_uploader :featured_image, BlogPostFeaturedImageUploader
  
  acts_as_taggable

  friendly_id :title, use: :slugged

  validates :title, presence: true
end
