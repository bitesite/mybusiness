module ApplicationHelper

  def cms_value(setting_name)
    value = Setting.find_by_name(setting_name).try(:value)
  end
  
end
