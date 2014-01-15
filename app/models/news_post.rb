class NewsPost < ActiveRecord::Base
  default_scope order("created_at DESC")
  attr_accessible :body, :image, :title
  
  mount_uploader :image, ImageUploader
end
