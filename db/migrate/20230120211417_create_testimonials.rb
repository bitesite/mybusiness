class CreateTestimonials < ActiveRecord::Migration[5.2]
  def up
    unless ActiveRecord::Base.connection.table_exists? "testimonials"
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

  def down
    if ActiveRecord::Base.connection.table_exists? "testimonials"
      drop_table :testimonials
    end
  end
end
