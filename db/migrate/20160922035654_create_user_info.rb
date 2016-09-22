class CreateUserInfo < ActiveRecord::Migration
  def change
    create_table :user_infos do |t|
      t.string :summary
      t.string :doing
      t.string :favorite
      t.string :sixthings
      t.string :thinking
      t.string :typical
      t.string :messageif
      t.integer :user_id, null: false

      t.timestamps null: false
    end
    add_index :user_infos, :user_id
  end
end
