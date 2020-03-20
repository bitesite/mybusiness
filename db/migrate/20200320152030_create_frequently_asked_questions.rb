class CreateFrequentlyAskedQuestions < ActiveRecord::Migration[5.1]
  def change
    create_table :frequently_asked_questions do |t|
      t.string :question
      t.text :answer
      t.integer :position

      t.timestamps
    end
  end
end
