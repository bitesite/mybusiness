class AddMetaDescriptionToBlogPosts < ActiveRecord::Migration[5.1]
  def change
    add_column :blog_posts, :meta_description, :string
  end
end
