class Api::V1::NewsPostsController < Api::V1::ApplicationController
  respond_to :json
  
  before_action :authenticate_request!
  load_and_authorize_resource


  def index
    @news_posts = NewsPost.published
    @news_posts = NewsPost.all if admin?
    
    @news_posts = @news_posts.reverse_chronological
    @news_posts = @news_posts.offset(params[:offset]) if params[:offset]
    @news_posts = @news_posts.limit(params[:limit]) if params[:limit]
  end
  
end