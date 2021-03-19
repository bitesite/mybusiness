class NewsPost < ApplicationRecord
  VALID_VISIBILITIES = ['public', 'internal']

  scope :reverse_chronological, -> { order("created_at desc") }
  scope :publicly_visible, -> { where(visibility: 'public') }
  scope :published, -> { where(hidden: false) }  
  mount_uploader :image, ImageUploader

  def send_push_notifications
    client = Exponent::Push::Client.new

    messages = []
    
    Device.find_each do |device|
      if device.push_token.present?
        messages << {
          to: device.push_token,
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
