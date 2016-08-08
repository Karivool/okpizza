json.extract! user, :id, :username, :email, :birthdate, :gender, :orientation, :city_name, :state_name, :summary

json.image_url asset_path(user.image.url)
