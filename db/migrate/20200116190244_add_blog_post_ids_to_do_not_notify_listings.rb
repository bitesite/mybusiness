class AddBlogPostIdsToDoNotNotifyListings < ActiveRecord::Migration[5.1]
  def change
    add_column :do_not_notify_listings, :blog_post_ids, :text
  end
end
