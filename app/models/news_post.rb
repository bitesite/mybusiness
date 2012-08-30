class NewsPost < ActiveRecord::Base
  attr_accessible :body, :image, :title
  
  mount_uploader :image, ImageUploader
end
