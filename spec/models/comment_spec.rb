require 'rails_helper'

describe Comment, type: :model do
  it 'is valid with valid data' do
    expect(build(:comment)).to be_valid
  end

  it 'is invalid without a name' do
    expect(build(:comment, name: nil)).to_not be_valid
  end

  it 'is invalid without a email' do
    expect(build(:comment, email: nil)).to_not be_valid
  end
  
  it 'is invalid without a body' do
    expect(build(:comment, body: nil)).to_not be_valid
  end

end
