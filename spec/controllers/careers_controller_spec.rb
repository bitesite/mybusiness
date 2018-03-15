require 'rails_helper'

describe CareersController, type: :controller do

  let(:career) { create(:career) }

  shared_examples 'a user who can view careers' do
    describe "GET #index" do
      it "returns successfully" do
        get :index
        expect(response).to have_http_status :ok
      end
    end

    describe "GET #show" do
      it "returns successfully" do
        get :show, params: { id: career.id }
        expect(response).to have_http_status :ok
      end
    end
  end

  shared_examples 'a user who cannot manage careers' do
    describe 'GET #new' do
      it 'denies access' do
        get :new
        expect(response).to redirect_to root_path
      end
    end

    describe 'GET #edit' do
      it 'denies access' do
        get :edit, params: { id: career.id }
        expect(response).to redirect_to root_path
      end
    end

    describe 'POST #create' do
      it 'denies access' do
        post :create, params: { career: attributes_for(:career) }
        expect(response).to redirect_to root_path
      end

      it 'does not create a career' do
        expect {
          post :create, params: { career: attributes_for(:career) }
        }.to change(Career, :count).by(0)
      end
    end

    describe 'PUT #update' do
      it 'denies access' do
        career
        put :update, params: { id: career.id, career: {title: "NEW TITLE!"} }
        expect(response).to redirect_to root_path
      end

      it 'does not update the career' do
        career
        original_title = career.title
        put :update, params: { id: career.id, career: {title: "#{original_title} V2"} }
        career.reload
        expect(career.title).to eq(original_title)
      end
    end
  end

  shared_examples 'a user who can manage careers' do
    describe 'GET #index' do
      it 'returns a 200 OK' do
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
        get :edit, params: { id: career.id }
        expect(response).to render_template :edit
      end
    end

    describe 'POST #create' do
      it 'creates a career' do
        expect {
          post :create, params: { career: attributes_for(:career) }
        }.to change(Career, :count).by(1)
      end
    end

    describe 'PUT #update' do
      it 'updates the career' do
        career
        original_title = career.title
        put :update, params: { id: career.id, career: {title: "#{original_title} V2"} }
        career.reload
        expect(career.title).to eq("#{original_title} V2")
      end
    end
  end

  context 'when not signed in' do
    it_behaves_like 'a user who can view careers'
    it_behaves_like 'a user who cannot manage careers'
  end

  context 'when signed in' do
    before :each do
      sign_in create(:user)
    end

    it_behaves_like 'a user who can view careers'
    it_behaves_like 'a user who cannot manage careers'
  end

  context 'when signed in as an admin' do
    before :each do
      sign_in create(:admin_user)
    end

    it_behaves_like 'a user who can view careers'
    it_behaves_like 'a user who can manage careers'
  end

  context 'when signed in as staff' do
    before :each do
      sign_in create(:staff_user)
    end

    it_behaves_like 'a user who can view careers'
    it_behaves_like 'a user who cannot manage careers'
  end

  context 'when signed in as a supervisor' do
    before :each do
      sign_in create(:supervisor_user)
    end

    it_behaves_like 'a user who can view careers'
  end
end