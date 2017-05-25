json.extract! comment, :id, :body, :created_at

json.user do
  json.extract! comment.user, :id, :username
  json.profpic_url asset_path(comment.user.profilepic.url)
end
