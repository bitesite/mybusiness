class CreateBlogPostImages < ActiveRecord::Migration
  def change
    create_table :blog_post_images do |t|
      t.string :image
      t.integer :blog_post_id

      t.timestamps
    end
  end
end
