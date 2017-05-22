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
u1 = User.create!({email: 'guestuser@gmail.com',
                  username: 'guestuser',
                  password: 'password',
                  bio: 'Just your average Melody user!',
                  profilepic: open('https://s3-us-west-1.amazonaws.com/melody-dev/users/profilepics/000/000/001/original/default_profile.jpg'),
                  coverpic: open('https://s3-us-west-1.amazonaws.com/melody-dev/users/coverpics/000/000/001/original/GrayBackground.jpg')})
u2 = User.create!({email: 'sean@gmail.com',
                  username: 'seanperfecto',
                  password: 'password',
                  bio: 'Creator of Melody. You can find me @seanperfecto on Github/Linkedin.',
                  profilepic: open('https://s3-us-west-1.amazonaws.com/melody-dev/users/profilepics/000/000/002/original/sean_prof.jpg'),
                  coverpic: open('https://s3-us-west-1.amazonaws.com/melody-dev/users/coverpics/000/000/002/original/nebula-2710ceb3c3a7c3a5x1694-16x10.jpg')})
u3 = User.create!({email: 'violinlover@gmail.com',
                  username: 'violinlvr',
                  password: 'password',
                  bio: 'Have you ever just stopped and listened to the string?',
                  profilepic: open('https://s3-us-west-1.amazonaws.com/melody-dev/users/profilepics/000/000/003/original/violin.jpg'),
                  coverpic: open('https://s3-us-west-1.amazonaws.com/melody-dev/users/coverpics/000/000/003/original/Conductor-symphony-orchestra-iStock_000018329508Medium.jpg')})
u4 = User.create!({email: 'tyler@gmail.com',
                  username: 'tylerm',
                  password: 'password',
                  bio: 'Just stumbled upon this website and thought I would give it a try.',
                  profilepic: open('https://s3-us-west-1.amazonaws.com/melody-dev/users/profilepics/000/000/004/original/tyler.jpg'),
                  coverpic: open('https://s3-us-west-1.amazonaws.com/melody-dev/users/coverpics/000/000/004/original/wallpaper-722590cp.jpg')})
u5 = User.create!({email: 'skaterboi@gmail.com',
                  username: 'skaterboi',
                  password: 'password',
                  bio: 'Jams and Ollies',
                  profilepic: open('https://s3-us-west-1.amazonaws.com/melody-dev/users/profilepics/000/000/005/original/blind_skater.jpg'),
                  coverpic: open('https://s3-us-west-1.amazonaws.com/melody-dev/users/coverpics/000/000/005/original/2015-08-19-at-9.56.00-AM.jpg')})
u6 = User.create!({email: 'edmgirl@gmail.com',
                  username: 'edmgirl',
                  password: 'password',
                  bio: 'Catch me under the electric sky.',
                  profilepic: open('https://s3-us-west-1.amazonaws.com/melody-dev/users/profilepics/000/000/006/original/57352463a69ec8665674a4b1-F.jpg'),
                  coverpic: open('https://s3-us-west-1.amazonaws.com/melody-dev/users/coverpics/000/000/006/original/edm-rave-crowd-1.jpg')})
u7 = User.create!({email: 'johnsmith@gmail.com',
                  username: 'johnsmith',
                  password: 'password',
                  bio: 'Just your average Joe, I mean John.',
                  profilepic: open('https://s3-us-west-1.amazonaws.com/melody-dev/users/profilepics/000/000/007/original/inlandsurfer-home-banner.png'),
                  coverpic: open('https://s3-us-west-1.amazonaws.com/melody-dev/users/coverpics/000/000/007/original/1200px-Clouds_over_the_Atlantic_Ocean.jpg')})

# SONG SEEDS

Song.destroy_all
s1 = Song.create!({title: "dyalla - Lush",
                 description: "Chill vibes for a chill night.",
                 user_id: u1.id,
                 image: open('https://s3-us-west-1.amazonaws.com/melody-dev/songs/images/000/000/001/original/lush.jpeg'),
                 track: open('https://s3-us-west-1.amazonaws.com/melody-dev/songs/tracks/000/000/001/original/Lush.mp3')})
