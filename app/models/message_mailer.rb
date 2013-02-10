class MessageMailer < ActiveRecord::Base
	
	module RFC822
    EmailAddress = begin
      qtext = '[^\\x0d\\x22\\x5c\\x80-\\xff]'
      dtext = '[^\\x0d\\x5b-\\x5d\\x80-\\xff]'
      atom = '[^\\x00-\\x20\\x22\\x28\\x29\\x2c\\x2e\\x3a-' +
        '\\x3c\\x3e\\x40\\x5b-\\x5d\\x7f-\\xff]+'
      quoted_pair = '\\x5c[\\x00-\\x7f]'
      domain_literal = "\\x5b(?:#{dtext}|#{quoted_pair})*\\x5d"
      quoted_string = "\\x22(?:#{qtext}|#{quoted_pair})*\\x22"
      domain_ref = atom
      sub_domain = "(?:#{domain_ref}|#{domain_literal})"
      word = "(?:#{atom}|#{quoted_string})"
      domain = "#{sub_domain}(?:\\x2e#{sub_domain})*"
      local_part = "#{word}(?:\\x2e#{word})*"
      addr_spec = "#{local_part}\\x40#{domain}"
      pattern = /\A#{addr_spec}\z/
    end
  end

  #Each method corresponding to an e-mail template. To create the body of the e-mail,
  #these methods in turn use views (in just the same way that controller actions use
  #views to create HTML and XML)

  def feedback(sender_name, sender_id, occupation, message)
    @subject = "Feedback/Query from #{sender_name}"
    @recipients = "Admin <dmsdesigns.admin@gmail.com>"
    @bcc = "moinhaidar@gmail.com"
    @headers = {}
    @content_type = "text/html"
    @from = "DMS Designs <system@dmsdesigns.co.in>"
    content_type  "text/html"
    @body = {:title => "You got following feedback",
         :message => "Name: #{sender_name} <br/>Email: #{sender_id} <br/>Occupation: #{occupation} <br/>Message/Query: #{message}"}
  end
  
  def email_this_page(sender, receiver, message, sent_at = Time.now)
    sender_name = is_email?(sender) ? "Sender of this message" : sender
    @subject = (is_email?(sender) ? "A message from a visitor at our website" : "A message from #{sender}")
    @recipients = receiver if is_email?(receiver)
    @bcc = "moinhaidar@gmail.com"
    @from = "DMS Designs <system@dmsdesigns.co.in>"
    @headers = {}
    @content_type = "text/html"
    @body = {:title => "Hi,", :message => message, :sender_name => sender_name}
  end
  
  protected
  
  def is_email?(address)
    address.to_s.match(RFC822::EmailAddress)
  end
  
end
