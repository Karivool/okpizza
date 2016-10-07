# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161007004717) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "infos", force: :cascade do |t|
    t.string   "summary"
    t.string   "doing"
    t.string   "favorite"
    t.string   "sixthings"
    t.string   "thinking"
    t.string   "typical"
    t.string   "messageif"
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "infos", ["user_id"], name: "index_infos_on_user_id", using: :btree

  create_table "messages", force: :cascade do |t|
    t.string   "message",    null: false
    t.integer  "user_id",    null: false
    t.integer  "sent_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "messages", ["sent_id"], name: "index_messages_on_sent_id", using: :btree
  add_index "messages", ["user_id"], name: "index_messages_on_user_id", using: :btree

  create_table "questions", force: :cascade do |t|
    t.string   "question",   null: false
    t.string   "ans_one",    null: false
    t.string   "ans_two",    null: false
    t.string   "ans_three",  null: false
    t.string   "ans_four",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "questions", ["question"], name: "index_questions_on_question", unique: true, using: :btree

  create_table "responses", force: :cascade do |t|
    t.integer  "answer",      null: false
    t.integer  "question_id", null: false
    t.integer  "user_id",     null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "responses", ["question_id"], name: "index_responses_on_question_id", using: :btree
  add_index "responses", ["user_id"], name: "index_responses_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",           null: false
    t.string   "password_digest",    null: false
    t.string   "email",              null: false
    t.string   "session_token",      null: false
    t.date     "birthdate",          null: false
    t.string   "gender",             null: false
    t.string   "orientation",        null: false
    t.string   "city_name",          null: false
    t.string   "state_name",         null: false
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
