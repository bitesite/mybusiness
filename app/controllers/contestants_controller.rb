class ContestantsController < ApplicationController
  
  before_filter :deny_access_for_non_admins, :except => [:create]
  before_filter :load_contest
  
  def index
    @contestants = @contest.contestants

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @contestants }
    end
  end

  def show
    @contestant = @contest.contestants.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @contestant }
    end
  end

  def new
    @contestant = @contest.contestants.build
    
    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @contestant }
    end
  end

  def edit
    @contestant = @contest.contestants.find(params[:id])
  end

  def create
    @contestant = @contest.contestants.build(params[:contest])

    respond_to do |format|
      if @contestant.save
        format.html { redirect_to @contest, notice: 'Contestant created.' }
        format.json { render json: @contest, status: :created, location: @contest }
      else
        format.html { render action: "new" }
        format.json { render json: @topic.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    @contestant = @contest.contestants.find(params[:id])

    respond_to do |format|
      if @topic.update_attributes(params[:topic])
        format.html { redirect_to @contest, notice: 'Contestant was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @contest.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @contestant = @contest.contestants.find(params[:id])
    @contestant.destroy

    respond_to do |format|
      format.html { redirect_to @contest }
      format.json { head :no_content }
    end
  end
  
  private
    def load_contest
      @contest = Contest.find(params[:contest_id])
    end
end
