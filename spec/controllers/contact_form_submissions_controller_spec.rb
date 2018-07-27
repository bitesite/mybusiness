require 'rails_helper'

describe ContactFormSubmissionsController, type: :controller do

  let(:contact_form_submission) { create(:contact_form_submission) }

  shared_examples 'a user who cannot manage contact form submissions' do

    describe "GET #index" do
      it "returns successfully" do
        get :index
        expect(response).to redirect_to root_path
      end
    end

    describe "DELETE #destroy" do
      it 'does not destroy the contact form submission' do
        contact_form_submission
        expect {
          delete :destroy, params: { id: contact_form_submission }
        }.to change(ContactFormSubmission, :count).by(0)
      end
    end
  end

  shared_examples 'a user who can manage contact form submissions' do
    describe "GET #index" do
      it "returns successfully" do
        get :index
        expect(response).to have_http_status :ok
      end
    end

    it 'does not destroy the contact form submission' do
      contact_form_submission
      expect {
        delete :destroy, params: { id: contact_form_submission }
      }.to change(ContactFormSubmission, :count).by(-1)
    end
  end

  context 'when not signed in' do
    it_behaves_like 'a user who cannot manage contact form submissions'
  end

  context 'when signed in' do
    before :each do
      sign_in create(:user)
    end

    it_behaves_like 'a user who cannot manage contact form submissions'
  end

  context 'when signed in as an admin' do
    before :each do
      sign_in create(:admin_user)
    end

    it_behaves_like 'a user who can manage contact form submissions'
  end

  context 'when signed in as staff' do
    before :each do
      sign_in create(:staff_user)
    end

    it_behaves_like 'a user who cannot manage contact form submissions'
  end

  context 'when signed in as a supervisor' do
    before :each do
      sign_in create(:supervisor_user)
    end

    it_behaves_like 'a user who cannot manage contact form submissions'
  end
end