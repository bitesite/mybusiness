class AddPublishedAtToBlogPost < ActiveRecord::Migration[5.2]
  def change
    add_column :blog_posts, :published_at, :datetime

    BlogPost.all.each do |blog_post|
      blog_post.update(published_at: blog_post.updated_at || blog_post.created_at) if blog_post.published
    end
  end
end
