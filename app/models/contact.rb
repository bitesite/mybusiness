class Contact < ApplicationRecord
  validates :email, presence: true, uniqueness: true
  validates :first_name, presence: true
  validates :last_name, presence: true

  before_validation :strip_and_downcase_email

  private
    def strip_and_downcase_email
      self.email = self.email.downcase.strip
    end
end
