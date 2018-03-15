require 'rails_helper'

describe TimeOffEntriesController, type: :controller do

  let(:time_off_entry) { create(:time_off_entry) }

  shared_examples 'a user who cannot manage time off entries' do
    describe "GET #index" do
      it "returns successfully" do
        get :index
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
        get :edit, id: time_off_entry.id
        expect(response).to redirect_to root_path
      end
    end

    describe 'POST #create' do
      it 'denies access' do
        post :create, time_off_entry: attributes_for(:time_off_entry)
        expect(response).to redirect_to root_path
      end

      it 'does not create a time off entry' do
        expect {
          post :create, time_off_entry: attributes_for(:time_off_entry)
        }.to change(TimeOffEntry, :count).by(0)
      end
    end

    describe 'PUT #update' do
      it 'denies access' do
        time_off_entry
        put :update, id: time_off_entry.id, time_off_entry: {notes: "NEW NOTES!"}
        expect(response).to redirect_to root_path
      end

      it 'does not update the time off entry' do
        time_off_entry
        original_notes = time_off_entry.notes
        put :update, id: time_off_entry.id, time_off_entry: {notes: "#{original_notes} V2"}
        time_off_entry.reload
        expect(time_off_entry.notes).to eq(original_notes)
      end
    end
  end

  shared_examples 'a user who can manage time off entries' do
    describe "GET #index" do
      it "returns successfully" do
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
        get :edit, id: @time_off_entry.id
        expect(response).to render_template :edit
      end
    end

    describe 'POST #create' do
      it 'creates a time off entry' do
        expect {
          post :create, time_off_entry: attributes_for(:time_off_entry)
        }.to change(TimeOffEntry, :count).by(1)
      end
    end

    describe 'PUT #update' do
      it 'updates the time off entry' do
        original_notes = @time_off_entry.notes
        put :update, id: @time_off_entry.id, time_off_entry: {notes: "#{original_notes} V2"}
        @time_off_entry.reload
        expect(@time_off_entry.notes).to eq("#{original_notes} V2")
      end
    end
  end

  context 'when not signed in' do
    it_behaves_like 'a user who cannot manage time off entries'
  end

  context 'when signed in' do
    before :each do
      sign_in create(:user)
    end

    # TODO
  end

  context 'when signed in as an admin' do
    before :each do
      @user = create(:admin_user)
      @time_off_entry = create(:time_off_entry, user_id: @user.id)
      sign_in @user
    end

    it_behaves_like 'a user who can manage time off entries'
  end

  context 'when signed in as staff' do
    before :each do
      @user = create(:staff_user)
      @time_off_entry = create(:time_off_entry, user_id: @user.id, status: 'approved')
      sign_in @user
    end

    it_behaves_like 'a user who can manage time off entries'
  end

  context 'when signed in as a supervisor' do
    before :each do
      @user = create(:supervisor_user)
      @time_off_entry = create(:time_off_entry, user_id: @user.id)
      sign_in @user
    end

    # TODO
  end
end