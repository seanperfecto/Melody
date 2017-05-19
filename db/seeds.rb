# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create({email: 'guestuser@gmail.com', username: 'guestuser', password: 'password'})
user2 = User.create({email: 'kobe@gmail.com', username: 'kobe', password: 'password'})
user3 = User.create({email: 'shaq@gmail.com', username: 'shaq', password: 'password'})
user4 = User.create({email: 'phil@gmail.com', username: 'phil', password: 'password'})

song_a = Song.create({title: "dyalla - Lush",
                     description: "Chill vibes for a chill night.",
                     user_id: 3,
                     image: File.new("#{Rails.root}/app/assets/images/lush.jpeg"),
                     track: File.new("#{Rails.root}/app/assets/music/Lush.mp3")})
                     
