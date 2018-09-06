class AddHiddenToNewsPosts < ActiveRecord::Migration[4.2]
  def change
    add_column :news_posts, :hidden, :boolean
  end
end
