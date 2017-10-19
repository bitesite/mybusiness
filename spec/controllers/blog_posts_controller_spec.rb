require 'rails_helper'

describe BlogPostsController, type: :controller do
  shared_examples 'a user who can not manage blog posts' do
    describe "GET #index" do
      it "returns a 200 OK" do
        get :index
        expect(response).to have_http_status :ok
      end
    end
  end

  shared_examples 'a user who can manage blog posts' do
    destribe 'GET #index' do
      it 'returns a 200 OK' do
        get :index
        expect(response).to have_http_status :ok
      end
    end
  end

  context 'when not signed in' do
    it_behaves_like 'a user who can not manage blog posts'
  end

  context 'when signed in' do
    before :each do
      sign_in create(:user)
    end

    it_behaves_like 'a user who can not manage blog posts'
  end

  context 'when signed in as an admin' do
    before :each do
      sign_in create(:admin_user)
    end
  end

  context 'when signed in as staff' do
    before :each do
      sign_in create(:staff_user)
    end
  end

  context 'when signed in as a supervisor' do
    before :each do
      sign_in create(:supervisor_user)
    end

    it_behaves_like 'a user who can not manage blog posts'
  end
end