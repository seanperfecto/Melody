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
                  profilepic: File.new("#{Rails.root}/app/assets/images/profile/default_profile.jpg"),
                  coverpic: File.new("#{Rails.root}/app/assets/images/cover/GrayBackground.jpg")})
u2 = User.create({email: 'sean@gmail.com',
                  username: 'seanperfecto',
                  password: 'password',
                  bio: 'Creator of Melody. You can find me @seanperfecto on Github/Linkedin.',
                  profilepic: File.new("#{Rails.root}/app/assets/images/profile/sean_prof.jpg"),
                  coverpic: 'https://awesomewallpapers.files.wordpress.com/2016/01/nebula-2710ceb3c3a7c3a5x1694-16x10.jpg'})
u3 = User.create({email: 'violinlover@gmail.com',
                  username: 'violinlvr',
                  password: 'password',
                  bio: 'Have you ever just stopped and listened to the string?',
                  profilepic: File.new("#{Rails.root}/app/assets/images/profile/violin.jpg"),
                  coverpic: 'http://econlife.com/wp-content/uploads/2014/02/Conductor-symphony-orchestra-iStock_000018329508Medium.jpg'})
u4 = User.create({email: 'tyler@gmail.com',
                  username: 'tylerm',
                  password: 'password',
                  bio: 'Just stumbled upon this website and thought I would give it a try.',
                  profilepic: File.new("#{Rails.root}/app/assets/images/profile/tyler.jpg"),
                  coverpic: 'http://cdn.demo.fabthemes.com/kansas/files/2012/08/wallpaper-722590cp.jpg'})
u5 = User.create({email: 'skaterboi@gmail.com',
                  username: 'skaterboi',
                  password: 'password',
                  bio: 'Jams and Ollies',
                  profilepic: 'http://amazingstuff.co.uk/wp-content/uploads/2013/01/blind_skater.jpg',
                  coverpic: 'http://cdn.bmx.transworld.net/blogs.dir/444/files/2015/08/2015-08-19-at-9.56.00-AM.jpg'})
u6 = User.create({email: 'edmgirl@gmail.com',
                  username: 'edmgirl',
                  password: 'password',
                  bio: 'Catch me under the electric sky.',
                  profilepic: 'http://cloud.edm.com/articles/57352463a69ec8665674a4b1-F.jpg',
                  coverpic: 'http://cdn.youredm.com/wp-content/uploads/2015/12/edm-rave-crowd-1.jpg?x56677'})
