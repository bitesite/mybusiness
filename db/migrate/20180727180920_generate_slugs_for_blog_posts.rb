class GenerateSlugsForBlogPosts < ActiveRecord::Migration[5.1]
  def up
    BlogPost.find_each(&:save)
  end

  def down
    # Have to use SQL as update will still run the after save from friendly ID
    ActiveRecord::Base.connection.execute("UPDATE blog_posts SET slug = NULL;")
  end
end
