class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.string :name
      t.string :email
      t.text :body
      t.belongs_to :blog_post, foreign_key: true

      t.timestamps
    end
  end
end
