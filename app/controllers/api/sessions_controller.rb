class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

        if @user
            login!(@user)
            render '/api/users/show'
        else
            render json: ["Invalid username/password combination"], status: 401
        end
    end

    def destroy
        if current_user
            log_out!
            render json: {}
        else
            render json: ["Nobody signed in"], status: 404
        end
    end

end
