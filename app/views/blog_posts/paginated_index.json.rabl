child @blog_posts do
  extends 'blog_posts/base'
end

node (:pages) do
  @blog_posts.total_pages
end

node (:page) do
  @blog_posts.current_page
end

node (:filter_data) do
  {}
end

node (:total) do 
  @blog_posts.count
end 