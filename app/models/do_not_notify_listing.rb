class DoNotNotifyListing < ApplicationRecord
  before_validation :upcase_and_strip_email
  validates :email, uniqueness: true

  def self.should_not_notify?(email)
    DoNotNotifyListing.where(email: email.upcase.strip).exists?
  end

  private
    def upcase_and_strip_email
      self.email = self.email.upcase.strip
    end
end
