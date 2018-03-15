class ContestsController < ApplicationController
  
  before_filter :deny_access_for_non_admins
  
  def index
    @contests = Contest.all
  end

  def show
    @contest = Contest.find(params[:id])
  end

  def new
    @contest = Contest.new
  end

  def edit
    @contest = Contest.find(params[:id])
  end

  def create
    @contest = Contest.new(contest_params)

    if @contest.save
      redirect_to @contest, notice: 'Contest was successfully created.'
    else
      render action: "new"
    end
  end

  def update
    @contest = Contest.find(params[:id])

    if @contest.update_attributes(contest_params)
      redirect_to @contest, notice: 'Contest was successfully updated.'
    else
      render action: "edit"
    end
  end

  def destroy
    @contest = Contest.find(params[:id])
    @contest.destroy

    redirect_to contests_url
  end

  private
    def contest_params
      params.require(:contest).permit(:name)
    end
end
