require 'rails_helper'

describe NewsPostsController, type: :controller do

  let(:news_post) { create(:news_post) }

  shared_examples 'a user who can view news posts' do
    describe "GET #index" do
      it "returns successfully" do
        get :index
        expect(response).to have_http_status :ok
      end
    end

    describe "GET #show" do
      it "returns successfully" do
        get :show, params: { id: news_post.id }
        expect(response).to have_http_status :ok
      end
    end
  end

  shared_examples 'a user who cannot manage news posts' do
    describe 'GET #new' do
      it 'denies access' do
        get :new
        expect(response).to redirect_to root_path
      end
    end

    describe 'GET #edit' do
      it 'denies access' do
        get :edit, params: { id: news_post.id }
        expect(response).to redirect_to root_path
      end
    end

    describe 'POST #create' do
      it 'denies access' do
        post :create, params: { news_post: attributes_for(:news_post) }
        expect(response).to redirect_to root_path
      end

      it 'does not create a news post' do
        expect {
          post :create, params: { news_post: attributes_for(:news_post) }
        }.to change(NewsPost, :count).by(0)
      end
    end

    describe 'PUT #update' do
      it 'denies access' do
        news_post
        put :update, params: { id: news_post.id, news_post: {title: "NEW TITLE!"} }
        expect(response).to redirect_to root_path
      end

      it 'does not update the news post' do
        news_post
        original_title = news_post.title
        put :update, params: { id: news_post.id, news_post: {title: "#{original_title} V2"} }
        news_post.reload
        expect(news_post.title).to eq(original_title)
      end
    end
  end

  shared_examples 'a user who can manage news posts' do
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
        get :edit, params: { id: news_post.id }
        expect(response).to render_template :edit
      end
    end

    describe 'POST #create' do
      it 'creates a news post' do
        expect {
          post :create, params: { news_post: attributes_for(:news_post) }
        }.to change(NewsPost, :count).by(1)
      end
    end

    describe 'PUT #update' do
      it 'updates the news post' do
        news_post
        original_title = news_post.title
        put :update, params: { id: news_post.id, news_post: {title: "#{original_title} V2"} }
        news_post.reload
        expect(news_post.title).to eq("#{original_title} V2")
      end
    end
  end

  context 'when not signed in' do
    it_behaves_like 'a user who can view news posts'
    it_behaves_like 'a user who cannot manage news posts'
  end

  context 'when signed in' do
    before :each do
      sign_in create(:user)
    end

    it_behaves_like 'a user who can view news posts'
    it_behaves_like 'a user who cannot manage news posts'
  end

  context 'when signed in as an admin' do
    before :each do
      sign_in create(:admin_user)
    end

    it_behaves_like 'a user who can view news posts'
    it_behaves_like 'a user who can manage news posts'
  end

  context 'when signed in as staff' do
    before :each do
      sign_in create(:staff_user)
    end

    it_behaves_like 'a user who can view news posts'
    it_behaves_like 'a user who cannot manage news posts'
  end

  context 'when signed in as a supervisor' do
    before :each do
      sign_in create(:supervisor_user)
    end

    it_behaves_like 'a user who can view news posts'
  end
end