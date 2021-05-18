class Setting < ApplicationRecord
  SETTING_NAMES = ["contact_confirmation_message",
                   "featured_blog_post_ids",
                  "freshbooks_api_client_id",
                  "freshbooks_api_client_secret",
                  "products_content"].sort
  
  def self.value_for(name, default_value = nil)
    setting = Setting.find_by(name: name)

    if setting
      setting.value
    else
      nil || default_value
    end
  end
  
end
