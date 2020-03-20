class FrequentlyAskedQuestion < ApplicationRecord
  validates :question, presence: true, uniqueness: true
  validates :answer, presence: true

  scope :in_order, -> { order(position: :asc) }
end
