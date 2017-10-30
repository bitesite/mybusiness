require 'rails_helper'

describe NewsPost, type: :model do
  it 'is valid with valid data' do
    expect(build(:news_post)).to be_valid
  end
end
