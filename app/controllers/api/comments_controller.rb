class Api::CommentsController < ApplicationController

  def index
    @comments = Comment.all
  end

  def show
    @comment = Comment.find(params[:id])
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    render :show
  end


  def song_comments
    @song = Song.find(params[:id])
    @comments = @song.comments
    render :index
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :user_id, :song_id)
  end
end
