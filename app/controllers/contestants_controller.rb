class ContestantsController < ApplicationController
  
  before_filter :deny_access_for_non_admins, :except => [:create]
  before_filter :load_contest
  
  def index
    @contestants = @contest.contestants
  end

  def show
    @contestant = @contest.contestants.find(params[:id])
  end

  def new
    @contestant = @contest.contestants.build
  end

  def edit
    @contestant = @contest.contestants.find(params[:id])
  end

  def create
    @contestant = @contest.contestants.build(contestant_params)

    if @contestant.save
      redirect_to @contest, notice: 'Contestant created.'
    else
      render action: "new"
    end
  end

  def update
    @contestant = @contest.contestants.find(params[:id])

    if @contestant.update_attributes(contestant_params)
      redirect_to @contest, notice: 'Contestant was successfully updated.'
    else
      render action: "edit"
    end
  end

  def destroy
    @contestant = @contest.contestants.find(params[:id])
    @contestant.destroy

    redirect_to @contest
  end
  
  private
    def contestant_params
      params.require(:contestant).permit(:email, :first_name, :last_name, :notes)
    end

    def load_contest
      @contest = Contest.find(params[:contest_id])
    end
end
