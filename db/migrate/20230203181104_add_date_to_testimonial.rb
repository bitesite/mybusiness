class AddDateToTestimonial < ActiveRecord::Migration[5.2]
  def up
    if ActiveRecord::Base.connection.table_exists? "testimonials"
      add_column :testimonials, :date, :date
    end
  end

  def down
    if ActiveRecord::Base.connection.table_exists? "testimonials"
      remove_column :testimonials, :date
    end
  end
end
