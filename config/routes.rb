Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy]
    resources :songs, except: [:new, :edit]
    resources :comments, only: [:index, :show, :create, :update, :destroy]
    resources :likes, only: [:create, :destroy]
    get 'user/:id/songs', to: 'songs#user_songs'
    get 'song/:id/comments', to: 'comments#song_comments'
    get 'likedsongs', to: 'songs#current_user_liked_songs'
  end
  root 'static_pages#root'
end
