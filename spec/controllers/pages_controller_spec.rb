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

    describe "GET #international_safety" do
      it "returns successfully" do
        get :international_safety
        expect(response).to have_http_status :ok
      end
    end

    describe "GET #mydoma" do
      it "returns successfully" do
        get :mydoma
        expect(response).to have_http_status :ok
      end
    end

    describe "GET #splice" do
      it "returns successfully" do
        get :splice
        expect(response).to have_http_status :ok
      end
    end

    describe "GET #lspark_grad" do
      it "returns successfully" do
        get :lspark_grad
        expect(response).to have_http_status :ok
      end
    end

    describe "GET #lspark" do
      it "returns successfully" do
        get :lspark
        expect(response).to have_http_status :ok
      end
    end

    describe "GET #d3m" do
      it "returns successfully" do
        get :d3m
        expect(response).to have_http_status :ok
      end
    end

    describe "GET #martello" do
      it "returns successfully" do
        get :martello
        expect(response).to have_http_status :ok
      end
    end

    describe "GET #curtiss_wright" do
      it "returns successfully" do
        get :curtiss_wright
        expect(response).to have_http_status :ok
      end
    end

    describe "GET #ewa" do
      it "returns successfully" do
        get :ewa
        expect(response).to have_http_status :ok
      end
    end

    describe "GET #solink" do
      it "returns successfully" do
        get :solink
        expect(response).to have_http_status :ok
      end
    end

    describe "GET #christine_kelly" do
      it "returns successfully" do
        get :christine_kelly
        expect(response).to have_http_status :ok
      end
    end
    
    describe "GET #filefacets" do
      it "returns successfully" do
        get :filefacets
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