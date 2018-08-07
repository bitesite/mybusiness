items.each do |item|
  xml.url do
    xml.loc blog_post_url(item)
    xml.lastmod item.updated_at.strftime('%Y-%m-%dT%H:%M:%S%z')
    xml.changefreq 'yearly'
    xml.priority '0.8'
  end
end