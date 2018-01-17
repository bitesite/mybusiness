class CareersController < ApplicationController

  before_filter :deny_access_for_non_admins, :except => [:index, :show]
  before_filter :set_title
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
    @career = Career.new(params[:career])

    if @career.save
      redirect_to careers_path, notice: 'Career was successfully created.'
    else
      render action: "new"
    end
  end

  def update
    @career = Career.find(params[:id])

    if @career.update_attributes(params[:career])
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
    def set_title
      @title = "Careers"
    end
end
