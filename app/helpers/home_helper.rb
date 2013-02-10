module HomeHelper
	
	def content_image
    {
    :welcome => {:title => 'Welcome', :filename=> '/images/DMS_images/DMS_3d.jpg', :alt => 'No Image'},
    :about_us => {:title => 'About Us', :filename=> '/images/DMS_images/DSC03244.jpg', :alt => 'No Image'},
    :mission => {:title => 'Mission', :filename=> '/images/DMS_images/DSC_8909.jpg', :alt => 'No Image'},
    :work_culture => {:title => 'Work Culture', :filename=> '/images/DMS_images/DSC_8937.jpg', :alt => 'No Image'},
    :services => {:title => 'Services', :filename=> '/images/DMS_images/DSC_6180.jpg', :alt => 'No Image'},
    :process => {:title => 'Process', :filename=> '/images/DMS_images/DSC_1592.jpg', :alt => 'No Image'},
    :interaction_sessions => {:title => 'Interaction Sessions', :filename=> '/images/DMS_images/DSC_8065.jpg', :alt => 'No Image'},
    :explorations => {:title => 'Explorations', :filename=> '/images/DMS_images/DSC_8915.jpg', :alt => 'No Image'},
    :project_planning => {:title => 'Project Planning', :filename=> '/images/DMS_images/DSC_8932.jpg', :alt => 'No Image'},
    :site_exploration => {:title => 'Site Exploration', :filename=> '/images/DMS_images/DSC_8801.jpg', :alt => 'No Image'},
    :contact_us => {:title => 'Contact Us', :filename=> '/images/DMS_images/contact_us.png', :alt => 'No Image'}
    }
  end
  
  def client_thumbnails
    [ 
    {:title => "Not Available", :filename => "/images/DMS_clients/__.jpg"},
    {:title => "Not Available", :filename => "/images/DMS_clients/AMAR_UJALA.jpg"},
    {:title => "Not Available", :filename => "/images/DMS_clients/ANALEC.jpg"},
    {:title => "Not Available", :filename => "/images/DMS_clients/CITRIX.jpg"},
    {:title => "Not Available", :filename => "/images/DMS_clients/DGH.jpg"},
    {:title => "Not Available", :filename => "/images/DMS_clients/DPS_GWALIOR.jpg"},
    {:title => "Not Available", :filename => "/images/DMS_clients/ENGINEERS_INDIA.jpg"},
    {:title => "Not Available", :filename => "/images/DMS_clients/ESSILOR.jpg"},
    {:title => "Not Available", :filename => "/images/DMS_clients/GIVAUDAN.jpg"},
    {:title => "Not Available", :filename => "/images/DMS_clients/HCL.jpg"},
    {:title => "Not Available", :filename => "/images/DMS_clients/HERO_HONDA.jpg"},
    {:title => "Not Available", :filename => "/images/DMS_clients/ICICI_LOMBARD.jpg"},
    {:title => "Not Available", :filename => "/images/DMS_clients/JKT.jpg"},
    {:title => "Not Available", :filename => "/images/DMS_clients/NEC.jpg"},
    {:title => "Not Available", :filename => "/images/DMS_clients/NIIT.jpg"},
    {:title => "Not Available", :filename => "/images/DMS_clients/PEARSON.jpg"},
    {:title => "Not Available", :filename => "/images/DMS_clients/POWERGRID.jpg"},
    {:title => "Not Available", :filename => "/images/DMS_clients/SAKSOFT.jpg"},
    {:title => "Not Available", :filename => "/images/DMS_clients/SANDVIK.jpg"},
    {:title => "Not Available", :filename => "/images/DMS_clients/SSW.jpg"},
    {:title => "Not Available", :filename => "/images/DMS_clients/ST.jpg"},
    {:title => "Not Available", :filename => "/images/DMS_clients/UTI.jpg"},
    {:title => "Not Available", :filename => "/images/DMS_clients/WUNDERMAN.jpg"}
    ]
  end
  
  def clients_thumbs_size
    client_thumbnails.size
  end
  
  def get_client_thumbnails(page_no)
    min_index = (page_no - 1) * 12
    max_index = (page_no * 12) - 1
    client_thumbnails[min_index..max_index]
  end
  
  def page_size
    (clients_thumbs_size%12)==0 ? (clients_thumbs_size/12) : (clients_thumbs_size/12)+1
  end
  
end
