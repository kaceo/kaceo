class Dashing.List extends Dashing.Widget
  ready: ->
    if @get('unordered')
      $(@node).find('ol').remove()
    else
      $(@node).find('ul').remove()

      <h1 class="title" data-bind="title"></h1>

      <ol>
        <li data-foreach-item="items">
          <span class="label" data-bind="item.label"></span>
          <span class="value" data-bind="item.value"></span>
        </li>
      </ol>

      <ul class="list-nostyle">
        <li data-foreach-item="items">
          <span class="label" data-bind="item.label"></span>
          <span class="value" data-bind="item.value"></span>
        </li>
      </ul>

      <p class="more-info" data-bind="moreinfo"></p>
      <p class="updated-at" data-bind="updatedAtMessage"></p>

// ----------------------------------------------------------------------------
// Sass declarations
// ----------------------------------------------------------------------------
$background-color:  #12b0c5;
$value-color:       #fff;

$title-color:       rgba(255, 255, 255, 0.7);
$label-color:       rgba(255, 255, 255, 0.7);
$moreinfo-color:    rgba(255, 255, 255, 0.7);

// ----------------------------------------------------------------------------
// Widget-list styles
// ----------------------------------------------------------------------------
.widget-list {

  background-color: $background-color;
  vertical-align: top;

  .title {
    color: $title-color;
  }

  ol, ul {
    margin: 0 15px;
    text-align: left;
    color: $label-color;
  }

  ol {
    list-style-position: inside;
  }

  li {
    margin-bottom: 5px;
  }

  .list-nostyle {
    list-style: none;
  }

  .label {
    color: $label-color;
  }

  .value {
    float: right;
    margin-left: 12px;
    font-weight: 600;
    color: $value-color;
  }

  .updated-at {
    color: rgba(0, 0, 0, 0.3);
  }

  .more-info {
    color: $moreinfo-color;
  }

}
