json.user do
  json.extract! @user, 
                :id, :first_name, :last_name, :birthday, :bio, :education,
                :hometown, :relationship, :websites, :social_links
end