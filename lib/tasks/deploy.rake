namespace :deploy do

  task :staging do
    deploy('develop', 'heroku-staging', 'STAGING')
  end

  task :production do
    deploy('develop', 'heroku-staging', 'PRODUCTION')
  end

  def deploy(branch_name, remote_name, deployment_name)
    puts "Deploying #{branch_name} branch to heroku #{deployment_name} server..."

    sure = false

    if deployment_name == 'PRODUCTION'
      puts "You are deploying to #{deployment_name}. Are you sure? [y/n]"
      sure = STDIN.gets.strip == 'y'
    else
      sure = true
    end

    if sure

      puts "Note: This is based on a git remote named #{remote_name}"
      output = `git push #{remote_name} #{branch_name}:master`

      puts "====================="
      puts output
      puts "====================="

      if output.include?("Verifying deploy... done.")
        puts "...running database migrations..."
        `heroku run rake db:migrate -r #{remote_name}`
        puts "...database migrations complete..."
      else
        puts "There was an error in the push to #{remote_name}."
      end
      puts "...Complete."
    else
      puts "...deploy aborted."
    end
  end
end
