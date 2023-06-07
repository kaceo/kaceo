<li data-row="1" data-col="1" data-sizex="3" data-sizey="1">
  <div data-id="daily_dilbert" data-view="Image" data-width="100%"></div>
</li>

/assets/images/daily_dilbert.


class Dashing.Image extends Dashing.Widget

  ready: ->
    # This is fired when the widget is done being rendered
    @handleSize()

  onData: (data) ->
    # Handle incoming data
    # You can access the html node of this widget with `@node`
    # Example: $(@node).fadeOut().fadeIn() will make the node flash each time data comes in.
    @handleSize()


  handleSize: ->
    if !$(@node).data('width') && !$(@node).data('height') && @get('image_width') && @get('image_height')
      $(@node).fadeOut()
      img = $(@node).find('img')
      paRatio = img.parent().width() / img.parent().height()
      if @get('image_width') >= @get('image_height')
        ratio = @get('image_width') / @get('image_height')
        img.width(img.parent().width() * ratio/paRatio)
      else
        ratio = @get('image_height') / @get('image_width')
        img.height(img.parent().height() * ratio/paRatio)
      $(@node).fadeIn()




<img data-bind-src="image" data-bind-width="width" data-bind-height="height"/>

// ----------------------------------------------------------------------------
// Sass declarations
// ----------------------------------------------------------------------------
$background-color:  rgba(255,255,255,0);

// ----------------------------------------------------------------------------
// Widget-image styles
// ----------------------------------------------------------------------------
.widget-image {

  background-color: $background-color;

}
