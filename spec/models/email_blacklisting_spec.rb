require 'rails_helper'

describe EmailBlacklisting, type: :model do
  it 'is valid with valid data' do
    expect(build(:email_blacklisting)).to be_valid
  end
end
