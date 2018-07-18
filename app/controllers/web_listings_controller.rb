class WebListingsController < ApplicationController
  load_and_authorize_resource
  layout 'non_landing'

  def index
    @web_listings = @web_listings.sorted
  end

  def show
  end

  def new
    @web_listing = WebListing.new
  end

  def edit
  end

  def create
    @web_listing = WebListing.new(web_listing_params)

    if @web_listing.save
      redirect_to web_listings_url, notice: 'Web listing was successfully created.'
    else
      render :new
    end
  end

  def update
    if @web_listing.update(web_listing_params)
      redirect_to web_listings_url, notice: 'Web listing was successfully updated.'
    else
      render :edit
    end
  end

  def destroy
    @web_listing.destroy
    redirect_to web_listings_url, notice: 'Web listing was successfully destroyed.'
  end

  private
    def web_listing_params
      params.require(:web_listing).permit(:name, :url, :position)
    end
end
