class ContactFormSubmissionsController < ApplicationController
  load_and_authorize_resource
  before_action :set_title
  layout 'non_landing'
  
  def index
    @contact_form_submissions = ContactFormSubmission.all
  end

  def destroy
    @contact_form_submission.destroy
    redirect_to contact_form_submissions_path
  end

  private
    def contact_form_submission
      params.require(:contact_form_submission).permit(:email_address, :first_name, :last_name, :message)  
    end

    def set_title
      @title = "Contact Form Subsmissions"
    end
end
