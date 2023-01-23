class AddCaseStudyIdToTestimonials < ActiveRecord::Migration[5.2]
  def change
    add_column :testimonials, :case_study_id, :integer
  end
end
