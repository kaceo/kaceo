class Dashing.Meter extends Dashing.Widget

  @accessor 'value', Dashing.AnimatedValue

  constructor: ->
    super
    @observe 'value', (value) ->
      $(@node).find(".meter").val(value).trigger('change')

  ready: ->
    meter = $(@node).find(".meter")
    meter.attr("data-bgcolor", meter.css("background-color"))
    meter.attr("data-fgcolor", meter.css("color"))
    meter.knob()

    <h1 class="title" data-bind="title"></h1>

    <input class="meter" data-angleOffset=-125 data-angleArc=250 data-bind-data-height="height | default 200" data-bind-data-width="width | default 200" data-readOnly=true data-bind-value="value | shortenedNumber | prepend prefix | append suffix" data-bind-data-min="min" data-bind-data-max="max">

    <p class="more-info" data-bind="moreinfo"></p>

    <p class="updated-at" data-bind="updatedAtMessage"></p>


    // ----------------------------------------------------------------------------
// Sass declarations
// ----------------------------------------------------------------------------
$background-color:  #9c4274;

$title-color:       rgba(255, 255, 255, 0.7);
$moreinfo-color:    rgba(255, 255, 255, 0.3);

$meter-background:  darken($background-color, 15%);

// ----------------------------------------------------------------------------
// Widget-meter styles
// ----------------------------------------------------------------------------
.widget-meter {

  background-color: $background-color;

  input.meter {
    background-color: $meter-background;
    color: #fff;
  }

  .title {
    color: $title-color;
  }

  .more-info {
    color: $moreinfo-color;
  }

  .updated-at {
    color: rgba(0, 0, 0, 0.3);
  }

}
