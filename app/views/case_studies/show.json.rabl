object @case_study

attributes :id, :name, :subtitle, :challenge, :process, :outcome, :site_image, :challenge_image, :process_image, :outcome_image, :logo, :link

child :testimonial do
  attributes :quote, :body, :name, :title, :logo, :created_at
end
