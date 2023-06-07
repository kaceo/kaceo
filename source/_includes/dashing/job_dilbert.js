require 'net/http'
require 'chronic'

class DailyDilbert

  # Proxy URL - e.g. "http://127.1.1.1:8080/"
  PROXY = ""
  DATE_FORMAT = '%Y%m%d'
  STRIP_DIR = "assets/images/daily_dilbert"
  STRIP_PATTERN = STRIP_DIR+"/"+DATE_FORMAT+".gif"

  attr_accessor :currentStrip

  def get_strip_url
    proxyURI = URI.parse(PROXY)
    # old http = Net::HTTP.new('www.dilbert.com', nil, proxyURI.host, proxyURI.port)
    http = Net::HTTP.new('dilbert.com', nil, proxyURI.host, proxyURI.port)
    # old response = http.request(Net::HTTP::Get.new('/fast'))
    response = http.request(Net::HTTP::Get.new('/'))
    # old response.body.scan(/<img src=\"(\/dyn\/str\_strip\/[\/0-9]*\.strip\.print\.gif)\" \/>/)[0][0] if response and response.body
    response.body.scan(/<img[^>]*src=\"http:\/\/assets\.amuniversal\.com\/([a-zA-Z0-9]+)\"[^>]*\/?>/)[0][0] if response and response.body
  end

  def download_strip(url)
    proxyURI = URI.parse(PROXY)
    file_name = DateTime.now.strftime(STRIP_PATTERN)
    FileUtils.mkdir_p STRIP_DIR if not File.directory?(STRIP_DIR)
    # old Net::HTTP.start('www.dilbert.com', nil, proxyURI.host, proxyURI.port) { |http|
    Net::HTTP.start('assets.amuniversal.com', nil, proxyURI.host, proxyURI.port) { |http|
      response = http.get("/"+url)
      open(file_name, "wb") { |file| file.write(response.body) }
    }
    file_name
  end

  def make_web_friendly(file)
    # File.join doesn't work for unreal pathes - create by simple concatenation
    "/assets/" + File.basename(File.dirname(file)) + "/" + File.basename(file)
  end

  def get_strip_to_show(file)
    if file
      path = File.dirname(file)
      ext = File.extname(file)
      date = Date.strptime(File.basename(file, ext), DATE_FORMAT)
      begin
         f = path + '/' + (date - 1).strftime(DATE_FORMAT) + ext
         date -= 1
      end until File.exists?(f)
      return f
    end
    f = Dir[STRIP_DIR+"/*"].sort!.reverse!.first
    return download_strip(get_strip_url) if not f
    f
  end
end

# initialize and show first image
@DD = DailyDilbert.new()
@DD.currentStrip = @DD.get_strip_to_show(@DD.currentStrip)
send_event('daily_dilbert', image: @DD.make_web_friendly(@DD.currentStrip))

# strip download job
SCHEDULER.cron '0 7 * * *'  do |job|
  url = @DD.get_strip_url
  @DD.currentStrip = @DD.download_strip(url)
  if not File.exists?(@DD.currentStrip)
    warn "Dilbert strip download failed from url #{url} to file #{@DD.currentStrip}"
  else
    puts DateTime.now.to_s+" Working with #{@DD.currentStrip}, web friendly "+@DD.make_web_friendly(@DD.currentStrip)
    send_event('daily_dilbert', image: @DD.make_web_friendly(@DD.currentStrip))
  end
end

# strip loop job
SCHEDULER.every '30m', :first_at => Chronic.parse('today 11:00') do |job|
  @DD.currentStrip = @DD.get_strip_to_show(@DD.currentStrip)
  puts DateTime.now.to_s+" Working with #{@DD.currentStrip}, web friendly "+@DD.make_web_friendly(@DD.currentStrip)
  send_event('daily_dilbert', image: @DD.make_web_friendly(@DD.currentStrip))
  job.unschedule if Time.now.hour == 6
end
