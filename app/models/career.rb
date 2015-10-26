class Career < ActiveRecord::Base
  attr_accessible :capacity, :description, :title, :location, :archived

  default_scope { order("created_at desc") }
  scope :published, -> { where(archived: [false, nil]) }
end
