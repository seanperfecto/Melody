require "open-uri"
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# USER SEEDS

User.destroy_all
u1 = User.create({email: 'guestuser@gmail.com',
                  username: 'guestuser',
                  password: 'password',
                  bio: 'Just your average Melody user!',
                  profilepic: open('https://s3-us-west-1.amazonaws.com/melody-dev/users/profilepics/000/000/001/original/default_profile.jpg'),
                  coverpic: open('https://s3-us-west-1.amazonaws.com/melody-dev/users/coverpics/000/000/001/original/GrayBackground.jpg')})
