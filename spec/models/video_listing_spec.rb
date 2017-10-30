require 'rails_helper'

describe VideoListing, type: :model do
  it 'is valid with valid data' do
    expect(build(:video_listing)).to be_valid
  end
end
