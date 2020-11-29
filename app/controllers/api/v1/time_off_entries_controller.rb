class Api::V1::TimeOffEntriesController < Api::V1::ApplicationController
  respond_to :json
  
  before_action :authenticate_request!
  load_and_authorize_resource through: :current_user

  def index
    @time_off_entries = @time_off_entries.limit(params[:limit]) if params[:limit]
    @time_off_entries = @time_off_entries.offset(params[:offset]) if params[:offset]
  end
  
end