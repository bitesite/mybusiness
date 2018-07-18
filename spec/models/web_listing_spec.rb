require 'rails_helper'

describe WebListing, type: :model do
  it 'is valid with valid data' do
    expect(build(:web_listing)).to be_valid
  end
end
