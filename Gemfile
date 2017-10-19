source 'https://rubygems.org'

gem 'rails', '3.2.22'
gem 'pg'
gem 'newrelic_rpm'
gem 'rmagick', require: false
gem 'redcarpet'
gem 'carrierwave'
gem 'fog'
gem 'mailchimp'
gem "recaptcha", :require => "recaptcha/rails"
gem 'sucker_punch'
gem 'honeypot-captcha'
gem 'dotenv-rails'
gem 'font-awesome-sass', '~> 4.4.0'

# Authentication
gem 'devise', '3.5.10'

# Authorization
gem 'cancancan'
gem 'rolify'

group :development do
  gem 'letter_opener' 
end

group :development, :test do
  gem 'rspec-rails', '~> 3.6'
  gem 'factory_girl_rails'
  gem 'faker', '1.7.3'
  gem 'pry'
  gem 'test-unit', '~> 3.0'
end

group :test do
  gem 'database_cleaner'
end

group :production do
	gem 'rails_12factor'
end

group :assets do
  gem 'sass-rails',   '~> 3.2.3'
  gem 'coffee-rails', '~> 3.2.1'
  gem 'uglifier', '>= 1.0.3'
end

gem 'jquery-rails'
gem 'thin'

ruby '2.2.4'
#ruby-gemset=mybusiness
