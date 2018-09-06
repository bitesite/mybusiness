class AddContestIdToContestants < ActiveRecord::Migration[4.2]
  def change
    add_column :contestants, :contest_id, :integer
  end
end
