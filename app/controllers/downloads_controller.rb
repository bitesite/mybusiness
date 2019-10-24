class DownloadsController < ApplicationController
  load_and_authorize_resource

  def index
    @downloads = Download.all
  end

  def show
    if admin? || session[:permitted_to_download]
      session[:permitted_to_download] = false
      @url = generate_presigned_url
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

    def generate_presigned_url
      S3_PRESIGNER.presigned_url(:get_object, bucket: ENV['AWS_S3_BUCKET'], key: @download.aws_object_key)
    end
end
