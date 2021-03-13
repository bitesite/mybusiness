class RemoveExpoPushTokenFromProfiles < ActiveRecord::Migration[5.1]
  def change
    remove_column :profiles, :expo_push_token, :string
  end
end
