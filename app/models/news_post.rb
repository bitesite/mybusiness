class NewsPost < ActiveRecord::Base
  default_scope -> { order("created_at DESC") }
  scope :published, -> { where(hidden: false) }  
  mount_uploader :image, ImageUploader
end
