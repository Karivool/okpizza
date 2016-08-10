class CreateResponses < ActiveRecord::Migration
  def change
    create_table :responses do |t|
      t.boolean :ans_one, null: false, default: false
      t.boolean :ans_two, null: false, default: false
      t.boolean :ans_three, null: false, default: false
      t.boolean :ans_four, null: false, default: false
      t.integer :question_id, null: false

      t.timestamps null: false
    end
    add_index :responses, :question_id
  end
end
