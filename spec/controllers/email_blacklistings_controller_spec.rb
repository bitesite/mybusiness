require 'rails_helper'

describe EmailBlacklistingsController, type: :controller do

  let(:email_blacklisting) { create(:email_blacklisting) }

  shared_examples 'a user who cannot manage email blacklistings' do

    describe "GET #index" do
      it "returns successfully" do
        get :index
        expect(response).to redirect_to root_path
      end
    end

    describe 'GET #new' do
      it 'denies access' do
        get :new
        expect(response).to redirect_to root_path
      end
    end

    describe 'GET #edit' do
      it 'denies access' do
        get :edit, id: email_blacklisting.id
        expect(response).to redirect_to root_path
      end
    end

    describe 'POST #create' do
      it 'denies access' do
        post :create, email_blacklisting: attributes_for(:email_blacklisting)
        expect(response).to redirect_to root_path
      end

      it 'does not create a email blacklisting' do
        expect {
          post :create, email_blacklisting: attributes_for(:email_blacklisting)
        }.to change(EmailBlacklisting, :count).by(0)
      end
    end

    describe 'PUT #update' do
      it 'denies access' do
        email_blacklisting
        put :update, id: email_blacklisting.id, email_blacklisting: {email: "new_email@example.com"}
        expect(response).to redirect_to root_path
      end

      it 'does not update the email blacklisting' do
        email_blacklisting
        original_email = email_blacklisting.email
        put :update, id: email_blacklisting.id, email_blacklisting: {email: "#{original_email}.v2"}
        email_blacklisting.reload
        expect(email_blacklisting.email).to eq(original_email)
      end
    end
  end

  shared_examples 'a user who can manage email blacklistings' do
    describe "GET #index" do
      it "returns successfully" do
        get :index
        expect(response).to have_http_status :ok
      end
    end

    describe 'GET #new' do
      it 'renders the new template' do
        get :new
        expect(response).to render_template :new
      end
    end

    describe 'GET #edit' do
      it 'renders the edit template' do
        get :edit, id: email_blacklisting.id
        expect(response).to render_template :edit
      end
    end

    describe 'POST #create' do
      it 'creates a email blacklisting' do
        expect {
          post :create, email_blacklisting: attributes_for(:email_blacklisting)
        }.to change(EmailBlacklisting, :count).by(1)
      end
    end

    describe 'PUT #update' do
      it 'updates the email blacklisting' do
        email_blacklisting
        original_email = email_blacklisting.email
        put :update, id: email_blacklisting.id, email_blacklisting: {email: "#{original_email} V2"}
        email_blacklisting.reload
        expect(email_blacklisting.email).to eq("#{original_email} V2")
      end
    end
  end

  context 'when not signed in' do
    it_behaves_like 'a user who cannot manage email blacklistings'
  end

  context 'when signed in' do
    before :each do
      sign_in create(:user)
    end

    it_behaves_like 'a user who cannot manage email blacklistings'
  end

  context 'when signed in as an admin' do
    before :each do
      sign_in create(:admin_user)
    end

    it_behaves_like 'a user who can manage email blacklistings'
  end

  context 'when signed in as staff' do
    before :each do
      sign_in create(:staff_user)
    end

    it_behaves_like 'a user who cannot manage email blacklistings'
  end

  context 'when signed in as a supervisor' do
    before :each do
      sign_in create(:supervisor_user)
    end

    it_behaves_like 'a user who cannot manage email blacklistings'
  end
end