class Api::V1::NewsPostsController < Api::V1::ApplicationController
  respond_to :json
  
  before_action :authenticate_request!
  load_and_authorize_resource


  def index
  end
  
end