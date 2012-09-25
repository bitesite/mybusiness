class ApplicationController < ActionController::Base
  protect_from_forgery
  
  include SessionsHelper
  
  before_filter :load_news
  
  
  def deny_access_for_non_admins
    if !admin?
      flash[:error] = "You are not authorized to view this page."
      redirect_to root_path
    end
  end
  
  def load_news
    @recent_news_posts = NewsPost.limit(5)
  end
end
