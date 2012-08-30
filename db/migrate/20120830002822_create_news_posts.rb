class CreateNewsPosts < ActiveRecord::Migration
  def change
    create_table :news_posts do |t|
      t.string :title
      t.text :body
      t.string :image

      t.timestamps
    end
  end
end
