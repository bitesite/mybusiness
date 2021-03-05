object @profile

attributes :weekly_billable_hours_target,
           :first_name,
           :last_name

node :email do |profile|
  profile.user.email
end