class AddUserIdToProfile < ActiveRecord::Migration[4.2]
  def up
    add_column :profiles, :user_id, :integer
    add_index :profiles, :user_id
  end

  def down
    remove_column :profiles, :user_id
  end
end
