class CommentNotificationJob 
  include SuckerPunch::Job

  def perform(comment)
    AdminMailer.comment_notification(comment).deliver_now

    already_notified_email_addresses = []

    comment.blog_post.comments.each do |existing_comment|
      existing_comment_formatted_email = existing_comment.email.strip.downcase
      comment_formatted_email = comment.email.strip.downcase

      if existing_comment_formatted_email != comment_formatted_email && 
         !already_notified_email_addresses.include?(existing_comment_formatted_email) &&
         !DoNotNotifyListing.should_not_notify?(existing_comment_formatted_email)
        
        already_notified_email_addresses << existing_comment_formatted_email
        VisitorMailer.comment_posted(existing_comment_formatted_email, existing_comment.name, comment.blog_post, comment.name, comment.body).deliver_now

      end
    end
  end
end