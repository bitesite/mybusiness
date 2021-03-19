module TimeOffEntriesHelpers
  def notify_supervisor_of_new_time_off_entries
    client = Exponent::Push::Client.new

    supervisor = current_user.supervisor

    if supervisor
      messages = supervisor.construct_expo_push_notification_messages(
        'Time off to approve!',
        "#{current_user.full_name} has submitted some time off"
      )

      if messages.present?
        handler = client.send_messages(messages)
      end
    end
  end

  def notify_staff_of_approved_time_off_entries
    if (@time_off_entry.saved_changes[:status] && @time_off_entry.saved_changes[:status][0] != 'Approved' && @time_off_entry.saved_changes[:status][1] == 'Approved')
      client = Exponent::Push::Client.new

      user = @time_off_entry.user

      messages = user.construct_expo_push_notification_messages(
        'Time off to approved!',
        "#{@time_off_entry.entry_date} has been approved by your supervisor"
      )
      
      if messages.present?
        handler = client.send_messages(messages)
      end
    end
  end
end