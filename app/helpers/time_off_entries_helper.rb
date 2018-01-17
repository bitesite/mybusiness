module TimeOffEntriesHelper
  def time_off_entry_status_tag(time_off_entry)
    content_tag(:span, time_off_entry.status, class: "time-off-entry-status-tag #{time_off_entry.status.downcase}")
  end
end