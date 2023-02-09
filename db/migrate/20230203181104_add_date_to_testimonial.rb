class AddDateToTestimonial < ActiveRecord::Migration[5.2]
  def change
    add_column :testimonials, :date, :date
  end
end
