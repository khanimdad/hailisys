#Settings
set :keep_releases, 5
#set :scm_verbose, true

#Defines the deployment target application’s name
set :application, 'hailisys'
set :domain_name, 'hailisys.com'

#SVN Server
set :svnserver, 'https://shikshapedia.sourcerepo.com/shikshapedia'
#Application resides at repository
set :applicationdir, '/hailisys'

#Subversion repository for the application
set :repository, "#{svnserver}/#{applicationdir}"

#Disable Capistrano to use sudo to do certain operations
set :use_sudo, false

#If you access your source repository with a different user name than you are logged into your local machine with
set :scm_username, 'moin' 		#svn username
set :scm_password, "moin@sd" 	#svn password

# Modify these values to execute tasks on a different server.
role :web, '75.98.33.15'										# [Nginx]Web Server
role :app, '75.98.33.15'											# [Passenger]Application Server
role :db, '75.98.33.15', :primary => true    # [Mysql]Database Server
role :solr, '75.98.33.15' 										# [ActsAsSolr]Solr Server
set :mysql_admin, 'root'

#If you log into your server with a different user name than you are logged into your local machine
set :user, 'root'
#Where to deploy on the server
set :deploy_to, "/var/www/#{application}"
set :rails_env, "production"

#create a deployment user on the server : sudo adduser deploy
#ssh_options[:keys] = %w(/Path/To/id_rsa)
ssh_options[:username] =  'deploy'
ssh_options[:port] = 3003
ssh_options[:paranoid] = false

namespace :deploy do
	
	desc "Start Application"
  task :start, :roles => :app do
    run "touch #{release_path}/tmp/restart.txt"
  end

	desc "Stop Application"
  task :stop, :roles => :app do
    # Do nothing.
  end

  desc "Restart Application"
  task :restart, :roles => :app do
    run "touch #{release_path}/tmp/restart.txt"
  end
  
end

namespace :hailisys do
	
	desc "Link up config files."
	task :symlink_configs, :roles => [:web, :app, :db] do
	  run "chmod 755 #{release_path}/public/dispatch.*"
	  run "ln -s #{shared_path}/database.yml #{release_path}/config/database.yml"
    run "chmod 777 -R #{release_path}"
	end
	
end
after "deploy:update_code", "hailisys:symlink_configs"
after "deploy", "deploy:cleanup"