class AddOtherWebPushFieldsToDevices < ActiveRecord::Migration[5.2]
  def change
    add_column :devices, :web_push_p256dh, :string
    add_column :devices, :web_push_auth, :string
  end
end
