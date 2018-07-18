class WebListing < ApplicationRecord
  validates :name, presence: true
  validates :url, presence: true

  scope :sorted, -> { order(position: :asc) }
end
