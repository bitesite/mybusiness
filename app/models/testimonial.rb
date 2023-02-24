class Testimonial < ApplicationRecord
  belongs_to :case_study, optional: true

  def referral_card_text
    self.short_quote || self.body
  end
end
