class Profile < ActiveRecord::Base
  attr_accessible :employee_number, :first_name, :last_name, :start_date
  validates :employee_number, uniqueness: {scope: :employee_number}
  belongs_to :user
end
