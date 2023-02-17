class AddShortQuoteToTestimonials < ActiveRecord::Migration[5.2]
  def up
    if ActiveRecord::Base.connection.table_exists? "testimonials"
      add_column :testimonials, :short_quote, :string
    end

    def down
      if ActiveRecord::Base.connection.table_exists? "testimonials"
        remove_column :testimonials, :short_quote
      end
    end
  end
end
