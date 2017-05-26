class Api::LikesController < ApplicationController

  def create
    @like = Like.new(like_params)
    @like.user_id = current_user.id
    @like.save
    @song = Song.find_by(id: params[:like][:song_id])
    render '/api/songs/show'
  end

  def destroy
    @like = Like.find_by(song_id: params[:like][:song_id],
                         user_id: current_user.id)
    @like.destroy
    @song = Song.find_by(id: params[:like][:song_id])
    render '/api/songs/show'
  end

  private
  def like_params
    params.require(:like).permit(:song_id)
  end
end
