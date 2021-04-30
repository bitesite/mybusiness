require 'rails_helper'

describe Device, type: :model do
  it 'is valid with factory data' do
    expect(build(:device)).to be_valid
  end
end
