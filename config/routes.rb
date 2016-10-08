Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :user, only: [:show, :index]
    resources :users, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy, :show]
    resource :question, only: [:show, :index]
    resources :questions, only: [:create, :show, :index]
    resource :response, only: [:show, :index]
    resources :responses, only: [:create, :show, :index]
    resources :infos, only: [:create, :show, :update, :index]
    resources :messages, only: [:create, :show, :index]
  end

  root to: "static_pages#root"
end
