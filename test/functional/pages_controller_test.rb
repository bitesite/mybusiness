require 'test_helper'

class PagesControllerTest < ActionController::TestCase
  test "should get home" do
    get :home
    assert_response :success
  end

  test "should get whoareyou" do
    get :whoareyou
    assert_response :success
  end

  test "should get whoarewe" do
    get :whoarewe
    assert_response :success
  end

  test "should get packages" do
    get :packages
    assert_response :success
  end

  test "should get addons" do
    get :addons
    assert_response :success
  end

  test "should get contact" do
    get :contact
    assert_response :success
  end

end
