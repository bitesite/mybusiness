base_url = "https://www.bitesite.ca"

xml.instruct! :xml, :version=>"1.0"
xml.tag! 'urlset', 
         "xmlns:xsi" => "http://www.w3.org/2001/XMLSchema-instance", "xmlns" => "http://www.sitemaps.org/schemas/sitemap/0.9", "xmlns:image" => "http://www.google.com/schemas/sitemap-image/1.1", "xmlns:video" => "http://www.google.com/schemas/sitemap-video/1.1", "xmlns:news" => "http://www.google.com/schemas/sitemap-news/0.9", "xmlns:mobile" => "http://www.google.com/schemas/sitemap-mobile/1.0", "xmlns:pagemap" => "http://www.google.com/schemas/sitemap-pagemap/1.0", "xmlns:xhtml" => "http://www.w3.org/1999/xhtml", "xsi:schemaLocation" => "http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd" do

  xml.url do
    xml.loc root_url
    xml.changefreq "always"
    xml.priority '1.0'
  end

  xml.url do
    xml.loc services_url
    xml.changefreq "monthly"
    xml.priority '1.0'
  end

  xml.url do
    xml.loc about_url
    xml.changefreq "monthly"
    xml.priority '1.0'
  end

  xml.url do
    xml.loc frequently_asked_questions_url
    xml.changefreq "monthly"
    xml.priority '1.0'
  end

  xml.url do
    xml.loc contact_url
    xml.changefreq "monthly"
    xml.priority '1.0'
  end

  xml.url do
    xml.loc portfolio_url
    xml.changefreq "monthly"
    xml.priority '0.5'
  end

  xml.url do
    xml.loc international_safety_url
    xml.changefreq "yearly"
    xml.priority '0.5'
  end

  xml.url do
    xml.loc mydoma_url
    xml.changefreq "yearly"
    xml.priority '0.5'
  end

  xml.url do
    xml.loc filefacets_url
    xml.changefreq "yearly"
    xml.priority '0.5'
  end

  xml.url do
    xml.loc splice_url
    xml.changefreq "yearly"
    xml.priority '0.5'
  end

  xml.url do
    xml.loc lspark_grad_url
    xml.changefreq "yearly"
    xml.priority '0.5'
  end

  xml.url do
    xml.loc lspark_url
    xml.changefreq "yearly"
    xml.priority '0.5'
  end

  xml.url do
    xml.loc solink_url
    xml.changefreq "yearly"
    xml.priority '0.5'
  end

  xml.url do
    xml.loc martello_url
    xml.changefreq "yearly"
    xml.priority '0.5'
  end

  xml.url do
    xml.loc ewa_url
    xml.changefreq "yearly"
    xml.priority '0.5'
  end

  xml.url do
    xml.loc christine_kelly_url
    xml.changefreq "yearly"
    xml.priority '0.5'
  end

  xml.url do
    xml.loc d3m_url
    xml.changefreq "yearly"
    xml.priority '0.5'
  end
  
  xml.url do
    xml.loc curtiss_wright_url
    xml.changefreq "yearly"
    xml.priority '0.5'
  end

  # PLAYBOOK
  xml.url do
    xml.loc playbook_url
    xml.changefreq "always"
    xml.priority '1.0'
  end

  xml.url do
    xml.loc playbook_contracts_url
    xml.changefreq "always"
    xml.priority '0.5'
  end
  
  xml.url do
    xml.loc playbook_projects_url
    xml.changefreq "always"
    xml.priority '0.5'
  end
  
  xml.url do
    xml.loc playbook_how_we_work_url
    xml.changefreq "always"
    xml.priority '0.5'
  end

  xml.url do
    xml.loc playbook_scrum_express_url
    xml.changefreq "always"
    xml.priority '0.5'
  end
  
  xml.url do
    xml.loc playbook_scrum_express_roles_url
    xml.changefreq "always"
    xml.priority '0.5'
  end

  xml.url do
    xml.loc playbook_development_sprint_url
    xml.changefreq "always"
    xml.priority '0.5'
  end

  xml.url do
    xml.loc playbook_how_we_use_trello_url
    xml.changefreq "always"
    xml.priority '0.5'
  end
  
  
  xml.url do
    xml.loc playbook_product_managers_url
    xml.changefreq "always"
    xml.priority '0.5'
  end

  xml.url do
    xml.loc playbook_technologies_url
    xml.changefreq "always"
    xml.priority '0.5'
  end
  
  xml.url do
    xml.loc playbook_tools_url
    xml.changefreq "always"
    xml.priority '0.5'
  end

  # NEWS
  xml.url do
    xml.loc news_posts_url
  end
  
  # BLOG
  xml.url do
    xml.loc blog_posts_url
  end

  xml << (render 'sitemap/blog_posts', items: BlogPost.all)
  xml << (render 'sitemap/news_posts', items: NewsPost.all)
end