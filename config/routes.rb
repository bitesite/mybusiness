Mybusiness::Application.routes.draw do
  # - RESOURCES
  resources :careers
  resources :settings
  resources :video_listings
  resources :time_off_entries, except: [:show] do
    collection do
      get 'bulk_new'
      post 'bulk_create'
    end

    member do
      put 'approve'
    end
  end
  resources :contact_form_submissions, only: [:index]

  resources :contests do
    resources :contestants
  end

  resource :profile, only: [:show, :edit, :update]

  # - BLOG POSTS
  get "/blog" => "blog_posts#index"
  resources :blog_posts, except: [:destroy] do
    resources :blog_post_images, except: [:show, :edit, :update]
  end


  # - DEVISE
  match "/signin" => redirect("/users/signin")
  devise_for :users, controllers: { registrations: 'registrations' }


  # - NEWS POSTS
  get "/news" => "news_posts#index"
  resources :news_posts
  resources :email_blacklistings, except: [:show]


  # - PAGES
  get "pages/home"
  match "/contact" => "pages#contact"
  get "/admin" => "pages#admin"
  get "/setting_up_your_heroku_account" => "pages#setting_up_your_heroku_account"
  get "/international_safety" => "pages#international_safety"
  get "/mydoma" => "pages#mydoma"
  get "/filefacets" => "pages#filefacets"
  get "/splice" => "pages#splice"
  get "/lspark_grad" => "pages#lspark_grad"
  get "/lspark" => "pages#lspark"
  get "/solink" => "pages#solink"
  get "/martello" => "pages#martello"
  get "/ewa" => "pages#ewa"
  get "/christine_kelly" => "pages#christine_kelly"
  get "/d3m" => "pages#d3m"
  get "/curtisswright" => "pages#curtisswright"
  get "/portfolio" => "pages#portfolio"
  get "/staff_dashboard" => "pages#staff_dashboard"
  root :to => "pages#home"

  match "*path" => redirect("/") unless Rails.env.development?
end
