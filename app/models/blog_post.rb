class BlogPost < ActiveRecord::Base
  default_scope -> { order("created_at desc")}
  scope :published, -> { where(published: true).order("created_at desc") }
  belongs_to :user
  has_many :blog_post_images
end
