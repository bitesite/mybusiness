class TestimonialsController < ApplicationController
  load_and_authorize_resource

  def index
    if params[:filters]
      @testimonials = @testimonials.where(id: params[:filters][:id]) if params[:filters][:id]
    end

    respond_to do |format|
      format.html
      format.json
    end
  end
end
