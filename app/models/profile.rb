class Profile < ApplicationRecord
  belongs_to :user
  validates :employee_number, uniqueness: true, allow_nil: true
  mount_uploader :avatar, AvatarUploader

  def full_name
    "#{first_name || "[first name]"} #{last_name || "[last name]"}"
  end

  def name_and_email
    "#{first_name || "[first name]"} #{last_name || "[last name]"} (#{user.try(:email)})"
  end
  

  def suitable_for_blog?
    avatar.present? && 
      first_name.present? && 
      last_name.present? &&
      job_title.present?
  end
end
