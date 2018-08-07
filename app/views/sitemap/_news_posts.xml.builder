items.each do |item|
  xml.url do
    xml.loc news_post_url(item)
    xml.lastmod item.updated_at.strftime('%Y-%m-%dT%H:%M:%S%:z')
    xml.changefreq 'yearly'
    xml.priority '0.5'
  end
end