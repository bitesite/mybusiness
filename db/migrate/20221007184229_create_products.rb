class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :title
      t.text :body
      t.string :link

      t.timestamps
    end
  end
end
