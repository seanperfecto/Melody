json.extract! song, :title, :description
json.image_url asset_path(song.image.url)

json.user do
  json.extract! song.user, :username
end
