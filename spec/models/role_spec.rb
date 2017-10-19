require 'rails_helper'

describe Role, :type => :model do
  it 'is valid with valid data' do
    expect(build(:admin_role)).to be_valid
  end

  it 'is invalid without a name' do
    expect(build(:role)).to be_invalid
  end

  it 'is invalid when name is not unique' do
    create(:admin_role)
    expect(build(:admin_role)).to be_invalid
  end
end
