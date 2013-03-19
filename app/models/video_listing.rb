class VideoListing < ActiveRecord::Base
  default_scope order("updated_at DESC")
  attr_accessible :image, :link, :name
  
  mount_uploader :image, ImageUploader
end
