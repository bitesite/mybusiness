class DownloadsController < ApplicationController
  load_and_authorize_resource

  layout 'non_landing'

  def index
    @downloads = Download.all
  end

  def show
  end

  def download
    if session[:permitted_to_download] == true
      session[:permitted_to_download] = false
      redirect_to root_path #TODO Change this to serve the file
    else
      redirect_to new_contact_path
    end
  end

  def new
    @download = Download.new
  end

  def edit
  end

  def create
    @download = Download.new(download_params)

    if @download.save
      redirect_to @download, notice: 'Download was successfully created.'
    else
      render :new
    end
  end

  def update
    if @download.update(download_params)
      redirect_to @download, notice: 'Download was successfully updated.'
    else
      render :edit
    end
  end

  def destroy
    @download.destroy
    redirect_to downloads_url, notice: 'Download was successfully destroyed.'
  end

  private
    def download_params
      params.require(:download).permit(:aws_object_key, :name)
    end
end
