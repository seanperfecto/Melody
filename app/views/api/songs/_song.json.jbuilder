json.extract! song, :title, :description, :id, :user_id
json.image_url asset_path(song.image.url)
json.track_url asset_path(song.track.url)

json.user do
  json.extract! song.user, :username
end

# json.comments song.comments do |comment|
#     json.set! comment.id do
#       json.partial! '/api/comments/comment', comment: comment
#     end
#   end
# end
