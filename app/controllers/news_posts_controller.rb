class NewsPostsController < ApplicationController
  
  before_filter :deny_access_for_non_admins, :except => [:index, :show]
  before_filter :set_title
  
  def index
    @news_posts = NewsPost.all
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
    @news_post = NewsPost.new(params[:news_post])

    if @news_post.save
      redirect_to @news_post, notice: 'News post was successfully created.'
    else
      render action: "new"
    end
  end

  def update
    @news_post = NewsPost.find(params[:id])

    if @news_post.update_attributes(params[:news_post])
      format.html { redirect_to @news_post, notice: 'News post was successfully updated.' }
    else
      format.html { render action: "edit" }
    end
  end

  def destroy
    @news_post = NewsPost.find(params[:id])
    @news_post.destroy
    redirect_to news_posts_url
  end

  private
    def set_title
      @title = "News"
    end
end
