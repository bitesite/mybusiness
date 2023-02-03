class AddShortQuoteToTestimonials < ActiveRecord::Migration[5.2]
  def change
    add_column :testimonials, :short_quote, :string
  end
end
