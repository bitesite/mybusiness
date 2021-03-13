class CreateDevices < ActiveRecord::Migration[5.1]
  def change
    create_table :devices do |t|
      t.string :push_token
      t.boolean :signed_in
      t.string :os
      t.string :os_version
      t.datetime :signed_in_at
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
