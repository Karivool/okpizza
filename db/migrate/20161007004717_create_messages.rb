class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.string :message, null: false
      t.integer :user_id, null: false
      t.integer :sent_id, null: false

      t.timestamps null: false
    end
    add_index :messages, :user_id
    add_index :messages, :sent_id
  end
end
