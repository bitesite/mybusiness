class Testimonial < ApplicationRecord
  belongs_to :case_study, optional: true
end
