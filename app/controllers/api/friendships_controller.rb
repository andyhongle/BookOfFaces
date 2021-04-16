class Api::FriendshipsController < ApplicationController
   def create
        @friendship = Friendship.new(friendship_params)
        if @friendship.save
            render :show
        else
            render json: @friendship.errors.full_messages, status: 422
        end
    end


     def destroy
        @friendship = friendship.find_by(id: params[:id])
        if @friendship
            @friendship.destroy
            render json: :show
        else
            render json: ['Unable to delete friendship'], status: 422
        end
    end


    private
    def friendship_params
        params.require(:friendship).permit(:adder_friend, :accepter_friend)
    end
end
