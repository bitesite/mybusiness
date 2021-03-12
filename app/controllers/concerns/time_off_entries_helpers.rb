module TimeOffEntriesHelpers
  def notify_supervisor_of_new_time_off_entries
    client = Exponent::Push::Client.new

    messages = []
    supervisor = current_user.supervisor

    if supervisor && supervisor.profile.expo_push_token.present?
      messages << {
        to: supervisor.profile.expo_push_token,
        sound: 'default',
        title: 'Time off to approve!',
        body: "#{current_user.full_name} has submitted some time off"
      }
    end

    handler = client.send_messages(messages)
  end

  def notify_staff_of_approved_time_off_entries
    if (@time_off_entry.saved_changes[:status][0] != 'Approved' && @time_off_entry.saved_changes[:status][1] == 'Approved')
      client = Exponent::Push::Client.new
      
      messages = []
      user = @time_off_entry.user

      if user && user.profile.expo_push_token.present?
        messages << {
          to: user.profile.expo_push_token,
          sound: 'default',
          title: 'Time off to approved!',
          body: "#{@time_off_entry.entry_date} has been approved by your supervisor"
        }
      end

      handler = client.send_messages(messages)
    end
  end
end