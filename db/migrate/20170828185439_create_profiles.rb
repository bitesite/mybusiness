class CreateProfiles < ActiveRecord::Migration[4.2]
  def change
    create_table :profiles do |t|
      t.string :first_name
      t.string :last_name
      t.datetime :start_date
      t.integer :employee_number

      t.timestamps
    end

    add_index(:profiles, :employee_number, unique: true)
  end
end
