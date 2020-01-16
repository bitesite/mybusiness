class CommentNotificationJob 
  include SuckerPunch::Job

  def perform(comment)
    AdminMailer.comment_notification(comment).deliver_now
    
    # Gather all email addresses to notify
    email_addresses_to_notify = []

    comment.blog_post.comments.each do |existing_comment|
      existing_comment_formatted_email = existing_comment.email.strip.downcase
      comment_formatted_email = comment.email.strip.downcase

      if existing_comment_formatted_email != comment_formatted_email

        if !DoNotNotifyListing.should_not_notify?(existing_comment_formatted_email, comment.blog_post)
          email_addresses_to_notify << existing_comment_formatted_email
        end

      end
    end

    email_addresses_to_notify = email_addresses_to_notify.uniq
    email_addresses_to_notify.each do |email|
      VisitorMailer.comment_posted(email, comment.blog_post, comment.name, comment.body).deliver_now
    end
  end
end