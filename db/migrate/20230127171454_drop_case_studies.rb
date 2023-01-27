class DropCaseStudies < ActiveRecord::Migration[5.2]
  def change
    drop_table :case_studies
  end
end
