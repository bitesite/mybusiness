class Ability
  include CanCan::Ability

  def initialize(user)
    user ||= User.new # guest user (not logged in)

    can :read, BlogPost, published: true


    if user.has_role?(:staff)
      can :manage, BlogPost
      can :manage, BlogPostImage
      can :view, :staff_dashboard
      can :manage, Profile, user_id: user.id
      can :manage, TimeOffEntry, user_id: user.id
    end
    
    if user.has_role?(:supervisor)
      can :approve, TimeOffEntry
    end
    
    if user.has_role?(:admin)
      can :manage, :all
    end
  end
end
