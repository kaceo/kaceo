class Dashing.Iframe extends Dashing.Widget

  ready: ->
    # This is fired when the widget is done being rendered

  onData: (data) ->
    # Handle incoming data
    # You can access the html node of this widget with `@node`
    # Example: $(@node).fadeOut().fadeIn() will make the node flash each time data comes in.

    <iframe data-bind-src="url" frameborder=0></iframe>

    .widget-iframe {
      padding: 3px 0px 0px 0px !important;

      iframe {
        width: 100%;
        height: 100%;
      }
    }
