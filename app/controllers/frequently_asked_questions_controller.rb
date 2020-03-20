class FrequentlyAskedQuestionsController < ApplicationController
  load_and_authorize_resource

  def index
    @title = 'FAQ'
    @meta_description = "Answers to some commonly asked questions when dealing with a custom software company and dealing with BiteSite specifically."
    @frequently_asked_questions = @frequently_asked_questions.in_order
  end

  def show
  end

  def new
  end

  def edit
  end

  def create
    if @frequently_asked_question.save
      redirect_to frequently_asked_questions_url, notice: 'Frequently asked question was successfully created.'
    else
      render :new
    end
  end

  def update
    if @frequently_asked_question.update(frequently_asked_question_params)
      redirect_to frequently_asked_questions_url, notice: 'Frequently asked question was successfully updated.'
    else
      render :edit
    end
  end

  def destroy
    @frequently_asked_question.destroy
    redirect_to frequently_asked_questions_url, notice: 'Frequently asked question was successfully destroyed.'
  end

  private
    def frequently_asked_question_params
      params.require(:frequently_asked_question).permit(:question, :answer, :position)
    end
end
