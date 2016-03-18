class Ability
  include CanCan::Ability

  def initialize(user)

    user ||= User.new # guest user (not logged in)

    if user.roles? :staff
        can :manage, BlogPost
    elsif user.roles? :admin
        can :manage, BlogPost
    else
        can :read, BlogPost
    end

  end
end
