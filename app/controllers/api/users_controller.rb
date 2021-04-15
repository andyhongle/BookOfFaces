class Api::UsersController < ApplicationController

    def index
        @users = User.all
        render :index
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render 'api/users/show'
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def update
        @user = current_user
        if @user.update(user_params)
            render 'api/users/show'
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def destroy

    end

    def user_params
        params.require(:user).permit(:username, :first_name, :last_name, 
            :password, :email, :gender, :birthday, :education, :cover_photo, 
            :bio, :work, :hometown, :pronunciation, :profile_photo)
    end

end
