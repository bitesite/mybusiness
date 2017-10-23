class ProfilesController < ApplicationController

  load_and_authorize_resource through: :current_user, singleton: true
  layout 'non_landing'

  def show
  end

  def edit
    
  end

  def update
    if @profile.update_attributes(params[:profile])
      redirect_to profile_path, notice: 'Profile successfully updated!'
    else
      render :edit
    end
  end
end