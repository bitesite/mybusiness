class CreateWebListings < ActiveRecord::Migration[5.1]
  def change
    create_table :web_listings do |t|
      t.string :name
      t.string :url
      t.integer :position

      t.timestamps
    end
  end
end
