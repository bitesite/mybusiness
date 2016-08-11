class CreateEmailBlacklistings < ActiveRecord::Migration
  def change
    create_table :email_blacklistings do |t|
      t.string :email

      t.timestamps
    end
  end
end
