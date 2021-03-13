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

  def register_device
    device = current_user.devices.find_or_create_by(push_token: params[:device][:push_token])

    device.update(device_params)
    device.update(signed_in_at: DateTime.now)

    head 200
  end
  

  private
    def device_params
      params.require(:device).permit(:signed_in, :os, :os_version, :push_token)
    end
    
  
end