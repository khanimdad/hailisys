# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_hailisys_session',
  :secret      => 'be9a7b3f295899a41f5278ce39a29c470a01fa59202e75265caacf494bbc11e22e3eadf07c4da666670d2d0c8245aa151dc50d0c8eefd8e3d976b34eddf60137'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
