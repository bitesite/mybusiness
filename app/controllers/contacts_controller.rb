class ContactsController < ApplicationController
  load_and_authorize_resource

  layout 'non_landing'

  def index
    @contacts = Contact.all
  end

  def show
  end

  def new
    @contact = Contact.new
  end

  def edit
  end

  def create
    @contact = Contact.new(contact_params)

    if @contact.save
      if params[:download_id]
        session[:permitted_to_download] = true
        redirect_to Download.find(params[:download_id])
      else
        redirect_to @contact, notice: 'Contact was successfully created.'
      end
    else
      render :new
    end
  end

  def update
    if @contact.update(contact_params)
      redirect_to @contact, notice: 'Contact was successfully updated.'
    else
      render :edit
    end
  end

  def destroy
    @contact.destroy
    redirect_to contacts_url, notice: 'Contact was successfully destroyed.'
  end

  private
    def contact_params
      params.require(:contact).permit(:email, :first_name, :last_name, :job, :comment)
    end
end
