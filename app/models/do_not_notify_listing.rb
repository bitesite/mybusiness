class DoNotNotifyListing < ApplicationRecord
  before_validation :upcase_and_strip_email
  validates :email, uniqueness: true

  def self.should_not_notify?(email, blog_post)
    do_not_notify_listing = DoNotNotifyListing.find_by(email: email.upcase.strip)

    do_not_notify_listing.present? &&
      (do_not_notify_listing.blog_post_ids == 'all' ||
       do_not_notify_listing.blog_post_ids_array.include?(blog_post.id))
  end

  def blog_post_ids_array
    blog_post_ids.split(",").map{|blog_post_id| blog_post_id.to_i}
  end

  private
    def upcase_and_strip_email
      self.email = self.email.upcase.strip
    end
end
