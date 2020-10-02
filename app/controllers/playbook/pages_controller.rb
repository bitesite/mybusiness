class Playbook::PagesController < ApplicationController
  layout 'playbook'

  def home
    @title = 'Playbook'
    @meta_description = "Welcome to the BiteSite playbook - an openly public, constantly evolving document of how we run our business and build custom software."
  end

  def contracts
    @title = 'Contracts'
    @meta_description = "Read about how BiteSite Inc. structures its custom software contracts."
  end

  def projects
    @title = 'Project Types'
    @meta_description = "A description of the most common categories of custom software projects BiteSite takes on."
  end

  def how_we_work
    @title = 'How we work'
  end
  
  def scrum_express
    @title = 'Scrum Express'
    @meta_description = "A detailed breakdown of a software development process that evovled from classic Scrum."
  end

  def scrum_express_roles
    @title = 'Scrum Express Roles'
    @meta_description = "All the roles involved in Scrum Express."
  end

  def development_sprint
    @title = 'Scrum Express Development Sprint'
    @meta_description = "Scrum Express centers around fixed chunks of development called Sprints. Read a detailed breakdown here."
  end
  
  def how_we_use_trello
    @title = 'How we use Trello'
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