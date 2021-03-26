class AddWebPushEndpointToDevices < ActiveRecord::Migration[5.2]
  def change
    add_column :devices, :web_push_endpoint, :string
  end
end
