class DoNotNotifyListing < ApplicationRecord
  before_validation :upcase_and_strip_email
  validates :email, uniqueness: true

  private
    def upcase_and_strip_email
      self.email = self.email.upcase.strip
    end
end
