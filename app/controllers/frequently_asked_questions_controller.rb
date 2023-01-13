class FrequentlyAskedQuestionsController < ApplicationController
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
      respond_to do |format|
        format.json { render :index }
      end
    else
      respond_to do |format|
        format.json { render json: @media_listing.errors, status: :unprocessable_entity }
      end
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
      respond_to do |format|
        format.json { render :index }
      end
    else
      respond_to do |format|
        format.json { render json: @question.errors, status: :unprocessable_entity }
      end
    end
  end
end

def question_params
  params.permit(:title, :content)
end
