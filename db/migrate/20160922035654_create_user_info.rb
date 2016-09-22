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

        t.timestamps null: false
    end
  end
end
