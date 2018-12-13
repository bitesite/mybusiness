class AddFeaturedVideoToBlogPosts < ActiveRecord::Migration[5.1]
  def change
    add_column :blog_posts, :featured_video, :string
  end
end
