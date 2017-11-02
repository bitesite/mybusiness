namespace :deploy do

  task :staging do
    deploy('develop', 'heroku-staging', 'STAGING')
  end

  task :production do
    deploy('develop', 'heroku', 'PRODUCTION')
  end

  def deploy(branch_name, remote_name, deployment_name)
    puts "Deploying #{branch_name} branch to heroku #{deployment_name} server..."
    puts "Note: This is based on a git remote named #{remote_name}"

    sure = false

    if deployment_name == 'PRODUCTION'
      puts "You are deploying to #{deployment_name}. Are you sure? [y/n]"
      sure = STDIN.gets.strip == 'y'
    else
      sure = true
    end

    if sure
      
      output = `git push #{remote_name} #{branch_name}:master`

      # TODO: Verify somehow that the heroku deploy succeeded
      #       Can't seem to analyze the output of the git push
      # puts "====================="
      # puts output
      # puts "====================="
      # if output.include?("Verifying deploy... done.")


      puts "Would you like to run migrations? [y/n]"
      if STDIN.gets.strip == 'y'
        puts "...running database migrations..."
        `heroku run rake db:migrate -r #{remote_name}`
        puts "...database migrations complete..."
      else
        puts "...database migrations not run..."
      end
      puts "...Complete."
    else
      puts "...deploy aborted."
    end
  end
end
