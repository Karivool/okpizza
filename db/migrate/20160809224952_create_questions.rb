class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.string :question, null: false
      t.string :ans_one, null: false
      t.string :ans_two, null: false
      t.string :ans_three, null: false
      t.string :ans_four, null: false

      t.timestamps null: false
    end
    add_index :questions, :question
  end
end
