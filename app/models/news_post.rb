class NewsPost < ApplicationRecord
  scope :reverse_chronological, -> { order("created_at desc") }
  scope :published, -> { where(hidden: false) }  
  mount_uploader :image, ImageUploader
end
