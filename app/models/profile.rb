class Profile < ApplicationRecord
  belongs_to :user
  validates :employee_number, uniqueness: true, allow_nil: true
end
