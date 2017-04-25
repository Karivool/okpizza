class CreateConvos < ActiveRecord::Migration
  def change
    create_table :convos do |t|
      t.integer :user_id, null: false
      t.integer :convo_id, null: false

      t.timestamps null: false
    end
    add_index :messages, :user_id
    add_index :messages, :convo_id
    end
  end
end
