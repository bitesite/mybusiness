class AddWeeklyBillableHoursTargetToProfiles < ActiveRecord::Migration[5.1]
  def change
    add_column :profiles, :weekly_billable_hours_target, :float
  end
end
