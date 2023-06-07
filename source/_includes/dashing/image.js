class Dashing.Image extends Dashing.Widget

  ready: ->
    # This is fired when the widget is done being rendered

  onData: (data) ->
    # Handle incoming data
    # You can access the html node of this widget with `@node`
    # Example: $(@node).fadeOut().fadeIn() will make the node flash each time data comes in.

    <img data-bind-src="image | prepend '/assets'" data-bind-width="width"/>

    // ----------------------------------------------------------------------------
// Sass declarations
// ----------------------------------------------------------------------------
$background-color:  #4b4b4b;

// ----------------------------------------------------------------------------
// Widget-image styles
// ----------------------------------------------------------------------------
.widget-image {

  background-color: $background-color;

}
