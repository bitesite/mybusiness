class BlogPostsController < ApplicationController
  load_and_authorize_resource
  before_action :set_title
  layout 'non_landing'

  def index
    @blog_posts = BlogPost.published
    @blog_posts = BlogPost.all if admin?
    @blog_posts = @blog_posts.paginate(page: params[:page], per_page: 10)
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
    if @blog_post.update_attributes(blog_post_params)
      redirect_to @blog_post, notice: 'Blog post was successfully updated.'
    else
      render action: "edit"
    end
  end

  private
    def blog_post_params 
      params.require(:blog_post).permit(:body, :title, :published, :featured_image)
    end

    def set_title
      @title = "Blog"
    end
end
