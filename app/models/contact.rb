class Contact < ApplicationRecord
  validates :email, presence: true, uniqueness: true
end
