module ApplicationHelper

  def cms_value(setting_name)
    value = Setting.find_by(name: setting_name).try(:value)
  end

  def markdown(text, filter_html=true)
    md = Redcarpet::Markdown.new(Redcarpet::Render::HTML, autolink: true, 
                                                          space_after_headers: false, 
                                                          hard_wrap: true, 
                                                          tables: true,
                                                          fenced_code_blocks: true,
                                                          filter_html: filter_html)
    md.render(text).html_safe
  end  
end
