class CreateDownloads < ActiveRecord::Migration[5.1]
  def change
    create_table :downloads do |t|
      t.string :aws_object_key
      t.string :name

      t.timestamps
    end
  end
end
