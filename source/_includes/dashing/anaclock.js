<li data-row="1" data-col="1" data-sizex="1" data-sizey="1">
    <div data-view="AnalogClock"></div>
</li>

class Dashing.AnalogClock extends Dashing.Widget

  ready: ->
    setInterval (->
      seconds = (new Date).getSeconds()
      sdegree = seconds * 6
      srotate = 'rotate(' + sdegree + 'deg)'
      $('#sec').css
        '-moz-transform': srotate
        '-webkit-transform': srotate
      return
    ), 1000

    setInterval (->
      hours = (new Date).getHours()
      mins = (new Date).getMinutes()
      hdegree = hours * 30 + mins / 2
      hrotate = 'rotate(' + hdegree + 'deg)'
      $('#hour').css
        '-moz-transform': hrotate
        '-webkit-transform': hrotate
      return
    ), 1000

    setInterval (->
      mins = (new Date).getMinutes()
      mdegree = mins * 6
      mrotate = 'rotate(' + mdegree + 'deg)'
      $('#min').css
        '-moz-transform': mrotate
        '-webkit-transform': mrotate
      return
    ), 1000


    <ul id="clock">
  <li id="sec"></li>
  <li id="hour"></li>
  <li id="min"></li>
</ul>

// ----------------------------------------------------------------------------
// Sass declarations
// ----------------------------------------------------------------------------
$background-color:  #567783;

// Change the size of clock here. By default makes a 300x300 pixels clock.
// Although, for example, if you have a data sizex/sizey = "2" for your widget
// then you might want to change this to 600px. Everything should scale
// acoordingly.
$clock-width:       276px;
or $clock-width:       600px;

// Setting the height to the same as the width ensures we have a square shape.
// In most (every?) cases you will want this!
$clock-height:      $clock-width;

// ----------------------------------------------------------------------------
// Widget-analog-clock styles
// ----------------------------------------------------------------------------
.widget-analog-clock {

  background-color: $background-color;

  * {
    margin: 0;
    padding: 0;
  }

  #clock {
    position: relative;
    width: $clock-width;
    height: $clock-height;
    background: url(analog_clock/clockface.png);
    background-size: 100% 100%;
    list-style: none;
  }

  #sec, #min, #hour {
    position: absolute;
    width: #{($clock-width / 20)};
    height: $clock-height;
    top: 0px;
    left: #{(($clock-width / 2) - ($clock-width / 40))};
  }

  #sec {
    background: url(analog_clock/sechand.png);
    background-size: 100% 100%;
    z-index: 3;
  }

  #min {
    background: url(analog_clock/minhand.png);
    background-size: 100% 100%;
    z-index: 2;
  }

  #hour {
    background: url(analog_clock/hourhand.png);
    background-size: 100% 100%;
    z-index: 1;
  }

}
