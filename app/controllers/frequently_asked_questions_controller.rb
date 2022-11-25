class FrequentlyAskedQuestionsController < ApplicationController
  load_and_authorize_resource

  def index
    @questions = Question.all
    respond_to do |format|
      format.json { render :index }
    end
  end

  def edit
  end
end
