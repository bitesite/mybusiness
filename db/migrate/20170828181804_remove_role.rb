class RemoveRole < ActiveRecord::Migration[4.2]
  def up
    drop_table :roles
  end

  def down
    create_table :roles do |t|
      t.string :name

      t.timestamps
    end
  end
end
