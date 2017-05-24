Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy]
    resources :songs, except: [:new, :edit]
    get 'user/:id/songs', to: 'songs#user_songs'
  end
  root 'static_pages#root'
end
