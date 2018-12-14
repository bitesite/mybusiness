class CommentsController < ApplicationController

  load_and_authorize_resource :blog_post
  load_and_authorize_resource through: :blog_post

  def index
    respond_to do |format|
      format.json { render :index }
    end
  end

  def create
    if @comment.save
      respond_to do |format|
        format.json { render :show }
      end
    else
      respond_to do |format|
        format.json { render json: @comment.errors.full_messages, status: :unprocessable_entity }
      end
    end
  end

  private
    def comment_params
      params.require(:comment).permit(:name, :email, :body)
    end
end