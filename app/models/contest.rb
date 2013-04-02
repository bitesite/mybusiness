class Contest < ActiveRecord::Base
  attr_accessible :name
  has_many :contestants
end
