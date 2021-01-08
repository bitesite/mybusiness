class Api::V1::AccountsController < Api::V1::ApplicationController
  respond_to :json
  
  before_action :authenticate_request!

  def update
    if current_user.update(user_params)
      head 200
    else
      head 422
    end
  end

  private

    def user_params
      params.require(:user).permit(profile_attributes: [:expo_push_token])
    end
  
end