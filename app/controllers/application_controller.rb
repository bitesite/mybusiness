class ApplicationController < ActionController::Base
  protect_from_forgery
  
  include SessionsHelper
  
  def deny_access_for_non_admins
    if !admin?
      flash[:error] = "You are not authorized to view this page."
      redirect_to root_path
    end
  end
end
