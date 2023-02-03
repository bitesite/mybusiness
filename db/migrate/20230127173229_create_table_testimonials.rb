class CreateTableTestimonials < ActiveRecord::Migration[5.2]
  def change
    create_table :table_testimonials do |t|
      t.string :quote
      t.text :body
      t.string :name
      t.string :title
      t.string :logo
      t.integer :case_study_id

      t.timestamps
    end
  end
end
