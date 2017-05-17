require 'test_helper'

class Api::SongsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_songs_index_url
    assert_response :success
  end

  test "should get show" do
    get api_songs_show_url
    assert_response :success
  end

  test "should get create" do
    get api_songs_create_url
    assert_response :success
  end

  test "should get destory" do
    get api_songs_destory_url
    assert_response :success
  end

  test "should get update" do
    get api_songs_update_url
    assert_response :success
  end

end
