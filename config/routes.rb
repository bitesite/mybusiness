Mybusiness::Application.routes.draw do
  # - RESOURCES
  resources :careers
  resources :settings
  resources :video_listings
  resources :web_listings, except: [:show]
  resources :time_off_entries, except: [:show] do
    collection do
      get 'bulk_new'
      post 'bulk_create'
    end

    member do
      put 'approve'
    end
  end
  resources :contact_form_submissions, only: [:index, :destroy]

  resources :contests do
    resources :contestants
  end

  resources :downloads

  get '/download' => 'contacts#new'
  resources :contacts
  
  resource :profile, only: [:show, :edit, :update]

  # - BLOG POSTS
  # get "/blog" => "blog_posts#index"
  resources :blog_posts, path: '/blog', except: [:destroy] do
    resources :blog_post_images, except: [:show, :edit, :update]
    resources :comments, only: [:index, :create]
  end


  # - DEVISE
  devise_for :users, controllers: { registrations: 'registrations' }


  # - NEWS POSTS
  resources :news_posts, path: '/news'
  resources :email_blacklistings, except: [:show]


  # - PAGES
  root "pages#home"

  get "pages/home"
  get "/contact" => "pages#contact"
  post "/contact" => "pages#contact"
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
  get "/curtiss_wright" => "pages#curtiss_wright"
  get "/portfolio" => "pages#portfolio"
  get "/inspechomes" => "pages#inspechomes"
  get "/staff_dashboard" => "pages#staff_dashboard"
  get "/mobile-video-course" => "pages#mobile_video_course"

  get "/sitemap.xml" => "sitemap#index", format: "xml", as: :sitemap
end
