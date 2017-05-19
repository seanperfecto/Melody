json.extract! song, :title, :description, :id, :user_id
json.image_url asset_path(song.image.url)
json.track_url asset_path(song.track.url)

json.user do
  json.extract! song.user, :username
end
