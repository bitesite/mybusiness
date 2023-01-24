class UpdateColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :case_studies, :logo, :logo_image
  end
end
