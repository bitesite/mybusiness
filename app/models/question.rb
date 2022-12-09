class Question < ApplicationRecord
  scope :by_oldest, -> { order("created_at ASC") }
end
