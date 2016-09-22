class CreateInfos < ActiveRecord::Migration
  def change
    create_table :infos do |t|
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
    add_index :infos, :user_id
  end
end
