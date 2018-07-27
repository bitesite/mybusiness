class BlogPostsController < ApplicationController
  load_and_authorize_resource :blog_post, except: [:show]
  before_action :set_title

  def index
    @blog_posts = BlogPost.published
    @blog_posts = BlogPost.all if admin?
    @blog_posts = @blog_posts.tagged_with(params[:tag_name]) if params[:tag_name]
    @blog_posts = @blog_posts.paginate(page: params[:page], per_page: 10)
    @title = ""
    render layout: 'blog'
  end

  def show
    @blog_post = BlogPost.friendly.find(params[:id])
    @title = "#{@blog_post.title}"

    if @blog_post.published || (staff? || admin?)
      render layout: 'blog'
    else
      redirect_to blog_path
    end

  end

  def new
    render layout: 'non_landing'
  end

  def edit
    render layout: 'non_landing'
  end

  def create
    @blog_post.user = current_user
    if @blog_post.save
      redirect_to @blog_post, notice: 'Blog post was successfully created.'
    else
      render action: "new", layout: 'non_landing'
    end
  end

  def update
    if @blog_post.update_attributes(blog_post_params)
      redirect_to @blog_post, notice: 'Blog post was successfully updated.'
    else
      render action: "edit", layout: 'non_landing'
    end
  end

  private
    def blog_post_params 
      params.require(:blog_post).permit(:body, :title, :published, :featured_image, :tag_list)
    end

    def set_title
      @title = "Blog"
    end
end
