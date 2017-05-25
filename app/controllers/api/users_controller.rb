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
    updated_params = {}
    if ((user_params[:profilepic] != nil) && (user_params[:profilepic] != @user.profilepic.url))
      updated_params[:profilepic] = user_params[:profilepic]
    end
    if ((user_params[:coverpic] != nil) && (user_params[:coverpic] != @user.coverpic.url))
      updated_params[:coverpic] = user_params[:coverpic]
    end
    if ((user_params[:bio] != nil) && (user_params[:bio] != @user.bio))
      updated_params[:bio] = user_params[:bio]
    end
    if @user.update_attributes(updated_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :username, :password,
                                 :profilepic, :coverpic, :bio)
  end
end
