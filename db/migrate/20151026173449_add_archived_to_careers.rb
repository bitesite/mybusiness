class AddArchivedToCareers < ActiveRecord::Migration[4.2]
  def change
    add_column :careers, :archived, :boolean
  end
end
