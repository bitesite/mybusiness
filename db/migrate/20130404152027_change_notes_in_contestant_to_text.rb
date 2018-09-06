class ChangeNotesInContestantToText < ActiveRecord::Migration[4.2]
  def up
    change_column :contestants, :notes, :text
  end

  def down
    change_column :contestants, :notes, :string
  end
end
