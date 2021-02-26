class Api::V1::ProfilesController < Api::V1::ApplicationController
  respond_to :json
  
  before_action :authenticate_request!
  load_and_authorize_resource through: :current_user, singleton: true

  def show
  end
end