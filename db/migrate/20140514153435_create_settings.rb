class CreateSettings < ActiveRecord::Migration[4.2]
  def change
    create_table :settings do |t|
      t.string :name
      t.text :value

      t.timestamps
    end
  end
end
