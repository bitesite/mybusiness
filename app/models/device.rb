class Device < ApplicationRecord
  belongs_to :user, optional: true
end
