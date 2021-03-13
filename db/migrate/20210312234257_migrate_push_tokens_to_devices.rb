class MigratePushTokensToDevices < ActiveRecord::Migration[5.1]

  class User < ApplicationRecord
    has_many :devices
  end

  class Device < ApplicationRecord
    belongs_to :user
  end

  def up
    Profile.where("expo_push_token IS NOT NULL").each do |profile|
      if profile.expo_push_token.present? && profile.user
        profile.user.devices.create(push_token: profile.expo_push_token)
      end
    end
  end

  def down
    Device.destroy_all
  end
  
end
