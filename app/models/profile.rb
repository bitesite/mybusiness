class Profile < ApplicationRecord
  belongs_to :user, optional: true
  validates :employee_number, uniqueness: true, allow_nil: true
end
