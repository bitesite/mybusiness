class ContactFormSubmissionsController < ApplicationController
  
  before_filter :deny_access_for_non_admins
  before_filter :set_title
  layout 'non_landing'
  
  def index
    @contact_form_submissions = ContactFormSubmission.all
  end

  private
    def contact_form_submission
      params.require(:contact_form_submission).permit(:email_address, :first_name, :last_name, :message)  
    end

    def set_title
      @title = "Contact Form Subsmissions"
    end
end
