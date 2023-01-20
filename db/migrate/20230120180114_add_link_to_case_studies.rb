class AddLinkToCaseStudies < ActiveRecord::Migration[5.2]
  def change
    add_column :case_studies, :link, :string
  end
end
