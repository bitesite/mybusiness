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
  
  def scrum_express
    @title = 'Scrum Express'
  end

  def how_we_use_trello
    @title = 'How we use Trello'
  end
  
  

  def coming_soon
  end
  
  
end