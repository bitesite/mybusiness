Mybusiness::Application.routes.draw do
  


  resources :blog_posts, except: [:destroy]
  get "/blog" => "blog_posts#index"


  resources :careers


  resources :settings

  resources :contests do
    resources :contestants
  end

  resources :video_listings
  resources :contact_form_submissions, only: [:index]

  devise_for :users

  resources :news_posts
  resources :email_blacklistings, except: [:show]

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
  get "/filefacets" => "pages#filefacets"
  get "/ollie" => "pages#ollie"
  get "/lspark_grad" => "pages#lspark_grad"
  get "/lspark" => "pages#lspark"
  get "/solink" => "pages#solink"
  get "/martello" => "pages#martello"
  get "/christine_kelly" => "pages#christine_kelly"
  get "/d3m" => "pages#d3m"

  get "/portfolio" => "pages#portfolio"
  
  root :to => "pages#home"

  match "*path" => redirect("/") unless Rails.env.development?
end
