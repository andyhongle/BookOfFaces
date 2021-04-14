class Api::PostsController < ApplicationController
    def index
        # fix this later to show right posts by DESC
        @posts = Post.all
        render :index
    end

    def create
        @post = Post.new(post_params)
        if @post.save
            render :show
        else
            render json: @post.errors.full_messages, status: 400
        end
    end

    def destroy
        @post = Post.find_by(id: params[:id])
        if @post
            @post.destroy
            render :show
        else
            render json: ['Post not found!'], status: 404
        end
    end

    def update
        @post = Post.find_by(id:params[:id])
        if @post.update(post_params)
            render :show
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def post_params
        params.require(:post).permit(:author_id, :wall_id, :body, :photo)
    end
end
