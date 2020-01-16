class VisitorMailer < ApplicationMailer
  default from: "info@bitesite.ca"
  add_template_helper(ApplicationHelper)
  
  def contact_confirmation(first_name, last_name, customer_email, message)
    
    attachments.inline['emailheader.png'] = File.read(Rails.root.join('app/assets/images/emailheader.png'))
    
    @first_name, @last_name, @message = first_name, last_name, message
    
    mail(:to => customer_email,
         :from => "info@bitesite.ca",
         :reply_to => "info@bitesite.ca",
         :subject => "Thanks for contacting BiteSite.ca!")
  end
  
  def contest_confirmation(contestant)
    
    attachments.inline['emailheader.png'] = File.read(Rails.root.join('app/assets/images/emailheader.png'))
    @contestant = contestant
        
    mail(:to => @contestant.email,
         :from => "info@bitesite.ca",
         :reply_to => "info@bitesite.ca",
         :subject => "Thanks for entering the Wedding Video Contest 2013")
  end

  def comment_posted(to_email, blog_post, poster_name, comment_body)

    attachments.inline['emailheader.png'] = File.read(Rails.root.join('app/assets/images/emailheader.png'))

    # Doing it this way rather than passing in the comment model so we can't accidentally send to multiple people
    @blog_post, @poster_name, @comment_body = blog_post, poster_name, comment_body

    mail(to: to_email,
         from: 'info@bitesite.ca',
         reply_to: 'info@bitesite.ca',
         subject: "Someone left a comment on '#{blog_post.title}'")
  end
  
end
