require 'test_helper'

class VideoListingsControllerTest < ActionController::TestCase
  setup do
    @video_listing = video_listings(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:video_listings)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create video_listing" do
    assert_difference('VideoListing.count') do
      post :create, video_listing: { image: @video_listing.image, link: @video_listing.link, name: @video_listing.name }
    end

    assert_redirected_to video_listing_path(assigns(:video_listing))
  end

  test "should show video_listing" do
    get :show, id: @video_listing
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @video_listing
    assert_response :success
  end

  test "should update video_listing" do
    put :update, id: @video_listing, video_listing: { image: @video_listing.image, link: @video_listing.link, name: @video_listing.name }
    assert_redirected_to video_listing_path(assigns(:video_listing))
  end

  test "should destroy video_listing" do
    assert_difference('VideoListing.count', -1) do
      delete :destroy, id: @video_listing
    end

    assert_redirected_to video_listings_path
  end
end
