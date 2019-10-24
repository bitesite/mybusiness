class ProfilesController < ApplicationController
  load_and_authorize_resource through: :current_user, singleton: true

  def show
  end

  def edit
    
  end

  def update
    if @profile.update_attributes(profile_params)
      redirect_to profile_path, notice: 'Profile successfully updated!'
    else
      render :edit
    end
  end

  private

    def profile_params
      params.require(:profile).permit(:employee_number,
                                      :job_title,
                                      :first_name,
                                      :last_name,
                                      :start_date,
                                      :avatar)
    end
end