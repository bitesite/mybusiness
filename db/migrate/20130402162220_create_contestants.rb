class CreateContestants < ActiveRecord::Migration[4.2]
  def change
    create_table :contestants do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :notes

      t.timestamps
    end
  end
end
