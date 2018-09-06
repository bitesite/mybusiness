class CreateContests < ActiveRecord::Migration[4.2]
  def change
    create_table :contests do |t|
      t.string :name

      t.timestamps
    end
  end
end
