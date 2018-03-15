class VideoListing < ApplicationRecord
  default_scope -> { order("created_at DESC") }
  mount_uploader :image, ImageUploader
end
