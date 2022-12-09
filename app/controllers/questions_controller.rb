class QuestionsController < ApplicationController
  def index
    @questions = Question.all
    respond_to do |format|
      format.json { render :index }
    end
  end
end
