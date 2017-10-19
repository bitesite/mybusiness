require 'rails_helper'

describe User, :type => :model do
  it 'is valid with valid data' do
    expect(build(:user)).to be_valid
  end

  it 'is invalid when email is not unique' do
    email = 'email@example.org'
    create(:user, email: email)
    expect(build(:user, email: email)).to be_invalid
  end

  it 'is invalid when password do not match' do
    expect(build(:user, password: 'password12', password_confirmation: 'password123'))
  end
end
