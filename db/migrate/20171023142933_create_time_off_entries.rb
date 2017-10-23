class CreateTimeOffEntries < ActiveRecord::Migration
  def change
    create_table :time_off_entries do |t|
      t.date :entry_date
      t.string :time_off_type
      t.float :amount
      t.text :notes
      t.string :status
      t.integer :user_id

      t.timestamps
    end
  end
end
