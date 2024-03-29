Mybusiness::Application.routes.draw do
  # - RESOURCES
  resources :do_not_notify_listings
  resources :careers
  resources :settings, except: [:show]
  resources :video_listings
  resources :web_listings, except: [:show]
  resources :time_off_entries, except: [:show] do
    collection do
      get "bulk_new"
      post "bulk_create"
    end

    member do
      put "approve"
    end
  end
  resources :contact_form_submissions, only: [:index, :destroy]

  resources :contests do
    resources :contestants
  end

  resources :downloads

  # These pages need to be above the resources :contact to avoid conflict
  get "/contact" => "pages#contact"
  post "/contact" => "pages#contact"

  get "/download" => "contacts#new"
  resources :contacts

  resource :profile, only: [:show, :edit, :update]

  resources :devices, only: [:create]

  # - BLOG POSTS
  # get "/blog" => "blog_posts#index"
  resources :blog_posts, path: "/blog", except: [:destroy] do
    collection do
      get "paginated_index"
      get "popular_tags"
    end
    member do
      get "related_posts"
    end
    resources :blog_post_images, except: [:show, :edit, :update]
    resources :comments, only: [:index, :create]
  end

  resources :products, path: "/products"
  resources :frequently_asked_questions, only: [:index, :create, :update, :show, :destroy]

  # - DEVISE
  devise_for :users, controllers: { registrations: "registrations" }
  resources :users, only: [:index, :edit, :update, :show]

  # - NEWS POSTS
  resources :news_posts, path: "/news"
  resources :email_blacklistings, except: [:show]

  # - CASE STUDIES

  resources :case_studies, path: "/case_studies" do
    member do
      get "testimonial"
    end
  end

  resources :testimonials, only: [:index]

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
  get "/inspechomes" => "case_studies#inspec_homes"

  # - PRIVACY POLICIES
  get "/privacy_policies/cntdwn2" => "privacy_policies#cntdwn2"
  get "/privacy_policies/bitesite_mobile" => "privacy_policies#bitesite_mobile"
  get "/privacy_policies/readysetshow" => "privacy_policies#readysetshow"

  # - PAGES
  root "pages#home"
  get "/services" => "pages#services"
  get "/about" => "pages#about"
  get "/video" => "pages#video"
  get "/video/retainer" => "pages#video_retainer"

  get "/admin" => "pages#admin"
  get "/setting_up_your_heroku_account" => "pages#setting_up_your_heroku_account"
  get "/portfolio" => "pages#portfolio"

  get "/staff_dashboard" => "pages#staff_dashboard"
  get "/newsletter_signup" => "pages#newsletter_signup"

  get "/ui_design_test" => "pages#ui_design_test"

  namespace :playbook do
    get "/" => "pages#home"
    get "/coming_soon" => "pages#coming_soon"

    get "/custom_software" => "pages#custom_software"
    get "/values" => "pages#values"

    get "/customers" => "pages#customers"
    get "/contracts" => "pages#contracts"
    get "/projects" => "pages#projects"
    get "/how_we_work" => "pages#how_we_work"

    get "/scrum_express" => "pages#scrum_express"
    get "/scrum_express_roles" => "pages#scrum_express_roles"
    get "/development_sprint" => "pages#development_sprint"
    get "/how_we_use_trello" => "pages#how_we_use_trello"
    get "/product_managers" => "pages#product_managers"

    get "/technologies" => "pages#technologies"
    get "/tools" => "pages#tools"
  end

  namespace :api do
    namespace :v1 do
      resources :sessions, only: [:create, :destroy] do
        collection do
          get :status
        end
      end

      resources :news_posts, only: [:index]
      resources :time_off_entries, only: [:index] do
        collection do
          post :bulk_create
        end

        member do
          put :approve
        end
      end

      resource :account, only: [:update] do
        collection do
          put :register_device
        end
      end

      resource :profile, only: [:show]
      resources :settings, only: [:index]
    end
  end

  get "/sitemap.xml" => "sitemap#index", format: "xml", as: :sitemap
end
