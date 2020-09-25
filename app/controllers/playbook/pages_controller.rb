class Playbook::PagesController < ApplicationController
  layout 'playbook'

  def home
    @title = 'Playbook'
  end

  def contracts
    @title = 'Contracts'
  end

  def projects
    @title = 'Project Types'
  end

  def how_we_work
    @title = 'How we work'
  end
  
  def scrum_express
    @title = 'Scrum Express'
  end

  def how_we_use_trello
    @title = 'How we use Trello'
  end

  def scrum_express_roles
    @title = 'Scrum Express Roles'
  end

  def product_managers
    @title = 'Scrum Express Product Managers'
  end
  

  def tools
    @title = 'Tools'
  end

  def technologies
    @title = 'Technologies'
  end
  
  
  
  
  

  def coming_soon
  end
  
  
end