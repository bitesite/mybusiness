class Api::V1::SettingsController < Api::V1::ApplicationController
  before_action :authenticate_request!
  respond_to :json

  def index
    permitted_settings = []

    if staff?
      permitted_settings << "freshbooks_api_client_id"
      permitted_settings << "freshbooks_api_client_secret"
    end

    @settings = Setting.where(name: permitted_settings)
  end
  
end