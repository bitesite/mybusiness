class Role < ActiveRecord::Base
  attr_accessible :name
  
  has_and_belongs_to_many :users, :join_table => :users_roles

  belongs_to :resource,
             :polymorphic => true

  validates :resource_type,
            :inclusion => { :in => Rolify.resource_types },
            :allow_nil => true

  validates :name, presence: true
  validates :name, uniqueness: true

  scopify
end
