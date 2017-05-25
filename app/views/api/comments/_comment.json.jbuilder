json.extract! comment, :id, :body

json.user do
  json.extract! comment.user, :id, :username, :profile_pic
end

json.song do
  json.extract! comment.song, :id, :title
end
