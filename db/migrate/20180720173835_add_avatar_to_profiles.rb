class AddAvatarToProfiles < ActiveRecord::Migration[5.1]
  def change
    add_column :profiles, :avatar, :string
  end
end
