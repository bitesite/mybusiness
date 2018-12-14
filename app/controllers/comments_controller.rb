class CommentsController < ApplicationController

  load_and_authorize_resource :blog_post
  load_and_authorize_resource through: :blog_post

  def index
    @comments = @comments.oldest_to_newest

    respond_to do |format|
      format.json { render :index }
    end
  end

  def create
    if EmailBlacklisting.exists?(email: params[:comment][:email].upcase.strip)
      message = "Your e-mail has been blacklisted. If you want to appeal this, please contact info@bitesite.ca directly."
      respond_to do |format|
        format.json { render json: [message], status: :unprocessable_entity }
      end
    else
      if @comment.save
        CommentNotificationJob.perform_async(@comment)
        respond_to do |format|
          format.json { render :show }
        end
      else
        respond_to do |format|
          format.json { render json: @comment.errors.full_messages, status: :unprocessable_entity }
        end
      end
    end
  end

  private
    def comment_params
      params.require(:comment).permit(:name, :email, :body)
    end
end