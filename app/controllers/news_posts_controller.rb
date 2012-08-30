class NewsPostsController < ApplicationController
  # GET /news_posts
  # GET /news_posts.json
  def index
    @news_posts = NewsPost.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @news_posts }
    end
  end

  # GET /news_posts/1
  # GET /news_posts/1.json
  def show
    @news_post = NewsPost.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @news_post }
    end
  end

  # GET /news_posts/new
  # GET /news_posts/new.json
  def new
    @news_post = NewsPost.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @news_post }
    end
  end

  # GET /news_posts/1/edit
  def edit
    @news_post = NewsPost.find(params[:id])
  end

  # POST /news_posts
  # POST /news_posts.json
  def create
    @news_post = NewsPost.new(params[:news_post])

    respond_to do |format|
      if @news_post.save
        format.html { redirect_to @news_post, notice: 'News post was successfully created.' }
        format.json { render json: @news_post, status: :created, location: @news_post }
      else
        format.html { render action: "new" }
        format.json { render json: @news_post.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /news_posts/1
  # PUT /news_posts/1.json
  def update
    @news_post = NewsPost.find(params[:id])

    respond_to do |format|
      if @news_post.update_attributes(params[:news_post])
        format.html { redirect_to @news_post, notice: 'News post was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @news_post.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /news_posts/1
  # DELETE /news_posts/1.json
  def destroy
    @news_post = NewsPost.find(params[:id])
    @news_post.destroy

    respond_to do |format|
      format.html { redirect_to news_posts_url }
      format.json { head :no_content }
    end
  end
end
