module SessionsHelper
  def admin?
    if current_user.nil?
      false
    else
      current_user.roles? :admin
    end
  end
end