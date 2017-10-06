Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do
    resources :users, only: [:create, :index, :destroy, :update] do
      resources :jogs, only: [:index, :create, :update, :destroy]
    end
    post 'api_tokens', to: 'api_tokens#create'
    delete 'api_tokens', to: 'api_tokens#destroy'
  end
  root 'welcome#index'
end
