class Career < ActiveRecord::Base
  attr_accessible :capacity, :description, :title, :location

  default_scope { order("created_at desc") }
end
