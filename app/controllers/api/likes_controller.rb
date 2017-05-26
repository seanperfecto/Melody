class Api::LikesController < ApplicationController

  def create
    @like = Like.create(user_id: current_user.id, song_id: params[:song_id])
    @song = Song.find_by(id: params[:song_id])
    render '/api/songs/show'
  end

  def destroy
    @like = Like.find_by(song_id: params[:song_id]).where(user_id: current_user.id)
    @like.destroy
    render '/api/songs/show'
  end
end
