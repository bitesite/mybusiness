class Ability
  include CanCan::Ability

  def initialize(user)
    user ||= User.new # guest user (not logged in)

    can :read, NewsPost
    can [:read, :paginated_index, :popular_tags, :related_posts], BlogPost, published: true
    can :read, Comment
    can :create, Comment
    can [:new, :create], Contact
    can :show, Download
    can [:read], FrequentlyAskedQuestion
    can :read, CaseStudy
    can [:read], Testimonial

    if !user.new_record?
      can :manage, Device, user_id: user.id
    end

    if user.has_role?(:staff)
      can :manage, BlogPost
      can :manage, BlogPostImage
      can :view, :staff_dashboard
      can :manage, Profile, user_id: user.id
      can :manage, TimeOffEntry, user_id: user.id
      can [:create, :destroy, :update], FrequentlyAskedQuestion
    end

    if user.has_role?(:supervisor)
      can :approve, TimeOffEntry
    end

    if user.has_role?(:admin)
      can :manage, :all
    end
  end
end
