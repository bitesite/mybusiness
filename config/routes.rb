Mybusiness::Application.routes.draw do
  
  resources :settings

  resources :contests do
    resources :contestants
  end

  resources :video_listings

  devise_for :users, :path_names => { :sign_in => 'signin', :sign_out => 'signout', :sign_up => 'signup' }

  resources :news_posts

  get "pages/home"
  
  match "/video" => "pages#video"
  
  
  get "/news" => "news_posts#index"
  match "/contact" => "pages#contact"
  match "/signin" => redirect("/users/signin")
  get "/admin" => "pages#admin"
  get "/terms_and_conditions" => "pages#terms_and_conditions"
  get "/faq" => "pages#faq"
  get "/setting_up_your_heroku_account" => "pages#setting_up_your_heroku_account"

  # Legacy Routes
  match "/packages" => redirect("/")
  match "/addons" => redirect("/")
  match "/about" => redirect("/")
  match "/portfolio" => redirect("/")
  match "/wedding" => redirect("/")
  match "/wedding_contest_submit" => redirect("/")
  
  root :to => "pages#home"

end
