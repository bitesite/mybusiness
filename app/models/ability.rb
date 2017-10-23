class Ability
  include CanCan::Ability

  def initialize(user)
    user ||= User.new # guest user (not logged in)

    if user.has_role?(:staff)
      can :manage, BlogPost
      can :manage, BlogPostImage
      can :view, :staff_dashboard
      can :manage, Profile, user_id: user.id
      can :manage, TimeOffEntry, user_id: user.id
    elsif user.has_role?(:admin)
      can :manage, :all
    else
      can :read, BlogPost
    end
  end
end
