module NewsPostsHelper
  def convert_time(timestamp)
    timestamp.in_time_zone(ActiveSupport::TimeZone.new("Eastern Time (US & Canada)"))
  end
  
  def convert_time_string(timestamp)
    convert_time(timestamp).strftime "%A, %B %d, %Y at %r"
  end
end
