json.user do
  json.extract! @user, 
                :id, :first_name, :last_name, :birthday, :bio, :education,
                :email, :gender, :hometown, :relationship, :websites,
                :social_links
  json.profilePhotoURL url_for(@user.profile_photo) if @user.profile_photo.attached?
  json.coverPhotoURL url_for(@user.cover_photo) if @user.cover_photo.attached?
end


