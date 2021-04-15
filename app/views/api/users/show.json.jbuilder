json.user do
  json.partial! 'api/users/user', user: @user
  if @user.cover_photo.attached? 
    json.cover_photo url_for(@user.cover_photo)
  else
    json.cover_photo nil
  end

  if @user.profile_photo.attached?
    json.profile_photo url_for(@user.profile_photo)
  else
    json.profile_photo image_url('default-profile-pic.png')
  end

end


