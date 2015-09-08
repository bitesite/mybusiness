class AddHiddenToNewsPosts < ActiveRecord::Migration
  def change
    add_column :news_posts, :hidden, :boolean
  end
end
