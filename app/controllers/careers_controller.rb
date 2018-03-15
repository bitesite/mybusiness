class CareersController < ApplicationController

  before_action :deny_access_for_non_admins, :except => [:index, :show]
  before_action :set_title
  layout 'non_landing'

  def index
    @careers = Career.published
    @careers = Career.all if admin?
  end

  def show
    @career = Career.find(params[:id])
  end

  def new
    @career = Career.new
  end

  def edit
    @career = Career.find(params[:id])
  end

  def create
    @career = Career.new(career_params)

    if @career.save
      redirect_to careers_path, notice: 'Career was successfully created.'
    else
      render action: "new"
    end
  end

  def update
    @career = Career.find(params[:id])

    if @career.update_attributes(career_params)
      redirect_to careers_path, notice: 'Career was successfully updated.'
    else
      render action: "edit"
    end
  end

  def destroy
    @career = Career.find(params[:id])
    @career.destroy
    redirect_to careers_url
  end

  private
    def career_params
      params.require(:career).permit(:capacity, :description, :title, :location, :archived)
    end

    def set_title
      @title = "Careers"
    end
end
