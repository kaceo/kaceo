<li data-row="1" data-col="1" data-sizex="1" data-sizey="1">
  <div data-id="forecast" data-view="Forecast" data-title="Weather Forecast" ></div>
</li>

// forecast.io.
// Forecast API Key from developer.forecast.io


<h1 class="title" data-bind="title"></h1>

<h2 class="temp" data-bind="temperature | raw"></h2>
<p class="summary" data-bind="hour | raw"></p>

<p class="more-info">Powered by Forecast.io</p>
<p class="updated-at" data-bind="updatedAtMessage"></p>


class Dashing.Forecast extends Dashing.Widget

  ready: ->
    # This is fired when the widget is done being rendered

  onData: (data) ->
    # Handle incoming data
    # You can access the html node of this widget with `@node`
    # Example: $(@node).fadeOut().fadeIn() will make the node flash each time data comes in



    // ----------------------------------------------------------------------------
// Sass declarations
// ----------------------------------------------------------------------------
$background-color:  #EC3C6B;

$full-color:  rgba(255, 255, 255, 1);
$light-color: rgba(255, 255, 255, 0.7);

// ----------------------------------------------------------------------------
// Widget-forecast styles
// ----------------------------------------------------------------------------
.widget-forecast {

  background-color: $background-color;

  .title {
    color: $light-color;
  }

  .temp {
    color: $full-color;
  }

  .summary {
    color: $light-color;
  }

  .more-info {
      color: $light-color;
  }

  .updated-at {
    color: rgba(0, 0, 0, 0.3);
  }
}
