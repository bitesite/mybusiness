require 'rails_helper'

describe Setting, type: :model do
  it 'is valid with valid data' do
    expect(build(:setting)).to be_valid
  end
end
