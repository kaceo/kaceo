class Dashing.Graph extends Dashing.Widget

  @accessor 'current', ->
    return @get('displayedValue') if @get('displayedValue')?
    points = @get('points')
    if points
      points[points.length - 1].y

  ready: ->
    container = $(@node).parent()
    # Gross hacks. Let's fix this.
    width = (Dashing.widget_base_dimensions[0] * container.data("sizex")) + Dashing.widget_margins[0] * 2 * (container.data("sizex") - 1)
    height = (Dashing.widget_base_dimensions[1] * container.data("sizey"))
    @graph = new Rickshaw.Graph(
      element: @node
      width: width
      height: height
      renderer: @get("graphtype")
      series: [
        {
        color: "#fff",
        data: [{x:0, y:0}]
        }
      ]
      padding: {top: 0.02, left: 0.02, right: 0.02, bottom: 0.02}
    )

    @graph.series[0].data = @get('points') if @get('points')

    x_axis = new Rickshaw.Graph.Axis.Time(graph: @graph)
    y_axis = new Rickshaw.Graph.Axis.Y(graph: @graph, tickFormat: Rickshaw.Fixtures.Number.formatKMBT)
    @graph.render()

  onData: (data) ->
    if @graph
      @graph.series[0].data = data.points
      @graph.render()


      <h1 class="title" data-bind="title"></h1>

<h2 class="value" data-bind="current | prettyNumber | prepend prefix | append suffix"></h2>

<p class="more-info" data-bind="moreinfo"></p>

// ----------------------------------------------------------------------------
// Sass declarations
// ----------------------------------------------------------------------------
$background-color:  #dc5945;

$title-color:       rgba(255, 255, 255, 0.7);
$moreinfo-color:    rgba(255, 255, 255, 0.3);
$tick-color:        rgba(0, 0, 0, 0.4);


// ----------------------------------------------------------------------------
// Widget-graph styles
// ----------------------------------------------------------------------------
.widget-graph {

  background-color: $background-color;
  position: relative;


  svg {
    position: absolute;
    opacity: 0.4;
    fill-opacity: 0.4;
    left: 0px;
    top: 0px;
  }

  .title, .value {
    position: relative;
    z-index: 99;
  }

  .title {
    color: $title-color;
  }

  .more-info {
    color: $moreinfo-color;
    font-weight: 600;
    font-size: 20px;
    margin-top: 0;
  }

  .x_tick {
    position: absolute;
    bottom: 0;
    .title {
      font-size: 20px;
      color: $tick-color;
      opacity: 0.5;
      padding-bottom: 3px;
    }
  }

  .y_ticks {
    font-size: 20px;
    fill: $tick-color;
    fill-opacity: 1;
  }

  .domain {
    display: none;
  }

}
