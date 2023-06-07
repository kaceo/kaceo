
require 'httparty'

url = 'https://api.exchangerate.host/latest?base=USD'
SCHEDULER.every '30s' do
    response = HTTParty.get(url)
    parsed = JSON.parse(response.body)
    aed = parsed['rates']['AED']
    gbp = parsed['rates']['GBP']
    aud = parsed['rates']['AUD']
    eur = parsed['rates']['EUR']

    send_event("aed", { value: aed, current: aed, last: aed })
    send_event("gbp", { value: gbp, current: gbp, last: gbp })
    send_event("aud", { value: aud, current: aud, last: aud })
    send_event("eur", { value: eur, current: eur, last: eur })
end


<li data-row="2" data-col="2" data-sizex="1" data-sizey="1">
  <div data-id="gbp" data-view="Number" data-title="GBP"></div>

