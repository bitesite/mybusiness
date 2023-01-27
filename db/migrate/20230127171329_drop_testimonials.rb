class DropTestimonials < ActiveRecord::Migration[5.2]
  def change
    drop_table :testimonials
  end
end
