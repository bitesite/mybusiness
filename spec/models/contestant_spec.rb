require 'rails_helper'

describe Contestant, type: :model do
  it 'is valid with valid data' do
    expect(build(:contestant)).to be_valid
  end
end