s2 = Song.create!({title: "Wize - Freedom",
                 description: "The beat on this is so sick. Hope you all enjoy.",
                 user_id: u2.id,
                 image: open('https://s3-us-west-1.amazonaws.com/melody-dev/songs/images/000/000/002/original/freedom.jpeg'),
                 track: open('https://s3-us-west-1.amazonaws.com/melody-dev/songs/tracks/000/000/002/original/freedom.wav')})
s3 = Song.create!({title: "Maesu - Wildin",
                 description: "When you just want to feel a free once in a while.",
                 user_id: u3.id,
                 image: open('https://s3-us-west-1.amazonaws.com/melody-dev/songs/images/000/000/003/original/wildin.jpg'),
                 track: open('https://s3-us-west-1.amazonaws.com/melody-dev/songs/tracks/000/000/003/original/wildin.mp3')})
s4 = Song.create!({title: "Rilla Force - Youth (Baby)",
                 description: "This one goes out to all my friends and family.",
                 user_id: u4.id,
                 image: open('https://s3-us-west-1.amazonaws.com/melody-dev/songs/images/000/000/003/original/youthbaby.jpeg'),
                 track: open('https://s3-us-west-1.amazonaws.com/melody-dev/songs/tracks/000/000/003/original/youthbaby.wav')})
# s5 = Song.create({title: "Monte Booker - Flight",
#                  description: "Credits to Monte Booker; his beats are bar none.",
#                  user_id: u1.id,
#                  image: File.new("#{Rails.root}/app/assets/images/albums/swl016.jpg"),
#                  track: File.new("#{Rails.root}/app/assets/music/flight.mp3")})
s6 = Song.create!({title: "Johan Lilja - Finding Happiness",
                 description: "Whenever you ever feel down",
                 user_id: u2.id,
                 image: open('https://s3-us-west-1.amazonaws.com/melody-dev/songs/images/000/000/005/original/d23372503a6e11e7930faf389911dc53-354843869_720c2f0497.jpg'),
                 track: open('https://s3-us-west-1.amazonaws.com/melody-dev/songs/tracks/000/000/005/original/findinghappiness.wav')})
# s7 = Song.create!({title: "Wef - Woi",
#                  description: "Groovy tones",
#                  user_id: u3.id,
#                  image: open('https://s3-us-west-1.amazonaws.com/melody-dev/users/profilepics/000/000/007/original/inlandsurfer-home-banner.png'),
#                  track: open('https://s3-us-west-1.amazonaws.com/melody-dev/songs/tracks/000/000/001/original/Lush.mp3')})
s8 = Song.create!({title: "Rad Cat - All I Do",
                 description: "Rad Cat is one rad cat.",
                 user_id: u4.id,
                 image: open('https://s3-us-west-1.amazonaws.com/melody-dev/songs/images/000/000/006/original/6768cf.jpeg'),
                 track: open('https://s3-us-west-1.amazonaws.com/melody-dev/songs/tracks/000/000/006/original/allido.mp3')})
s9 = Song.create!({title: "Daniel Caesar - Streetcar (Swell Edit)",
                 description: "Smooth.",
                 user_id: u1.id,
                 image: open('https://s3-us-west-1.amazonaws.com/melody-dev/songs/images/000/000/007/original/artworks-000216477670-76dspg-t500x500.jpg'),
                 track: open('https://s3-us-west-1.amazonaws.com/melody-dev/songs/tracks/000/000/007/original/streetcar.mp3')})
s10 = Song.create!({title: "laxcity - Cound Pake",
                 description: "Smooth twist on Drake's Pound Cake",
                 user_id: u2.id,
                 image: open('https://s3-us-west-1.amazonaws.com/melody-dev/songs/images/000/000/008/original/artworks-000151006781-18lyer-t500x500.jpg'),
                 track: open('https://s3-us-west-1.amazonaws.com/melody-dev/songs/tracks/000/000/008/original/coundpake.mp3')})
s11 = Song.create!({title: "Oshi - oceans",
                 description: "Wait for the drop, please wait for it",
                 user_id: u3.id,
                 image: open('https://s3-us-west-1.amazonaws.com/melody-dev/songs/images/000/000/009/original/artworks-000145354355-jkaveq-t500x500.jpg'),
                 track: open('https://s3-us-west-1.amazonaws.com/melody-dev/songs/tracks/000/000/009/original/oceans.mp3')})
