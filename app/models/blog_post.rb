class BlogPost < ActiveRecord::Base
  scope :published, -> { where(published: true) }
  attr_accessible :body, :title, :published
end
