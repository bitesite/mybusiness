class TimeOffEntry < ApplicationRecord
  VALID_TYPES = ['Vacation Day', 'Sick Day', 'Unpaid Vacation']
  VALID_STATUSES = ['Pending', 'Approved']
  VALID_AMOUNTS = [1, 0.5, 0.25]

  belongs_to :user, optional: true

  default_scope -> { order("entry_date asc") }
  scope :pending, -> { where(status: 'Pending') }
  scope :approved, -> { where(status: 'Approved') }
end
