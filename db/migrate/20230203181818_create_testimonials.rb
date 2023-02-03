class CreateTestimonials < ActiveRecord::Migration[5.2]
  def change
    create_table :testimonials do |t|
      t.string "quote"
      t.text "body"
      t.string "name"
      t.string "title"
      t.string "logo"
      t.integer "case_study_id"
      t.datetime "created_at", null: false
      t.datetime "updated_at", null: false
    end
  end
end
