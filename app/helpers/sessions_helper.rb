module SessionsHelper
  def admin?
    is_role?(:admin)
  end

  def staff?
    is_role?(:staff)
  end

  def supervisor?
    is_role?(:supervisor)
  end

  def is_role?(role)
    current_user.nil? ? false : current_user.has_role?(role)
  end
end