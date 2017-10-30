require 'rails_helper'

describe User, type: :model do
  it 'is valid with valid data' do
    expect(build(:blog_post)).to be_valid
  end
end
