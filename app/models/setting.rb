class Setting < ApplicationRecord
  SETTING_NAMES = ["contact_confirmation_message",
                   "featured_blog_post_ids",
                  "freshbooks_api_client_id",
                  "freshbooks_api_client_secret"].sort
end
