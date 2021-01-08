class NewsPost < ApplicationRecord
  VALID_VISIBILITIES = ['public', 'internal']

  scope :reverse_chronological, -> { order("created_at desc") }
  scope :published, -> { where(hidden: false) }  
  mount_uploader :image, ImageUploader

  def send_push_notifications
    client = Exponent::Push::Client.new

    messages = []
    
    User.find_each do |user|
      if user.profile.expo_push_token.present?
        messages << {
          to: user.profile.expo_push_token,
          sound: 'default',
          title: self.title,
          body: self.body.truncate(50)
        }
      end
    end

    handler = client.send_messages(messages)
  end

  def published_before?
    published_at.present?
  end
end
