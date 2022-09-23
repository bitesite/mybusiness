attributes :id, :title, :body, :featured_video, :published, :featured_image, :user_id, :slug, :meta_description, :tag_list

child :blog_post_images do 
  attributes :id
end

node :author do |blog_post|
  blog_post.author
end
