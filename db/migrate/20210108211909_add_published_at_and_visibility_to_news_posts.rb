class AddPublishedAtAndVisibilityToNewsPosts < ActiveRecord::Migration[5.1]
  def change
    add_column :news_posts, :published_at, :datetime
    add_column :news_posts, :visibility, :string
  end
end
