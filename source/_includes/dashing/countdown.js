<li data-row="1" data-col="1" data-sizex="1" data-sizey="1">
  <div data-view="Countdown" data-title="GOAL_DISPLAY_NAME" data-end="26-Apr-2013 18:00:00"></div>
</li>

class Dashing.Countdown extends Dashing.Widget

  ready: ->
    setInterval(@startCountdown, 500)

  startCountdown: =>
    current_timestamp = Math.round(new Date().getTime()/1000)
    end_timestamp = Math.round( Date.parse($(@node).find(".more-info").html())/1000 )
    seconds_until_end = end_timestamp - current_timestamp
    if seconds_until_end < 0
      @set('timeleft', "TIME UP!")
      for i in [0..100] by 1
        $(@node).fadeTo('fast', 0).fadeTo('fast', 1.0)
    else
      d = Math.floor(seconds_until_end/86400)
      h = Math.floor((seconds_until_end-(d*86400))/3600)
      m = Math.floor((seconds_until_end-(d*86400)-(h*3600))/60)
      s = seconds_until_end-(d*86400)-(h*3600)-(m*60)
      if d >0
        dayname = 'day'
        if d > 1
          dayname = 'days'
        @set('timeleft', d + " "+dayname+" " + @formatTime(h) + ":" + @formatTime(m) + ":" + @formatTime(s))
      else
        @set('timeleft', @formatTime(h) + ":" + @formatTime(m) + ":" + @formatTime(s))


  formatTime: (i) ->
    if i < 10 then "0" + i else i

    <h2 data-bind="title"></h2>

<h1 data-bind="timeleft" class="countdown-time"></h1>

<p class="before-more-info">ends on:</p>
<p class="more-info" data-bind="end"></p>
countdown.scss


// ----------------------------------------------------------------------------
// Sass declarations
// ----------------------------------------------------------------------------
$background-color:  #dc5945;

// ----------------------------------------------------------------------------
// Widget-clock styles
// ----------------------------------------------------------------------------
.widget-countdown {

  background-color: $background-color;

  h2 { font-size: 2em;}

  h1 { font-size: 2em;}

  .countdown-time {
    margin-top: 10px;
    color: gold;
  }

  .before-more-info {
    font-size: 15px;
    position: absolute;
    bottom: 52px;
    left: 0;
    right: 0;
  }
}

