class Device < ApplicationRecord
  belongs_to :user

  def send_web_push_notification(title='Title', body='Body')

    message = {
      title: title,
      body: body,
    }

    Webpush.payload_send(
      endpoint: self.web_push_endpoint,
      message: JSON.generate(message),
      p256dh: self.web_push_p256dh,
      auth: self.web_push_auth,
      vapid: {
        subject: "mailto:info@bitesite.ca",
        public_key: ENV['VAPID_PUBLIC_KEY'],
        private_key: ENV['VAPID_PRIVATE_KEY']
      }
    )
  end
  
end
