json.extract! song, :title, :description, :id, :user_id
json.time time_ago_in_words(song.created_at)
if current_user
  json.liked current_user.likes.any?{|like| like.song_id == song.id}
else
  json.liked false
end

json.image_url asset_path(song.image.url)
json.track_url asset_path(song.track.url)

json.user do
  json.extract! song.user, :username
end
