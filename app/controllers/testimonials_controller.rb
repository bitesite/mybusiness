class TestimonialsController < ApplicationController
  load_and_authorize_resource

  def index
    if params[:filters].present?
      parsed_ids = JSON.parse params[:filters][:id]
      @testimonials = @testimonials.where(id: parsed_ids) if parsed_ids.any?
    end

    respond_to do |format|
      format.html
      format.json
    end
  end
end
