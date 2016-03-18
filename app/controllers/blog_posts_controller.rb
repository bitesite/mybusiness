class BlogPostsController < ApplicationController

  load_and_authorize_resource
  before_filter :set_title

  def index
    @blog_posts = BlogPost.published
    @blog_posts = BlogPost.all if admin?
  end

  def show
    @title = "Blog - #{@blog_post.title}"
  end

  def new
  end

  def edit
  end

  def create
    @blog_post.user = current_user
    if @blog_post.save
      redirect_to @blog_post, notice: 'Blog post was successfully created.'
    else
      render action: "new"
    end
  end

  def update
    if @blog_post.update_attributes(params[:blog_post])
      redirect_to @blog_post, notice: 'Blog post was successfully updated.'
    else
      render action: "edit"
    end
  end

  private
    def set_title
      @title = "Blog"
    end
end
