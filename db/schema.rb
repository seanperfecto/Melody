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

ActiveRecord::Schema.define(version: 20170526003839) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "comments", force: :cascade do |t|
    t.text     "body",       null: false
    t.integer  "song_id",    null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["song_id"], name: "index_comments_on_song_id", using: :btree
    t.index ["user_id"], name: "index_comments_on_user_id", using: :btree
  end

  create_table "likes", force: :cascade do |t|
    t.integer  "song_id"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["song_id"], name: "index_likes_on_song_id", using: :btree
    t.index ["user_id"], name: "index_likes_on_user_id", using: :btree
  end

  create_table "songs", force: :cascade do |t|
    t.string   "title",              null: false
    t.string   "description"
    t.integer  "user_id",            null: false
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.string   "image_file_name"
    t.string   "image_content_type"
    t.integer  "image_file_size"
    t.datetime "image_updated_at"
    t.string   "track_file_name"
    t.string   "track_content_type"
    t.integer  "track_file_size"
    t.datetime "track_updated_at"
    t.index ["title"], name: "index_songs_on_title", using: :btree
    t.index ["user_id"], name: "index_songs_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                   null: false
    t.string   "username",                null: false
    t.string   "password_digest",         null: false
    t.string   "session_token",           null: false
    t.datetime "created_at",              null: false
    t.datetime "updated_at",              null: false
    t.string   "profilepic_file_name"
    t.string   "profilepic_content_type"
    t.integer  "profilepic_file_size"
    t.datetime "profilepic_updated_at"
    t.string   "coverpic_file_name"
    t.string   "coverpic_content_type"
    t.integer  "coverpic_file_size"
    t.datetime "coverpic_updated_at"
    t.text     "bio"
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["session_token"], name: "index_users_on_session_token", using: :btree
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end
