class UsersController < ApplicationController
  load_and_authorize_resource

  def index
    @staff = @users.staff.alphabetical.includes(:profile).includes(:direct_reports)
    @users = @users.alphabetical.includes(:profile)
  end

  def edit
  end

  def update
    if @user.update(user_params)
      redirect_to users_path, notice: 'Successfully updated!'
    else
      render :edit
    end
  end

  def show
    
  end
  
  
  private
    def user_params
      params.require(:user).permit(direct_report_ids: [], role_ids: [])
    end
    
end