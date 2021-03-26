class DevicesController < ApplicationController
  load_and_authorize_resource

  def create
    successful_save = false
    existing_device = Device.find_by(web_push_endpoint: @device.web_push_endpoint)
    
    if existing_device
      @device = existing_device
      successful_save = @device.update(device_params)
    else
      successful_save = @device.save
    end

    if successful_save
      respond_to do |format|
        format.json { render json: {} }
      end
    else
      respond_to do |format|
        format.json { head :unprocessable_entity }
      end
    end  
  end

  private
    def device_params
      params.require(:device).permit(:web_push_endpoint)
    end
    
  
end