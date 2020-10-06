class Playbook::PagesController < ApplicationController
  layout 'playbook'

  def home
    @title = 'Playbook'
    @meta_description = "Welcome to the BiteSite playbook - an openly public, constantly evolving document of how we run our business and build custom software."
  end

  def customers
    @title = 'Customers'
    @meta_description = 'Read about the types of customers that BiteSite Inc. works for.'
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
    @meta_description = "A writeup on what the day-to-day work at BiteSite is like."
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
    @meta_description = "A detailed look at how we use Trello to manage Scrum Express."
  end

  def product_managers
    @title = 'Scrum Express Product Managers'
    @meta_description = "A detailed look at what Scrum Express Product Managers do."
  end
  
  def tools
    @title = 'Tools'
    @meta_description = "Here is a writeup on all the Tools we use at BiteSite to help with our Custom Software Development."
  end

  def technologies
    @title = 'Technologies'
    @meta_description = "Take a look at BiteSite's technology stack when it comes to Web Application Development and Mobile Development."
  end
  
  def coming_soon
    @title = 'Playbook Work in Progress'
    @meta_description = 'This part of the playbook that is being worked on.'
  end
  
  
end