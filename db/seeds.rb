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

song1 = Song.create({title: "Caribou - Can't Do Without You",
                     description: "Love this song",
                     user_id: 1})
