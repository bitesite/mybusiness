class Profile < ActiveRecord::Base
  attr_accessible :employee_number, :first_name, :last_name, :start_date
  belongs_to :user
  validates :employee_number, uniqueness: true, allow_nil: true
end
