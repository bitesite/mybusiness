class Contact < ApplicationRecord
  validates :email, presence: true, uniqueness: true
  validates :first_name, presence: true
  validates :last_name, presence: true

  before_validation :downcase_email

  private
    def downcase_email
      self.email = self.email.downcase
    end
end
