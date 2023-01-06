# Only allow admins to view the mailer previews
if Rails.application.config.action_mailer.show_previews
  Rails::MailersController.prepend_before_action do
    authenticate_user!
    head :forbidden unless current_user.admin?
  end
end
