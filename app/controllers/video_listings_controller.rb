class VideoListingsController < ApplicationController
  
  before_action :deny_access_for_non_admins
  
  def index
    @video_listings = VideoListing.all
  end

  def show
    @video_listing = VideoListing.find(params[:id])
  end

  def new
    @video_listing = VideoListing.new
  end

  def edit
    @video_listing = VideoListing.find(params[:id])
  end

  def create
    @video_listing = VideoListing.new(video_listing_params)

    if @video_listing.save
      redirect_to video_listings_path, notice: 'Video listing was successfully created.'
    else
      render action: "new" 
    end
  end

  def update
    @video_listing = VideoListing.find(params[:id])

    if @video_listing.update_attributes(video_listing_params)
      redirect_to video_listings_path, notice: 'Video listing was successfully updated.'
    else
      render action: "edit"
    end
  end

  def destroy
    @video_listing = VideoListing.find(params[:id])
    @video_listing.destroy

    redirect_to video_listings_path   
  end

  private
    def video_listing_params
      params.require(:video_listing).permit(:image, :link, :name)
    end
end
