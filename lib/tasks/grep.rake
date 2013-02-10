desc "Searches for a keyword in scope." 
namespace :search do
  
  desc "Searches for a keyword in app/controllers. rake search:cont EXPR=hello"
  task :ctrls do
    puts clean_output(grep(ENV['EXPR'], 'app/controllers', ENV['VERBOSE'].nil?))
  end
  
  desc "Searches for a keyword in app/helpers. rake search:helper EXPR=hello"
  task :helpers do
    puts clean_output(grep(ENV['EXPR'], 'app/helpers', ENV['VERBOSE'].nil?))
  end
  
  desc "Searches for a keyword in app/models. rake search:model EXPR=hello"
  task :models do
    puts clean_output(grep(ENV['EXPR'], 'app/models', ENV['VERBOSE'].nil?))
  end
  
  desc "Searches for a keyword in app/processors. rake search:proc EXPR=hello"
  task :procs do
    puts clean_output(grep(ENV['EXPR'], 'app/processors', ENV['VERBOSE'].nil?))
  end
  
	desc "Searches for a keyword in app/views. rake search:views EXPR=hello" 
  task :views do
    puts clean_output(grep(ENV['EXPR'], 'app/views', ENV['VERBOSE'].nil?))
  end
  
  desc "Searches for a keyword in app. rake search:app EXPR=hello"
  task :app do
    puts clean_output(grep(ENV['EXPR'], 'app', ENV['VERBOSE'].nil?))
  end
  
  desc "Searches for a keyword in db/migrations. rake search:migr EXPR=hello"
  task :migr do
    puts clean_output(grep(ENV['EXPR'], 'db/migrate', ENV['VERBOSE'].nil?))
  end
  
  desc "Searches for a keyword in lib. rake search:lib EXPR=hello"
  task :lib do
    puts clean_output(grep(ENV['EXPR'], 'lib', ENV['VERBOSE'].nil?))
  end
  
  desc "Searches for a keyword in sass. rake search:sass EXPR=hello"
  task :sass do
    puts clean_output(grep(ENV['EXPR'], 'public/stylesheets/sass', ENV['VERBOSE'].nil?))
  end
  
  desc "Searches for a keyword in css. rake search:css EXPR=hello"
  task :css do
    puts clean_output(grep(ENV['EXPR'], 'public/stylesheets', ENV['VERBOSE'].nil?, ' --exclude=*.sass'))
  end
  
  desc "Searches for a keyword in javascripts. rake search:js EXPR=hello"
  task :js do
    puts clean_output(grep(ENV['EXPR'], 'public/javascripts', ENV['VERBOSE'].nil?, ' --exclude=*bundle.js --exclude=*rmin.js'))
  end
  
  desc "Searches for a keyword in plugins. rake search:plugins EXPR=hello"
  task :plugins do
    puts clean_output(grep(ENV['EXPR'], 'vendor/plugins', ENV['VERBOSE'].nil?))
  end
  
  desc "Searches for a keyword in vendor. rake search:vendors EXPR=hello"
  task :vendors do
    puts clean_output(grep(ENV['EXPR'], 'vendor', ENV['VERBOSE'].nil?))
  end
  
  desc "Searches for a keyword in config. rake search:conf EXPR=hello"
  task :conf do
    puts clean_output(grep(ENV['EXPR'], 'config', ENV['VERBOSE'].nil?))
  end
  
  def clean_output(out)
    out.gsub(/^[^\:]+$/m, '').gsub(/\n+/, "\n")
  end
  
  def grep(expr, directory, hide=true, excludes=nil)
    return 'Usage: rake search:scope EXPR=expression' if expr.nil? || expr.empty?
    cmd = 'grep -n -B 0 -A 0 -C 0 --exclude=*.svn* --exclude=*.tmp --exclude=*entries --exclude=*wcprops'
    cmd << (excludes ? excludes : '')
    cmd << (hide ? ' -o' : '')
    cmd << " -r '#{expr}' #{directory}"
    `#{cmd}`
  end
  
end