u7 = User.create({email: 'johnsmith@gmail.com',
                  username: 'johnsmith',
                  password: 'password',
                  bio: 'Just your average Joe, I mean John.',
                  profilepic: 'https://www.inlandsurfer.com/catalog/view/theme/inlandsurfer/image/inlandsurfer-home-banner.png',
                  coverpic: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Clouds_over_the_Atlantic_Ocean.jpg/1200px-Clouds_over_the_Atlantic_Ocean.jpg'})

# SONG SEEDS

Song.destroy_all
s1 = Song.create({title: "dyalla - Lush",
                 description: "Chill vibes for a chill night.",
                 user_id: u1.id,
                 image: File.new("#{Rails.root}/app/assets/images/albums/lush.jpeg"),
                 track: File.new("#{Rails.root}/app/assets/music/Lush.mp3")})
s2 = Song.create({title: "Wize - Freedom",
                 description: "The beat on this is so sick. Hope you all enjoy.",
                 user_id: u2.id,
                 image: File.new("#{Rails.root}/app/assets/images/albums/freedom.jpeg"),
                 track: File.new("#{Rails.root}/app/assets/music/freedom.wav")})
s3 = Song.create({title: "Maesu - Wildin",
                 description: "When you just want to feel a free once in a while.",
                 user_id: u3.id,
                 image: File.new("#{Rails.root}/app/assets/images/albums/wildin.jpg"),
                 track: File.new("#{Rails.root}/app/assets/music/wildin.mp3")})
s4 = Song.create({title: "Rilla Force - Youth (Baby)",
                 description: "This one goes out to all my friends and family.",
                 user_id: u4.id,
                 image: File.new("#{Rails.root}/app/assets/images/albums/youthbaby.jpeg"),
                 track: File.new("#{Rails.root}/app/assets/music/youthbaby.wav")})
# s5 = Song.create({title: "Monte Booker - Flight",
#                  description: "Credits to Monte Booker; his beats are bar none.",
#                  user_id: u1.id,
#                  image: File.new("#{Rails.root}/app/assets/images/albums/swl016.jpg"),
#                  track: File.new("#{Rails.root}/app/assets/music/flight.mp3")})
s6 = Song.create({title: "Johan Lilja - Finding Happiness",
                 description: "Whenever you ever feel down",
                 user_id: u2.id,
                 image: 'https://content.theartistunion.com/tracks/artwork/d12adbf03a6e11e78a18730948d84faf/d23372503a6e11e7930faf389911dc53-354843869_720c2f0497.jpg',
                 track: File.new("#{Rails.root}/app/assets/music/findinghappiness.wav")})
s7 = Song.create({title: "Wef - Woi",
                 description: "Groovy tones",
                 user_id: u3.id,
                 image: 'https://content.theartistunion.com/tracks/artwork/980ef1e0631811e6a720db150c8b9352/995b20f0631811e6863bcf063b33f6d0-WEF-WOI2.jpg',
                 track: File.new("#{Rails.root}/app/assets/music/woi.mp3")})
s8 = Song.create({title: "Rad Cat - All I Do",
                 description: "Rad Cat is one rad cat.",
                 user_id: u4.id,
                 image: 'https://content.theartistunion.com/tracks/artworks/000/103/171/original/6768cf.jpeg?1456359925',
                 track: File.new("#{Rails.root}/app/assets/music/allido.mp3")})
s9 = Song.create({title: "Daniel Caesar - Streetcar (Swell Edit)",
                 description: "Smooth.",
                 user_id: u1.id,
                 image: 'https://i1.sndcdn.com/artworks-000216477670-76dspg-t500x500.jpg',
                 track: File.new("#{Rails.root}/app/assets/music/streetcar.mp3")})
s10 = Song.create({title: "laxcity - Cound Pake",
                 description: "Smooth twist on Drake's Pound Cake",
                 user_id: u2.id,
                 image: 'https://i3.sndcdn.com/artworks-000151006781-18lyer-t500x500.jpg',
                 track: File.new("#{Rails.root}/app/assets/music/coundpake.mp3")})
s11 = Song.create({title: "Oshi - oceans",
                 description: "Wait for the drop, please wait for it",
                 user_id: u3.id,
                 image: 'https://i1.sndcdn.com/artworks-000145354355-jkaveq-t500x500.jpg',
                 track: File.new("#{Rails.root}/app/assets/music/oceans.mp3")})
# s12 = Song.create({title: "Ronin & Deverano - Fall",
#                  description: "Baby can I fall asleep with you?",
#                  user_id: u4.id,
#                  image: 'https://i1.sndcdn.com/artworks-000173901095-j0xlmm-t500x500.jpg',
#                  track: File.new("#{Rails.root}/app/assets/music/fall.mp3")})
s13 = Song.create({title: "Tasty Treat - Sideways",
                 description: "You know it ain't easy. For these thoughts here to leave me",
                 user_id: u5.id,
                 image: 'https://i1.sndcdn.com/artworks-000176818877-1u25pd-t500x500.jpg',
                 track: File.new("#{Rails.root}/app/assets/music/sideways.mp3")})
s14 = Song.create({title: "Opia - YDU",
                 description: "For the feels",
                 user_id: u6.id,
                 image: 'https://i1.sndcdn.com/artworks-000176990360-lozns2-t500x500.jpg',
                 track: File.new("#{Rails.root}/app/assets/music/ydu.mp3")})
s15 = Song.create({title: "Eljay - U",
                 description: "Twist on Rihanna's 'Needed Me'",
                 user_id: u7.id,
                 image: 'https://i1.sndcdn.com/artworks-000203395657-6s1bm0-t500x500.jpg',
                 track: File.new("#{Rails.root}/app/assets/music/U.mp3")})
s16 = Song.create({title: "Malo - Something Real ft. Kellie Eastwood",
                 description: "Support the up-and-comers",
                 user_id: u5.id,
                 image: 'https://i1.sndcdn.com/artworks-000180924516-9doq90-t500x500.jpg',
                 track: File.new("#{Rails.root}/app/assets/music/somethingreal.wav")})
s17 = Song.create({title: "Ninski x Bri Tolani x Wiles - Neighborhoods",
                 description: "Ever just think about your neghborhood?",
                 user_id: u6.id,
                 image: 'https://i1.sndcdn.com/artworks-000183378118-3wvi6q-t500x500.jpg',
                 track: File.new("#{Rails.root}/app/assets/music/Neighborhoods.mp3")})
s18 = Song.create({title: "Wingtip - Rewind ft. Sophie Strauss",
                 description: "Let's rewind.",
                 user_id: u7.id,
                 image: 'https://i1.sndcdn.com/artworks-BM5yxDRf1Jk0-0-t500x500.jpg',
                 track: File.new("#{Rails.root}/app/assets/music/rewind.wav")})
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
s21 = Song.create({title: "Pluto - Wet",
                 description: "This beat slaps",
                 user_id: 3,
                 image: 'https://i1.sndcdn.com/artworks-000186369703-9qbz02-t500x500.jpg',
                 track: File.new("#{Rails.root}/app/assets/music/wet.mp3")})
