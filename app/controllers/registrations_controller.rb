class RegistrationsController < Devise::RegistrationsController
  def create
    super
    resource.profile = Profile.create
  end
end