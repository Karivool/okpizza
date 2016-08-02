Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :user, only: [:create]
    resources :session, only: [:create, :destroy, :show]
  end

  root to: "static_pages#root"
end
