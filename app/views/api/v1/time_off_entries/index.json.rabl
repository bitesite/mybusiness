collection @time_off_entries

attributes :id,
           :entry_date,
           :time_off_type,
           :amount,
           :notes,
           :status,
           :created_at,
           :updated_at

if @include_user_info
  child :user do
    attributes :name_and_email
  end
end