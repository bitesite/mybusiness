class BlogPostsController < ApplicationController
  before_action :friendly_find, only: [:show, :edit, :update]
  load_and_authorize_resource :blog_post, except: [:show]
  before_action :set_title

  def index
  end

  def paginated_index
    @blog_posts = BlogPost.published
    @blog_posts = BlogPost.all if (admin? || staff?)
    @blog_posts = @blog_posts.tagged_with(params[:tag_name]) if params[:tag_name]
    if params[:filters]
      @blog_posts = @blog_posts.tagged_with(params[:filters][:tag_name].split(","), all: true) if params[:filters][:tag_name]
    end
    @blog_posts = @blog_posts.paginate(page: params[:page], per_page: 9)
    @blog_posts = @blog_posts.includes({ user: :profile })

    respond_to do |format|
      format.html
      format.json
    end
  end

  def show
    @title = "#{@blog_post.title}"
    @meta_description = @blog_post.meta_description if @blog_post.meta_description.present?
    respond_to do |format|
      format.html { render :show }
      format.json { render :show }
    end
  end

  def new
  end

  def edit
  end

  def create
    @blog_post.user = current_user
    if @blog_post.save
      redirect_to @blog_post, notice: "Blog post was successfully created."
    else
      render action: "new", layout: "blog"
    end
  end

  def update
    prepare_blog_post_for_slug_update
    if @blog_post.update_attributes(blog_post_params)
      redirect_to @blog_post, notice: "Blog post was successfully updated."
    else
      render action: "edit", layout: "blog"
    end
  end

  def related_posts
    @blog_posts = BlogPost.where("id != ?", params[:id]).where("published = ?", true)
    @blog_posts = @blog_posts.tagged_with(params[:tag_names].split(","), any: true) if params[:tag_names]
    @blog_posts = @blog_posts.limit(3)

    respond_to do |format|
      format.json { render :index }
    end
  end

  private

  def friendly_find
    @blog_post = BlogPost.friendly.find(params[:id])
    if !(@blog_post.published || staff? || admin?)
      redirect_to blog_posts_path
    end
  end

  def blog_post_params
    params.require(:blog_post).permit(:body, :title, :published, :featured_image, :remove_featured_image, :featured_video, :tag_list, :meta_description, :user)
  end

  def set_title
    @title = "Blog"
  end

  def prepare_blog_post_for_slug_update
    if params[:update_slug]
      @blog_post.slug = nil
    end
  end
end
