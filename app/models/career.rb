class Career < ApplicationRecord
  default_scope { order("created_at desc") }
  scope :published, -> { where(archived: [false, nil]) }
end
