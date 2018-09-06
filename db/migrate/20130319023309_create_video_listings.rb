class CreateVideoListings < ActiveRecord::Migration[4.2]
  def change
    create_table :video_listings do |t|
      t.string :name
      t.string :link
      t.string :image

      t.timestamps
    end
  end
end
