class CreateTestimonials < ActiveRecord::Migration[5.2]
  def change
    create_table :testimonials do |t|
      t.string :quote
      t.text :body
      t.string :name
      t.string :title
      t.string :logo

      t.timestamps
    end
  end
end
