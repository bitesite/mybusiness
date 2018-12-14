require 'rails_helper'

describe CommentsController, type: :controller do

  let(:comment) { create(:comment) }

  shared_examples 'a user who can view and create comments' do
    describe "GET #index" do
      it "returns successfully" do
        get :index, params: { blog_post_id: comment.blog_post.id, format: :json }
        expect(response).to have_http_status :ok
      end
    end

    describe 'POST #create' do
      it 'creates a blog post' do
        comment
        expect {
          post :create, params: { blog_post_id: comment.blog_post.id, comment: attributes_for(:comment), format: :json }
        }.to change(Comment, :count).by(1)
      end
    end
  end

  context 'when not signed in' do
    it_behaves_like 'a user who can view and create comments'
  end

  context 'when signed in' do
    before :each do
      sign_in create(:user)
    end

    it_behaves_like 'a user who can view and create comments'
  end

  context 'when signed in as an admin' do
    before :each do
      user = create(:admin_user)
      sign_in user
    end

    it_behaves_like 'a user who can view and create comments'
  end

  context 'when signed in as staff' do
    before :each do
      sign_in create(:staff_user)
    end

    it_behaves_like 'a user who can view and create comments'
  end

  context 'when signed in as a supervisor' do
    before :each do
      sign_in create(:supervisor_user)
    end

    it_behaves_like 'a user who can view and create comments'
  end
end