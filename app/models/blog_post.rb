class BlogPost < ActiveRecord::Base
  default_scope -> { order("created_at desc")}
  scope :published, -> { where(published: true).order("created_at desc") }
  attr_accessible :body, :title, :published
  belongs_to :user
end
