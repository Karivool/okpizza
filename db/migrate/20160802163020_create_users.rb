class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :birthdate, null: false
      t.string :gender, null: false
      t.string :orientation, null: false
      t.string :city_name, null: false
      t.string :state_name, null: false
      t.string :summary

      t.timestamps null: false
    end
    add_index :users, :username, unique: true
    add_index :users, :session_token, unique: true
  end
end
