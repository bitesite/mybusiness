class DoNotNotifyListingsController < ApplicationController
  load_and_authorize_resource
  layout 'non_landing'

  def index
  end

  def show
  end

  def new
  end

  def edit
  end

  def create
    if @do_not_notify_listing.save
      redirect_to do_not_notify_listings_url, notice: 'Do not notify listing was successfully created.'
    else
      render :new
    end
  end

  def update
    if @do_not_notify_listing.update(do_not_notify_listing_params)
      redirect_to do_not_notify_listings_url, notice: 'Do not notify listing was successfully updated.'
    else
      render :edit
    end
  end

  def destroy
    @do_not_notify_listing.destroy
    redirect_to do_not_notify_listings_url, notice: 'Do not notify listing was successfully destroyed.'
  end

  private
    def do_not_notify_listing_params
      params.require(:do_not_notify_listing).permit(:email)
    end
end
