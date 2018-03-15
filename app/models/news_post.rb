class NewsPost < ApplicationRecord
  default_scope -> { order("created_at DESC") }
  scope :published, -> { where(hidden: false) }  
  mount_uploader :image, ImageUploader
end
