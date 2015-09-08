class NewsPost < ActiveRecord::Base
  default_scope order("created_at DESC")
  scope :published, -> { where(hidden: false).order("created_at DESC") }
  attr_accessible :body, :image, :title, :hidden
  
  mount_uploader :image, ImageUploader
end
