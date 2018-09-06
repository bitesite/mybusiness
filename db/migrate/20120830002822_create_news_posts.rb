class CreateNewsPosts < ActiveRecord::Migration[4.2]
  def change
    create_table :news_posts do |t|
      t.string :title
      t.text :body
      t.string :image

      t.timestamps
    end
  end
end
