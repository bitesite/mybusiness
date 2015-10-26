class AddArchivedToCareers < ActiveRecord::Migration
  def change
    add_column :careers, :archived, :boolean
  end
end
