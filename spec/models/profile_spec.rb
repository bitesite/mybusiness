require 'rails_helper'

describe Profile, :type => :model do
  it 'is valid with valid data' do
    expect(build(:profile_with_user)).to be_valid
  end

  it 'is invalid when employee number is not unique' do
    employee_number = Faker::Number.number(3).to_i
    create(:profile_with_user, employee_number: employee_number)
    expect(build(:profile_with_user, employee_number: employee_number)).to be_invalid
  end
end
