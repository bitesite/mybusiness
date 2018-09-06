class AddLocationToCareers < ActiveRecord::Migration[4.2]
  def change
    add_column :careers, :location, :string
  end
end
