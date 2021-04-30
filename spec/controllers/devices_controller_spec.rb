require 'rails_helper'

describe DevicesController, type: :controller do

  let(:device) { create(:device) }
  let(:device_attributes) { attributes_for(:device, web_push_endpoint: 'test') }
  let(:another_user) { create(:user) }

  shared_examples 'a user who can manage devices is signed in' do
    describe "POST #create" do
      it "returns successfully" do
        post :create, params: { device: device_attributes, format: :json }
        expect(response).to have_http_status :ok
      end

      it "create a device on the user" do
        expect {
          post :create, params: { device: device_attributes, format: :json }
        }.to change(@current_user.devices, :count).by(1)
      end

      it "does not create a device on another user if attempted" do
        expect {
          post :create, params: { device: attributes_for(:device, web_push_endpoint: 'test', user_id: another_user.id), format: :json }
        }.to change(another_user.devices, :count).by(0)
      end
    end
  end

  shared_examples 'a user who can\'t manage devices is signed in' do
    describe "POST #create" do
      it "does not create a device" do
        expect {
          post :create, params: { device: device_attributes, format: :json }
        }.to change(Device, :count).by(0)
      end
    end
  end

  context 'when not signed in' do
    it_behaves_like 'a user who can\'t manage devices is signed in'
  end

  context 'when signed in' do
    before :each do
      @current_user = create(:user)
      sign_in @current_user
    end

    it_behaves_like 'a user who can manage devices is signed in'
  end

  context 'when signed in as an admin' do
    before :each do
      @current_user = create(:admin_user)
      sign_in @current_user
    end

    it_behaves_like 'a user who can manage devices is signed in'
  end

  context 'when signed in as staff' do
    before :each do
      @current_user = create(:staff_user)
      sign_in @current_user
    end

    it_behaves_like 'a user who can manage devices is signed in'
  end

  context 'when signed in as a supervisor' do
    before :each do
      @current_user = create(:supervisor_user)
      sign_in @current_user
    end

    it_behaves_like 'a user who can manage devices is signed in'
  end
end