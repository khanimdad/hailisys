class HomeController < ApplicationController
	
  caches_page :welcome, :index, :contact_us, :who_we_are, :what_we_do
  
  def welcome
  end
  
  def index
  end
  
  def contact_us
  end
  
  def who_we_are
  end
  
  def what_we_do
  end  
  
end