# s12 = Song.create({title: "Ronin & Deverano - Fall",
#                  description: "Baby can I fall asleep with you?",
#                  user_id: u4.id,
#                  image: 'https://i1.sndcdn.com/artworks-000173901095-j0xlmm-t500x500.jpg',
#                  track: File.new("#{Rails.root}/app/assets/music/fall.mp3")})
# s13 = Song.create!({title: "Tasty Treat - Sideways",
#                  description: "You know it ain't easy. For these thoughts here to leave me",
#                  user_id: u5.id,
#                  image: open('https://s3-us-west-1.amazonaws.com/melody-dev/users/profilepics/000/000/007/original/inlandsurfer-home-banner.png'),
#                  track: open('https://s3-us-west-1.amazonaws.com/melody-dev/songs/tracks/000/000/001/original/Lush.mp3')})
# s14 = Song.create!({title: "Opia - YDU",
#                  description: "For the feels",
#                  user_id: u6.id,
#                  image: open('https://s3-us-west-1.amazonaws.com/melody-dev/users/profilepics/000/000/007/original/inlandsurfer-home-banner.png'),
#                  track: open('https://s3-us-west-1.amazonaws.com/melody-dev/songs/tracks/000/000/001/original/Lush.mp3')})
s15 = Song.create!({title: "Eljay - U",
                 description: "Twist on Rihanna's 'Needed Me'",
                 user_id: u7.id,
                 image: open('https://s3-us-west-1.amazonaws.com/melody-dev/songs/images/000/000/010/original/artworks-000203395657-6s1bm0-t500x500.jpg'),
                 track: open('https://s3-us-west-1.amazonaws.com/melody-dev/songs/tracks/000/000/010/original/U.mp3')})
s16 = Song.create!({title: "Malo - Something Real ft. Kellie Eastwood",
                 description: "Support the up-and-comers",
                 user_id: u5.id,
                 image: open('https://s3-us-west-1.amazonaws.com/melody-dev/songs/images/000/000/011/original/artworks-000180924516-9doq90-t500x500.jpg'),
                 track: open('https://s3-us-west-1.amazonaws.com/melody-dev/songs/tracks/000/000/011/original/somethingreal.wav')})
s17 = Song.create!({title: "Ninski x Bri Tolani x Wiles - Neighborhoods",
                 description: "Ever just think about your neghborhood?",
                 user_id: u6.id,
                 image: open('https://s3-us-west-1.amazonaws.com/melody-dev/users/profilepics/000/000/007/original/inlandsurfer-home-banner.png'),
                 track: open('https://s3-us-west-1.amazonaws.com/melody-dev/songs/tracks/000/000/001/original/Lush.mp3')})
s18 = Song.create!({title: "Wingtip - Rewind ft. Sophie Strauss",
                 description: "Let's rewind.",
                 user_id: u7.id,
                 image: open('https://s3-us-west-1.amazonaws.com/melody-dev/songs/images/000/000/012/original/artworks-BM5yxDRf1Jk0-0-t500x500.jpg'),
                 track: open('https://s3-us-west-1.amazonaws.com/melody-dev/songs/tracks/000/000/012/original/rewind.wav')})
# s19 = Song.create!({title: "Alex Lustin - Timeless",
#                  description: "Just want to say this gets me going.",
#                  user_id: 7,
#                  image: 'https://i1.sndcdn.com/artworks-000179994600-54aeez-t500x500.jpg',
#                  track: File.new("#{Rails.root}/app/assets/music/timeless.mp3")})
# s20 = Song.create!({title: "SMiTHMUSiX - Summertime Fling ft. Alyshah",
#                  description: "For those who have ever had a summertime fling.",
#                  user_id: 4,
#                  image: 'https://i1.sndcdn.com/artworks-000182756338-g8x42l-t500x500.jpg',
#                  track: File.new("#{Rails.root}/app/assets/music/summertime.mp3")})
s21 = Song.create!({title: "Pluto - Wet",
                 description: "This beat slaps",
                 user_id: 3,
                 image: open('https://s3-us-west-1.amazonaws.com/melody-dev/songs/images/000/000/013/original/artworks-000186369703-9qbz02-t500x500.jpg'),
                 track: open('https://s3-us-west-1.amazonaws.com/melody-dev/songs/tracks/000/000/013/original/wet.mp3')})
