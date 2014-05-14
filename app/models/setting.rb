class Setting < ActiveRecord::Base
  attr_accessible :name, :value

  SETTING_NAMES = ["contact_confirmation_message"].sort
end
