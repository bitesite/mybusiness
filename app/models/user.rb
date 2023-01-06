class User < ApplicationRecord
  rolify
  # Include default devise modules. Others available are:
  # :token_authenticatable, :confirmable,
  # :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  # Setup accessible (or protected) attributes for your model
  has_many :blog_posts
  has_one :profile, dependent: :destroy
  has_many :time_off_entries
  has_many :devices
  has_many :direct_reports, class_name: "User", foreign_key: :supervisor_id
  belongs_to :supervisor, class_name: "User", foreign_key: :supervisor_id, optional: true

  scope :alphabetical, -> { order("email asc") }
  scope :staff, -> { joins(:roles).where("roles.name": :staff) }

  accepts_nested_attributes_for :profile, update_only: true

  delegate :full_name, :name_and_email, to: :profile, allow_nil: true

  def construct_expo_push_notification_messages(title, body)
    messages = []

    devices.where(signed_in: true).each do |device|
      messages << {
        to: device.push_token,
        sound: "default",
        title: title,
        body: body,
      }
    end

    messages
  end

  def is_staff?
    has_role? :staff
  end

  def is_admin?
    has_role? :admin
  end
end
