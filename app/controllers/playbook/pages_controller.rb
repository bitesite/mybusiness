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
  
  def coming_soon
  end
  
  
end