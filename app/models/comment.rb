class Comment < ApplicationRecord
  belongs_to :blog_post

  validates :name, presence: true
  validates :email, presence: true
  validates :body, presence: true
end
