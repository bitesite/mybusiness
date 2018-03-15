require 'rails_helper'

describe BlogPostsController, type: :controller do

  let(:blog_post) { create(:blog_post) }

  shared_examples 'a user who can view blog posts' do
    describe "GET #index" do
      it "returns successfully" do
        get :index
        expect(response).to have_http_status :ok
      end
    end
  end

  shared_examples 'a user who cannot manage blog posts' do
    describe 'GET #new' do
      it 'denies access' do
        get :new
        expect(response).to redirect_to root_path
      end
    end

    describe 'GET #edit' do
      it 'denies access' do
        get :edit, id: blog_post.id
        expect(response).to redirect_to root_path
      end
    end

    describe 'POST #create' do
      it 'denies access' do
        post :create, blog_post: attributes_for(:blog_post)
        expect(response).to redirect_to root_path
      end

      it 'does not create a blog post' do
        expect {
          post :create, blog_post: attributes_for(:blog_post)
        }.to change(BlogPost, :count).by(0)
      end
    end

    describe 'PUT #update' do
      it 'denies access' do
        blog_post
        put :update, id: blog_post.id, blog_post: {title: "NEW TITLE!"}
        expect(response).to redirect_to root_path
      end

      it 'does not update the blog post' do
        blog_post
        original_title = blog_post.title
        put :update, id: blog_post.id, blog_post: {title: "#{original_title} V2"}
        blog_post.reload
        expect(blog_post.title).to eq(original_title)
      end
    end
  end

  shared_examples 'a user who can manage blog posts' do
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
        get :edit, id: blog_post.id
        expect(response).to render_template :edit
      end
    end

    describe 'POST #create' do
      it 'creates a blog post' do
        expect {
          post :create, blog_post: attributes_for(:blog_post)
        }.to change(BlogPost, :count).by(1)
      end
    end

    describe 'PUT #update' do
      it 'updates the blog post' do
        blog_post
        original_title = blog_post.title
        put :update, id: blog_post.id, blog_post: {title: "#{original_title} V2"}
        blog_post.reload
        expect(blog_post.title).to eq("#{original_title} V2")
      end
    end
  end

  context 'when not signed in' do
    it_behaves_like 'a user who can view blog posts'
    it_behaves_like 'a user who cannot manage blog posts'
  end

  context 'when signed in' do
    before :each do
      sign_in create(:user)
    end

    it_behaves_like 'a user who can view blog posts'
    it_behaves_like 'a user who cannot manage blog posts'
  end

  context 'when signed in as an admin' do
    before :each do
      sign_in create(:admin_user)
    end

    it_behaves_like 'a user who can view blog posts'
    it_behaves_like 'a user who can manage blog posts'
  end

  context 'when signed in as staff' do
    before :each do
      sign_in create(:staff_user)
    end

    it_behaves_like 'a user who can view blog posts'
    it_behaves_like 'a user who can manage blog posts'
  end

  context 'when signed in as a supervisor' do
    before :each do
      sign_in create(:supervisor_user)
    end

    it_behaves_like 'a user who can view blog posts'
  end
end