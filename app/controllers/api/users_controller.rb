require "open-uri"

class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    @user.profilepic = open('http://s3-us-west-1.amazonaws.com/melody-dev/users/profilepics/000/000/001/original/default_profile.jpg?1495412269')
    @user.coverpic = open('http://s3-us-west-1.amazonaws.com/melody-dev/users/coverpics/000/000/001/original/GrayBackground.jpg?1495412269')
    @user.bio = "Melody Music Lover"
    if @user.save
      signin(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attributes(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :username, :password)
  end
end
