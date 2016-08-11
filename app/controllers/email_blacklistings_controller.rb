class EmailBlacklistingsController < ApplicationController

  before_filter :deny_access_for_non_admins

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
    @email_blacklisting = EmailBlacklisting.new(params[:email_blacklisting])

    if @email_blacklisting.save
      redirect_to email_blacklisting_url, notice: 'Email blacklisting was successfully created.' 
    else
      render action: "new" 
    end
  end

  def update
    @email_blacklisting = EmailBlacklisting.find(params[:id])

    if @email_blacklisting.update_attributes(params[:email_blacklisting])
      redirect_to email_blacklisting_url, notice: 'Email blacklisting was successfully updated.' 
    else
      render action: "edit" 
    end
  end

  def destroy
    @email_blacklisting = EmailBlacklisting.find(params[:id])
    @email_blacklisting.destroy

    redirect_to email_blacklistings_url 
  end
end
