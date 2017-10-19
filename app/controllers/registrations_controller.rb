class RegistrationsController < Devise::RegistrationsController
  def create
    super
    resource.create_profile
  end
end