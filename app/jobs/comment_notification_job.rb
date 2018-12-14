class CommentNotificationJob 
  include SuckerPunch::Job

  def perform(comment)
    AdminMailer.comment_notification(comment).deliver_now
  end
end