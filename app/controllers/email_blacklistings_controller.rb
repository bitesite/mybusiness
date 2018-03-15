class EmailBlacklistingsController < ApplicationController
  before_action :deny_access_for_non_admins
  layout 'non_landing'

  def index
    @email_blacklistings = EmailBlacklisting.all
  end

  def new
    @email_blacklisting = EmailBlacklisting.new
  end

  def edit
    @email_blacklisting = EmailBlacklisting.find(params[:id])
  end

  def create
    @email_blacklisting = EmailBlacklisting.new(email_blacklisting_params)

    if @email_blacklisting.save
      redirect_to email_blacklistings_path, notice: 'Email blacklisting was successfully created.' 
    else
      render action: "new" 
    end
  end

  def update
    @email_blacklisting = EmailBlacklisting.find(params[:id])

    if @email_blacklisting.update_attributes(email_blacklisting_params)
      redirect_to email_blacklistings_path, notice: 'Email blacklisting was successfully updated.' 
    else
      render action: "edit" 
    end
  end

  def destroy
    @email_blacklisting = EmailBlacklisting.find(params[:id])
    @email_blacklisting.destroy

    redirect_to email_blacklistings_url 
  end

  private
    def email_blacklisting_params
      params.require(:email_blacklisting).permit(:email)
    end
end
