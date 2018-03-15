class BlogPost < ApplicationRecord
  default_scope -> { order("created_at desc")}
  scope :published, -> { where(published: true) }
  belongs_to :user
  has_many :blog_post_images
end
