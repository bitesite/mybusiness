require 'rails_helper'

describe VideoListingsController, type: :controller do

  let(:video_listing) { create(:video_listing) }

  shared_examples 'a user who cannot manage video listings' do

    describe "GET #index" do
      it "returns successfully" do
        get :index
        expect(response).to redirect_to root_path
      end
    end

    describe "GET #show" do
      it "returns successfully" do
        get :show, params: { id: video_listing.id }
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
        get :edit, params: { id: video_listing.id }
        expect(response).to redirect_to root_path
      end
    end

    describe 'POST #create' do
      it 'denies access' do
        post :create, params: { video_listing: attributes_for(:video_listing) }
        expect(response).to redirect_to root_path
      end

      it 'does not create a video listing' do
        expect {
          post :create, params: { video_listing: attributes_for(:video_listing) }
        }.to change(VideoListing, :count).by(0)
      end
    end

    describe 'PUT #update' do
      it 'denies access' do
        video_listing
        put :update, params: { id: video_listing.id, video_listing: {name: "NEW NAME!"} }
        expect(response).to redirect_to root_path
      end

      it 'does not update the video listing' do
        video_listing
        original_name = video_listing.name
        put :update, params: { id: video_listing.id, video_listing: {name: "#{original_name} V2"} }
        video_listing.reload
        expect(video_listing.name).to eq(original_name)
      end
    end
  end

  shared_examples 'a user who can manage video listings' do
    describe "GET #index" do
      it "returns successfully" do
        get :index
        expect(response).to have_http_status :ok
      end
    end

    describe "GET #show" do
      it "returns successfully" do
        get :show, params: { id: video_listing.id }
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
        get :edit, params: { id: video_listing.id }
        expect(response).to render_template :edit
      end
    end

    describe 'POST #create' do
      it 'creates a video listing' do
        expect {
          post :create, params: { video_listing: attributes_for(:video_listing) }
        }.to change(VideoListing, :count).by(1)
      end
    end

    describe 'PUT #update' do
      it 'updates the video listing' do
        video_listing
        original_name = video_listing.name
        put :update, params: { id: video_listing.id, video_listing: {name: "#{original_name} V2"} }
        video_listing.reload
        expect(video_listing.name).to eq("#{original_name} V2")
      end
    end
  end

  context 'when not signed in' do
    it_behaves_like 'a user who cannot manage video listings'
  end

  context 'when signed in' do
    before :each do
      sign_in create(:user)
    end

    it_behaves_like 'a user who cannot manage video listings'
  end

  context 'when signed in as an admin' do
    before :each do
      sign_in create(:admin_user)
    end

    it_behaves_like 'a user who can manage video listings'
  end

  context 'when signed in as staff' do
    before :each do
      sign_in create(:staff_user)
    end

    it_behaves_like 'a user who cannot manage video listings'
  end

  context 'when signed in as a supervisor' do
    before :each do
      sign_in create(:supervisor_user)
    end

    it_behaves_like 'a user who cannot manage video listings'
  end
end