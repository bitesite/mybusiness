require 'rails_helper'

describe SettingsController, type: :controller do

  let(:setting) { create(:setting) }

  shared_examples 'a user who cannot manage settings' do
    describe "GET #index" do
      it "returns successfully" do
        get :index
        expect(response).to redirect_to root_path
      end
    end

    describe "GET #show" do
      it "returns successfully" do
        get :show, id: setting.id
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
        get :edit, id: setting.id
        expect(response).to redirect_to root_path
      end
    end

    describe 'POST #create' do
      it 'denies access' do
        post :create, setting: attributes_for(:setting)
        expect(response).to redirect_to root_path
      end

      it 'does not create a setting' do
        expect {
          post :create, setting: attributes_for(:setting)
        }.to change(Setting, :count).by(0)
      end
    end

    describe 'PUT #update' do
      it 'denies access' do
        setting
        put :update, id: setting.id, setting: {name: "NEW TITLE!"}
        expect(response).to redirect_to root_path
      end

      it 'does not update the setting' do
        setting
        original_name = setting.name
        put :update, id: setting.id, setting: {name: "#{original_name} V2"}
        setting.reload
        expect(setting.name).to eq(original_name)
      end
    end
  end

  shared_examples 'a user who can manage settings' do

    describe "GET #index" do
      it "returns successfully" do
        get :index
        expect(response).to have_http_status :ok
      end
    end

    describe "GET #show" do
      it "returns successfully" do
        get :show, id: setting.id
        expect(response).to have_http_status :ok
      end
    end

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
        get :edit, id: setting.id
        expect(response).to render_template :edit
      end
    end

    describe 'POST #create' do
      it 'creates a setting' do
        expect {
          post :create, setting: attributes_for(:setting)
        }.to change(Setting, :count).by(1)
      end
    end

    describe 'PUT #update' do
      it 'updates the setting' do
        setting
        original_name = setting.name
        put :update, id: setting.id, setting: {name: "#{original_name} V2"}
        setting.reload
        expect(setting.name).to eq("#{original_name} V2")
      end
    end
  end

  context 'when not signed in' do
    it_behaves_like 'a user who cannot manage settings'
  end

  context 'when signed in' do
    before :each do
      sign_in create(:user)
    end

    it_behaves_like 'a user who cannot manage settings'
  end

  context 'when signed in as an admin' do
    before :each do
      sign_in create(:admin_user)
    end

    it_behaves_like 'a user who can manage settings'
  end

  context 'when signed in as staff' do
    before :each do
      sign_in create(:staff_user)
    end

    it_behaves_like 'a user who cannot manage settings'
  end

  context 'when signed in as a supervisor' do
    before :each do
      sign_in create(:supervisor_user)
    end

    it_behaves_like 'a user who cannot manage settings'
  end
end