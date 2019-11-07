class Setting < ApplicationRecord
  SETTING_NAMES = ["contact_confirmation_message",
                   "featured_blog_post_ids"].sort
end
