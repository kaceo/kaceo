<li data-row="1" data-col="1" data-sizex="1" data-sizey="1">
  <div data-view="DailyXKCD" data-id="xkcd-of-the-day"></div>
</li>

class Dashing.DailyXKCD extends Dashing.Widget

 ready: ->
   # This is fired when the widget is done being rendered

 onData: (data) ->
   # Handle incoming data
   # You can access the html node of this widget with `@node`
   # Example: $(@node).fadeOut().fadeIn() will make the node flash each time data comes in.

   <h1 class="header" data-bind="'xkcd #' | append num | append ': ' | append title"></h1>

<img class="xkcd-image" data-bind-src="img"/>
<p class="date" data-bind="'Published: ' | append datestr"></p>
<p class="caption" data-bind="alt"></p>

<p class="updated-at" data-bind="updatedAtMessage"></p>


// ----------------------------------------------------------------------------
// Sass declarations
// ----------------------------------------------------------------------------
$background-color:  white;

$header-color:     rgba(0, 0, 0, 0.7);

$title-color:      rgba(0, 0, 0, 0.7);

$caption-color:    rgba(0, 0, 0, 0.7);

$published-color:  rgba(0, 0, 0, 0.7);

$updated-at-color: rgba(0, 0, 0, 0.3);

// ----------------------------------------------------------------------------
// Widget-daily-xkcd styles
// ----------------------------------------------------------------------------
.widget-daily-xkcd {
  background-color: $background-color;
  vertical-align: top !important;
  padding: 8px 12px !important;

  .wrapper {
    max-height: 100%;
  }

  .header {
    color: $header-color;

    font-size: large;
    font-variant: small-caps;
  }

  .xkcd-image {
    max-height: 200px;
  }

  .date {
    color: $published-color;
    margin-bottom: 0.5vh;
    font-size: small;
    text-align: left;
  }

  .caption {
    color: $caption-color;
    font-size: small;
    text-align: justify;
    margin-bottom: 0.5vh;
  }

  .updated-at {
    color: $updated-at-color;
    position: relative;
    padding: 0;
    margin: 0;
    bottom:0;
  }
}
