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
  match "/wedding" => "pages#wedding"
  match "/wedding_contest_submit" => "pages#wedding_contest_submit"
  match "/news" => "news_posts#index"
  match "/contact" => "pages#contact"
  match "/signin" => redirect("/users/signin")
  match "/admin" => "pages#admin"
  match "/terms_and_conditions" => "pages#terms_and_conditions"
  get "/faq" => "pages#faq"

  # Legacy Routes
  match "/packages" => redirect("/")
  match "/addons" => redirect("/")
  match "/about" => redirect("/")
  match "/portfolio" => redirect("/")
  
  root :to => "pages#home"

end
