class ApplicationController < ActionController::Base
  protect_from_forgery

  include SessionsHelper

  before_action :load_news
  before_action :load_vapid_public_key_into_gon
  before_action :load_authorization_into_gon

  # - Rescue from CanCanCan AccessDenied exception
  rescue_from CanCan::AccessDenied do |exception|
    respond_to do |format|
      format.html {
        flash[:error] = "You are not authorized to view this page."
        redirect_to root_url
      }
      format.json { render json: {}, status: :unauthorized }
    end
  end

  def after_sign_in_path_for(resource)
    if resource.has_role? :staff
      staff_dashboard_path
    else
      root_path
    end
  end

  def deny_access_for_non_admins
    if !admin?
      flash[:error] = "You are not authorized to view this page."
      redirect_to root_path
    end
  end

  def load_news
    @recent_news_posts = NewsPost.limit(5)
  end

  def load_vapid_public_key_into_gon
    gon.push(vapid_public_key_bytes: Base64.urlsafe_decode64(ENV["VAPID_PUBLIC_KEY"]).bytes)
  end

  def register_mailchimp_user_for_newsletter(first_name, last_name, email)
    register_mailchimp_user(first_name, last_name, email, "b1abc6bdf8")
  end

  def register_mailchimp_user(first_name, last_name, email, list_id)
    mailchimp_api = Mailchimp::API.new(ENV["MAILCHIMP_API_KEY"])
    Rails.logger.info("Registering for mailchimp...")
    Rails.logger.info(
      mailchimp_api.listSubscribe({ :id => list_id,
                                    :email_address => email,
                                    :merge_vars => { "FNAME" => first_name, "LNAME" => last_name },
                                    :double_optin => false })
    )
  end

  def load_authorization_into_gon
    if user_signed_in?
      gon.push({
        user_signed_in: user_signed_in?,
        current_user_id: current_user.id,
        current_user_role_names: current_user.roles.pluck(:name),
      })
    end
  end
end
