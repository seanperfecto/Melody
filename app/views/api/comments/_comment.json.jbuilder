json.extract! comment, :id, :body
json.time time_ago_in_words(comment.created_at)
json.user_id comment.user.id
json.user_pic asset_path(comment.user.profilepic.url)
json.user_username comment.user.username
