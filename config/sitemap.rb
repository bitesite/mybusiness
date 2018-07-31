# Set the host name for URL creation
SitemapGenerator::Sitemap.default_host = "https://www.bitesite.ca"

# The remote host where your sitemaps will be hosted
SitemapGenerator::Sitemap.sitemaps_host = "https://bitesite.s3.amazonaws.com/"

# The directory to write sitemaps to locally
SitemapGenerator::Sitemap.public_path = 'tmp/'

# The adapter to perform the upload of sitemap files.
SitemapGenerator::Sitemap.adapter = SitemapGenerator::WaveAdapter.new

SitemapGenerator::Sitemap.create do
  # Put links creation logic here.
  #
  # The root path '/' and sitemap index file are added automatically for you.
  # Links are added to the Sitemap in the order they are specified.
  #
  # Usage: add(path, options={})
  #        (default options are used if you don't specify)
  #
  # Defaults: :priority => 0.5, :changefreq => 'weekly',
  #           :lastmod => Time.now, :host => default_host
  #

  add portfolio_path

  add international_safety_path
  add mydoma_path
  add filefacets_path
  add splice_path
  add lspark_grad_path
  add lspark_path
  add solink_path
  add martello_path
  add ewa_path
  add christine_kelly_path
  add d3m_path
  add curtiss_wright_path
  add inspechomes_path

  # NEWS
  add news_posts_path
  
  # BLOG
  add blog_posts_path

  BlogPost.find_each do |blog_post|
    add blog_post_path(blog_post), :lastmod => blog_post.updated_at
  end
end
