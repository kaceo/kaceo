Dashing.Clock:

  ready: ->
    setInterval(@startTime, 500)

  startTime: =>
    today = new Date()
    h = today.getHours()
    m = today.getMinutes()
    s = today.getSeconds()
    m = @formatTime(m)
    s = @formatTime(s)
    @set('time', h + ":" + m + ":" + s)
    @set('date', today.toDateString())

  formatTime: (i) ->
    if i < 10 then "0" + i else i


<h1 data-bind="date"></h1>
<h2 data-bind="time"></h2>

$background-color:  #dc5945;
.widget-clock {
  background-color: $background-color;
}
