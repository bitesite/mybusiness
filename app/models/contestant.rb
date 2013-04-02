class Contestant < ActiveRecord::Base
  attr_accessible :email, :first_name, :last_name, :notes
  belongs_to :contest
  
end
