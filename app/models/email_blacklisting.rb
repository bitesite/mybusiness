class EmailBlacklisting < ApplicationRecord
  before_save :upcase_and_strip_email

  private
    def upcase_and_strip_email
      self.email = self.email.upcase.strip
    end
end
