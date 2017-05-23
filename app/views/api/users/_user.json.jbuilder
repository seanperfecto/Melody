json.extract! user, :id, :username, :bio
json.profpic_url asset_path(user.profilepic.url)
json.covpic_url asset_path(user.coverpic.url)
