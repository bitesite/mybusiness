class ContactFormSubmissionsController < ApplicationController
  
  before_filter :deny_access_for_non_admins
  before_filter :set_title
  layout 'non_landing'
  
  def index
    @contact_form_submissions = ContactFormSubmission.all
  end

  private
    def set_title
      @title = "Contact Form Subsmissions"
    end
end
