require 'rails_helper'

describe TimeOffEntry, type: :model do
  it 'is valid with valid data' do
    expect(build(:time_off_entry)).to be_valid
  end
end
