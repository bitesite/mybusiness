require 'rails_helper'

describe Career, type: :model do
  it 'is valid with valid data' do
    expect(build(:career)).to be_valid
  end
end
