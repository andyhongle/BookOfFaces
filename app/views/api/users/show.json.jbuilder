json.user do
  json.extract! @user, 
                :id, :first_name, :last_name, :birthday, :bio, :education,
                :email, :gender, :hometown, :relationship, :websites,
                :social_links
end


