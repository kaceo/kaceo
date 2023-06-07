<% content_for :title do %>My Camera Dashboard<% end %>
<div class="gridster">
  <ul>
	<li data-row="1" data-col="1" data-sizex="1" data-sizey="1">
		<div data-id="camera1" data-view="Cameras" data-title="Camera1 Label"></div>
	</li>
	<li data-row="1" data-col="1" data-sizex="1" data-sizey="1">
		<div data-id="camera2" data-view="Cameras" data-title="Camera2 Label"></div>
	</li>
	<li data-row="1" data-col="1" data-sizex="1" data-sizey="1">
		<div data-id="camera3" data-view="Cameras" data-title="Camera3 Label"></div>
	</li>
	<li data-row="1" data-col="1" data-sizex="1" data-sizey="1">
		<div data-id="camera4" data-view="Cameras" data-title="Camera4 Label"></div>
	</li>
	<li data-row="1" data-col="1" data-sizex="1" data-sizey="1">
		<div data-id="camera5" data-view="Cameras" data-title="Camera5 Label"></div>
	</li>

</div>

class Dashing.Cameras extends Dashing.Widget
	ready: ->

	onData: (data) ->

  $background-color: #424242;

$title-color: rgba(255,255,255,0.7);
$moreinfo-color: rgba(255,255,255,0.3);

.widget-cameras {
	padding: 0;
	background-color: $background-color;

	.title {
		color: $title-color;
	}

	.image-container {
		display: none;
		margin-bottom: 15px;
	}

}
