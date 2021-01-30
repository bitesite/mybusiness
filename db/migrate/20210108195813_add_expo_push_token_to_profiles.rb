class AddExpoPushTokenToProfiles < ActiveRecord::Migration[5.1]
  def change
    add_column :profiles, :expo_push_token, :string
  end
end
