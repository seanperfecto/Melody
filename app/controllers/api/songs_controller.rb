class Api::SongsController < ApplicationController
  def index
    @songs = Song.all
  end

  def show
    @song = Song.find(params[:id])
  end

  def create
    @song = Song.new(song_params)
    if @song.save
      render :show
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

  def destroy
    @song = Song.find(params[:id])
    @song.destroy
    render :show
  end

  def update
    @song = Song.find(params[:id])
    updated_params = {}
    unless song_params[:image] == @song.image.url
      updated_params[:image] = song_params[:image]
    end
    unless song_params[:track] == @song.track.url
      updated_params[:track] = song_params[:track]
    end
    updated_params[:title] = song_params[:title]
    updated_params[:description] = song_params[:description]
    updated_params[:user_id] = song_params[:user_id]
    if @song.update_attributes(updated_params)
      render :show
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

  def user_songs
    @user = User.find(params[:id])
    @songs = @user.songs
    render :index
  end

  private

  def song_params
    params.require(:song).permit(
    :title,
    :image,
    :track,
    :description,
    :user_id
    )
  end
end
