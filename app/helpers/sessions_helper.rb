module SessionsHelper
  def admin?
    current_user && current_user.has_role?(:admin)
  end

  def staff?
    current_user && current_user.has_role?(:staff)
  end

  def supervisor?
    current_user && current_user.has_role?(:supervisor)
  end
end