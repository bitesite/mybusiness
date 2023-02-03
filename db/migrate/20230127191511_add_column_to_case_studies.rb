class AddColumnToCaseStudies < ActiveRecord::Migration[5.2]
  def change
    add_column :case_studies, :card_image, :string
  end
end
