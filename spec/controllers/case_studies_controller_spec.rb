require "rails_helper"

describe CaseStudiesController, type: :controller do
  shared_examples "a user who can read case studies" do
    describe "GET #index" do
      it "renders the index view when format html" do
        get :index
        expect(response).to render_template :index
        expect(response).to have_http_status :ok
      end

      it "returns the proper json when format json" do
        get :index, format: :json
        expect(response).to have_http_status :ok
        expect(response).to match_response_schema("case_study")
      end
    end
  end

  context "when not signed in" do
    it_behaves_like "a user who can read case studies"
  end

  context "when signed in" do
    before :each do
      @user = create(:staff_user)
      sign_in @user
    end

    it_behaves_like "a user who can read case studies"
  end

  context "when signed in as an admin" do
    before :each do
      sign_in create(:admin_user)
    end

    it_behaves_like "a user who can read case studies"
  end

  context "when signed in as staff" do
    before :each do
      sign_in create(:staff_user)
    end

    it_behaves_like "a user who can read case studies"
  end

  context "when signed in as a supervisor" do
    before :each do
      sign_in create(:supervisor_user)
    end

    it_behaves_like "a user who can read case studies"
  end
end
