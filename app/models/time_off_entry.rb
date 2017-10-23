class TimeOffEntry < ActiveRecord::Base
  attr_accessible :amount, :entry_date, :notes, :time_off_type, :user_id

  VALID_TYPES = ['Vacation Day', 'Sick Day']
  VALID_STATUSES = ['Pending', 'Approved']
  VALID_AMOUNTS = [1, 0.5, 0.25]
end
