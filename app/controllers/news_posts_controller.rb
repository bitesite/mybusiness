class NewsPostsController < ApplicationController
  
  before_action :deny_access_for_non_admins, :except => [:index, :show]
  before_action :set_title
  
  def index
    @news_posts = NewsPost.published
    @news_posts = NewsPost.all if admin?
    @news_posts = @news_posts.reverse_chronological
  end

  def show
    @news_post = NewsPost.find(params[:id])
  end

  def new
    @news_post = NewsPost.new
  end

  def edit
    @news_post = NewsPost.find(params[:id])
  end

  def create
    @news_post = NewsPost.new(news_post_params)

    if @news_post.save
      redirect_to news_posts_path, notice: 'News post was successfully created.'
    else
      render action: "new"
    end
  end

  def update
    @news_post = NewsPost.find(params[:id])

    if @news_post.update_attributes(news_post_params)
      redirect_to news_posts_path, notice: 'News post was successfully updated.'
    else
      render action: "edit"
    end
  end

  def destroy
    @news_post = NewsPost.find(params[:id])
    @news_post.destroy
    redirect_to news_posts_url
  end

  private
    def news_post_params
      params.require(:news_post).permit(:body, :image, :title, :hidden)
    end

    def set_title
      @title = "News"
    end
end
