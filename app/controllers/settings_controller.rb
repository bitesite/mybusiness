class SettingsController < ApplicationController
  load_and_authorize_resource

  def index
  end

  def new
  end

  def edit
  end

  def create
    if @setting.save
      redirect_to settings_path, notice: 'Setting was successfully created.'
    else
      render action: "new"
    end
  end

  def update
    if @setting.update(setting_params)
      redirect_to settings_path, notice: 'Setting was successfully updated.'
    else
      render action: "edit"
    end
  end

  def destroy
    @setting.destroy

    redirect_to settings_url
  end

  private
    def setting_params
      params.require(:setting).permit(:name, :value)
    end
end
