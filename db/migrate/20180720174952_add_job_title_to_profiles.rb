class AddJobTitleToProfiles < ActiveRecord::Migration[5.1]
  def change
    add_column :profiles, :job_title, :string
  end
end
