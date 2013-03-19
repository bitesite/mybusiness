class VideoListingsController < ApplicationController
  
  before_filter :deny_access_for_non_admins
  
  # GET /video_listings
  # GET /video_listings.json
  def index
    @video_listings = VideoListing.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @video_listings }
    end
  end

  # GET /video_listings/1
  # GET /video_listings/1.json
  def show
    @video_listing = VideoListing.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @video_listing }
    end
  end

  # GET /video_listings/new
  # GET /video_listings/new.json
  def new
    @video_listing = VideoListing.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @video_listing }
    end
  end

  # GET /video_listings/1/edit
  def edit
    @video_listing = VideoListing.find(params[:id])
  end

  # POST /video_listings
  # POST /video_listings.json
  def create
    @video_listing = VideoListing.new(params[:video_listing])

    respond_to do |format|
      if @video_listing.save
        format.html { redirect_to "/video", notice: 'Video listing was successfully created.' }
        format.json { render json: @video_listing, status: :created, location: @video_listing }
      else
        format.html { render action: "new" }
        format.json { render json: @video_listing.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /video_listings/1
  # PUT /video_listings/1.json
  def update
    @video_listing = VideoListing.find(params[:id])

    respond_to do |format|
      if @video_listing.update_attributes(params[:video_listing])
        format.html { redirect_to "/video", notice: 'Video listing was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @video_listing.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /video_listings/1
  # DELETE /video_listings/1.json
  def destroy
    @video_listing = VideoListing.find(params[:id])
    @video_listing.destroy

    respond_to do |format|
      format.html { redirect_to "/video" }
      format.json { head :no_content }
    end
  end
end
