class Profile < ActiveRecord::Base
  attr_accessible :employee_number, :first_name, :last_name, :start_date
  belongs_to :user
end
