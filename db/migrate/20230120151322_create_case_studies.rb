class CreateCaseStudies < ActiveRecord::Migration[5.2]
  def up
    unless ActiveRecord::Base.connection.table_exists? "case_studies"
      create_table :case_studies do |t|
        t.string :name
        t.string :subtitle
        t.text :challenge
        t.text :process
        t.text :outcome
        t.string :site_image
        t.string :challenge_image
        t.string :process_image
        t.string :outcome_image
        t.string :logo_image
        t.string :link
        t.string :card_image

        t.timestamps
      end
    end
  end

  def down
    if ActiveRecord::Base.connection.table_exists? "case_studies"
      drop_table :case_studies
    end
  end
end
