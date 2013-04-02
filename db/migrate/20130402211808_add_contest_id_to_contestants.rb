class AddContestIdToContestants < ActiveRecord::Migration
  def change
    add_column :contestants, :contest_id, :integer
  end
end
