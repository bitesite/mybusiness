Mybusiness::Application.routes.draw do
  
  resources :careers


  resources :settings

  resources :contests do
    resources :contestants
  end

  resources :video_listings

  devise_for :users

  resources :news_posts

  get "pages/home"
  
  get "/news" => "news_posts#index"
  match "/contact" => "pages#contact"
  match "/signin" => redirect("/users/signin")
  get "/admin" => "pages#admin"
  get "/terms_and_conditions" => "pages#terms_and_conditions"
  get "/faq" => "pages#faq"
  get "/setting_up_your_heroku_account" => "pages#setting_up_your_heroku_account"
  
  root :to => "pages#home"

  match "*path" => redirect("/") unless Rails.env.development?
end
