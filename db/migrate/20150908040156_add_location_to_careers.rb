class AddLocationToCareers < ActiveRecord::Migration
  def change
    add_column :careers, :location, :string
  end
end
