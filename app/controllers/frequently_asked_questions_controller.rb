class FrequentlyAskedQuestionsController < ApplicationController
  # load_and_authorize_resource

  def index
    @questions = Question.all
    @questions = @questions.by_oldest

    respond_to do |format|
      format.json { render :index }
    end
  end

  def show
    @question = Question.find(params[:id])
    respond_to do |format|
      format.json { render :show }
    end
  end

  def create
    @question = Question.new(question_params)

    if @question.save
      redirect_to services_path
    else
      redirect_to(about_path, notice: "Question was not created successfully.")
    end
  end

  def destroy
    @question = Question.find(params[:id])
    @question.destroy
  end

  def update
    @question = Question.find(params[:id])
    @question.update_attributes(question_params)
    if @question.save
      redirect_to about_path, notice: "Question was successfully updated."
    else
      redirect_to about_path, notice: "Question was not created successfully."
    end
  end
end

def question_params
  params.permit(:title, :content)
end
