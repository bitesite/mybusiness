require 'rails_helper'

describe PagesController, type: :controller do

  shared_examples 'a user who can view public pages' do
    describe "GET #home" do
      it "returns successfully" do
        get :home
        expect(response).to have_http_status :ok
      end
    end

    describe "GET #portfolio" do
      it "returns successfully" do
        get :portfolio
        expect(response).to have_http_status :ok
      end
    end
  end

  context 'when not signed in' do
    it_behaves_like 'a user who can view public pages'
  end

  context 'when signed in' do
    before :each do
      sign_in create(:user)
    end

    it_behaves_like 'a user who can view public pages'
  end

  context 'when signed in as an admin' do
    before :each do
      sign_in create(:admin_user)
    end

    it_behaves_like 'a user who can view public pages'
  end

  context 'when signed in as staff' do
    before :each do
      sign_in create(:staff_user)
    end

    it_behaves_like 'a user who can view public pages'
  end

  context 'when signed in as a supervisor' do
    before :each do
      sign_in create(:supervisor_user)
    end

    it_behaves_like 'a user who can view public pages'
  end
end