class Api::V1::SessionsController < Api::V1::ApplicationController
  before_action :authenticate_request!, only: [:status]
  respond_to :json

  def create
    user_email = params[:session][:email]
    user_password = params[:session][:password]

    user = User.find_for_database_authentication(email: user_email)
    if user && user.valid_password?(user_password)
      render json: payload(user)
    else
      render json: {errors: ['Invalid Username/Password']}, status: :unauthorized
    end
  end

  def destroy
    @user = User.find_by(auth_token: params[:id])
    @user.generate_authentication_token!
    @user.save
    head 204
  end


  def status
    render json: { signed_in: true }, status: 200
  end

  private

    def payload(user)
      return nil unless user and user.id
      {
        auth_token: JsonWebToken.encode({user_id: user.id}),
        user: {id: user.id, email: user.email}
      }
    end
end