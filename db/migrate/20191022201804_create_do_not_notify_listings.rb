class CreateDoNotNotifyListings < ActiveRecord::Migration[5.1]
  def change
    create_table :do_not_notify_listings do |t|
      t.string :email

      t.timestamps
    end
  end
end
