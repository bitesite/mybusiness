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

  get "/international_safety" => "pages#international_safety"
  get "/mydoma" => "pages#mydoma"
  get "/ollie" => "pages#ollie"
  get "/lspark_grad" => "pages#lspark_grad"
  get "/solink" => "pages#solink"
  get "/martello" => "pages#martello"
  get "/christine_kelly" => "pages#christine_kelly"
  get "/d3m" => "pages#d3m"

  get "/portfolio" => "pages#portfolio"
  
  root :to => "pages#home"

  match "*path" => redirect("/") unless Rails.env.development?
end
