class Profile < ActiveRecord::Base
  belongs_to :user
  validates :employee_number, uniqueness: true, allow_nil: true
end
