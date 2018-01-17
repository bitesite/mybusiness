class TimeOffEntry < ActiveRecord::Base
  attr_accessible :amount, :entry_date, :notes, :time_off_type, :user_id

  VALID_TYPES = ['Vacation Day', 'Sick Day', 'Unpaid Vacation']
  VALID_STATUSES = ['Pending', 'Approved']
  VALID_AMOUNTS = [1, 0.5, 0.25]

  belongs_to :user

  default_scope -> { order("entry_date asc") }
  scope :pending, -> { where(status: 'Pending').order("entry_date asc") }
  scope :approved, -> { where(status: 'Approved').order("entry_date asc") }
end
