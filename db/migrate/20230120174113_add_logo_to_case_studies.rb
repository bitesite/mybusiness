class AddLogoToCaseStudies < ActiveRecord::Migration[5.2]
  def change
    add_column :case_studies, :logo, :string
  end
end
