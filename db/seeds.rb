# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# USER SEEDS

User.destroy_all
user1 = User.create({email: 'guestuser@gmail.com', username: 'guestuser', password: 'password'})
user2 = User.create({email: 'kobe@gmail.com', username: 'kobe', password: 'password'})
user3 = User.create({email: 'shaq@gmail.com', username: 'shaq', password: 'password'})
user4 = User.create({email: 'phil@gmail.com', username: 'phil', password: 'password'})

# SONG SEEDS

Song.destroy_all
s2 = Song.create({title: "dyalla - Lush",
                     description: "Chill vibes for a chill night.",
                     user_id: 3,
                     image: File.new("#{Rails.root}/app/assets/images/lush.jpeg"),
                     track: File.new("#{Rails.root}/app/assets/music/Lush.mp3")})

s3 = Song.create({title: "Rihanna - Work",
                 description: "Work",
                 user_id: 3,
                 image: "https://s3-us-west-1.amazonaws.com/melody-dev/songs/images/000/000/010/original/PTP264-426-2.jpg",
                 track: "https://s3-us-west-1.amazonaws.com/melody-dev/songs/tracks/000/000/009/original/04_Work.mp3"})
