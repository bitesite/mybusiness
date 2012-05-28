class PagesController < ApplicationController
  def home
    @title = "bitesite.ca | websites made easy"
  end
  
  def packages
    @title = "bitesite.ca | packages"
  end

  def addons
    @title = "bitesite.ca | addons"
  end
  
  def portfolio
    @title = "bitesite.ca | portfolio"
  end

  def contact
  end
end
