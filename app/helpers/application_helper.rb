# Methods added to this helper will be available to all templates in the application.
module ApplicationHelper
	
	#include CommonHelper
  
  def facebook_page_link
    'http://www.facebook.com/pages/shikshadarpan/354916004837'
  end
  
  def twitter_page_link
    'http://twitter.com/shikshadarpan'
  end
  
  def default_search_text
    'Search for colleges by name, location, courses etc'
  end
  
  def space
    '&nbsp;'
  end
  
  def google_map_api_key
    'ABQIAAAACWBWeBY1kjhSVHihL5_weRSrjmcqWJCOz5PbCf99M2I2Pl_GGBRsqlQENXoI0b8GwLG387ePAvAsaA'
  end
  
  def google_analytics_js
    %Q(
      <script type="text/javascript">
        var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
        document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
      </script>
      <script type="text/javascript">
        _uacct = "#{GOOGLE_ANALYTIC_ID}";
        urchinTracker();
      </script>
    )
  end
    
  def recommended_browsers
    {
      'Firefox 3.0+' => 'http://www.mozilla.com/en-US/firefox/',
      'Chrome 2.0+' => 'http://www.google.com/chrome',
      'Safari 4.0+' => 'http://www.apple.com/safari/download/',
      'Explorer 9.0+' => 'http://www.microsoft.com/windows/internet-explorer/default.aspx'
    }.freeze
  end
    
  def render_notifications
    message = ''
    message << "<div class='notification'>" + flash[:notice] + "</div>" if flash[:notice] && !flash[:notice].empty?
    message << "<div class='error'>" + flash[:error] + "</div>" if flash[:error] && !flash[:error].empty?
    
    if message != ''
      msg =<<-EOS
        <div id='flash' class='flash size-11'>#{message}</div>
      EOS
    else
      msg =<<-EOS
        <div id='flash' class='flash size-11' style="display:none;"></div>
      EOS
    end
    flash[:notice] = flash[:error] = nil
    return msg
  end
  
  def hf(content)
    content.gsub!(/<br \/>|<br\/>|<br>/, '\n')
    content = h content
    content.gsub!(/\n|\\n/, '<br />')
    content.split('<br />').delete_if{|el| el.empty? | el.strip.empty? }.join('<br />')
  end
  
  def remove_new_lines(content)
    content.gsub(/\n|\\n|<br>|<br \/>|<br\/>/, '')
  end
  
  def add_new_lines(content)
    content.gsub!(/<br \/>|<br\/>|<br>/, '\n')
    #content = white_list content
    content.gsub!(/\n|\\n/, '<br />')
    content.split('<br />').delete_if{|el| el.empty? | el.strip.empty? }.join('<br />')
  end

end
