Mybusiness::Application.routes.draw do
  resources :do_not_notify_listings
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

  # These pages need to be above the resources :contact to avoid conflict
  get '/contact' => 'pages#contact'
  post "/contact" => "pages#contact"

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

  # - CASE STUDIES
  get "/international_safety" => "case_studies#international_safety"
  get "/mydoma" => "case_studies#mydoma"
  get "/filefacets" => "case_studies#filefacets"
  get "/splice" => "case_studies#splice"
  get "/lspark_grad" => "case_studies#lspark_grad"
  get "/lspark" => "case_studies#lspark"
  get "/solink" => "case_studies#solink"
  get "/martello" => "case_studies#martello"
  get "/ewa" => "case_studies#ewa"
  get "/christine_kelly" => "case_studies#christine_kelly"
  get "/d3m" => "case_studies#d3m"
  get "/curtiss_wright" => "case_studies#curtiss_wright"
  get "/inspechomes" => "case_studies#inspechomes"

  # - PRIVACY POLICIES
  get '/privacy_policies/cntdwn2' => 'privacy_policies#cntdwn2'

  # - PAGES
  root "pages#home"
  get '/services' => 'pages#services'
  get '/video' => 'pages#video'
  get '/video/retainer' => 'pages#video_retainer'
    
  get "/admin" => "pages#admin"
  get "/setting_up_your_heroku_account" => "pages#setting_up_your_heroku_account"
  get "/portfolio" => "pages#portfolio"
  
  get "/staff_dashboard" => "pages#staff_dashboard"
  get "/mobile-video-course" => "pages#mobile_video_course"

  get "/sitemap.xml" => "sitemap#index", format: "xml", as: :sitemap
end
