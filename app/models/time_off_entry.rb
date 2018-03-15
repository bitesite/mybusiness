class TimeOffEntry < ActiveRecord::Base
  VALID_TYPES = ['Vacation Day', 'Sick Day', 'Unpaid Vacation']
  VALID_STATUSES = ['Pending', 'Approved']
  VALID_AMOUNTS = [1, 0.5, 0.25]

  belongs_to :user

  default_scope -> { order("entry_date asc") }
  scope :pending, -> { where(status: 'Pending') }
  scope :approved, -> { where(status: 'Approved') }
end
