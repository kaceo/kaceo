class Dashing.Number extends Dashing.Widget
  @accessor 'current', Dashing.AnimatedValue

  @accessor 'difference', ->
    if @get('last')
      last = parseInt(@get('last'))
      current = parseInt(@get('current'))
      if last != 0
        diff = Math.abs(Math.round((current - last) / last * 100))
        "#{diff}%"
    else
      ""

  @accessor 'arrow', ->
    if @get('last')
      if parseInt(@get('current')) > parseInt(@get('last')) then 'fa fa-arrow-up' else 'fa fa-arrow-down'

  onData: (data) ->
    if data.status
      # clear existing "status-*" classes
      $(@get('node')).attr 'class', (i,c) ->
        c.replace /\bstatus-\S+/g, ''
      # add new class
      $(@get('node')).addClass "status-#{data.status}"


      <h1 class="title" data-bind="title"></h1>

<h2 class="value" data-bind="current | shortenedNumber | prepend prefix | append suffix"></h2>

<p class="change-rate">
  <i data-bind-class="arrow"></i><span data-bind="difference"></span>
</p>

<p class="more-info" data-bind="moreinfo"></p>

<p class="updated-at" data-bind="updatedAtMessage"></p>

// ----------------------------------------------------------------------------
// Sass declarations
// ----------------------------------------------------------------------------
$background-color:  #47bbb3;
$value-color:       #fff;

$title-color:       rgba(255, 255, 255, 0.7);
$moreinfo-color:    rgba(255, 255, 255, 0.7);

// ----------------------------------------------------------------------------
// Widget-number styles
// ----------------------------------------------------------------------------
.widget-number {

  background-color: $background-color;

  .title {
    color: $title-color;
  }

  .value {
    color: $value-color;
  }

  .change-rate {
    font-weight: 500;
    font-size: 30px;
    color: $value-color;
  }

  .more-info {
    color: $moreinfo-color;
  }

  .updated-at {
    color: rgba(0, 0, 0, 0.3);
  }

}
