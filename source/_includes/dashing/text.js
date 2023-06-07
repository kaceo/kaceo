Dashing.Widget


<h1 class="title" data-bind="title"></h1>
<h3 data-bind="text"></h3>
<p class="more-info" data-bind="moreinfo"></p>
<p class="updated-at" data-bind="updatedAtMessage"></p>


// ----------------------------------------------------------------------------
// Sass declarations
// ----------------------------------------------------------------------------
$background-color:  #ec663c;

$title-color:       rgba(255, 255, 255, 0.7);
$moreinfo-color:    rgba(255, 255, 255, 0.7);

.widget-text {

  background-color: $background-color;

  .title {
    color: $title-color;
  }

  .more-info {
    color: $moreinfo-color;
  }

  .updated-at {
    color: rgba(255, 255, 255, 0.7);
  }


  &.large h3 {
    font-size: 65px;
  }
}
