class Dashing.Comments extends Dashing.Widget

  @accessor 'quote', ->
    "“#{@get('current_comment')?.body}”"

  ready: ->
    @currentIndex = 0
    @commentElem = $(@node).find('.comment-container')
    @nextComment()
    @startCarousel()

  onData: (data) ->
    @currentIndex = 0

  startCarousel: ->
    setInterval(@nextComment, 8000)

  nextComment: =>
    comments = @get('comments')
    if comments
      @commentElem.fadeOut =>
        @currentIndex = (@currentIndex + 1) % comments.length
        @set 'current_comment', comments[@currentIndex]
        @commentElem.fadeIn()

        <h1 class="title" data-bind="title"></h1>
        <div class="comment-container">
          <h3><img data-bind-src='current_comment.avatar'/><span data-bind='current_comment.name' class="name"></span></h3>
          <p class="comment" data-bind='quote'></p>
        </div>

        <p class="more-info" data-bind="moreinfo"></p>

        // ----------------------------------------------------------------------------
// Sass declarations
// ----------------------------------------------------------------------------
$background-color:  #eb9c3c;

$title-color:       rgba(255, 255, 255, 0.7);
$moreinfo-color:    rgba(255, 255, 255, 0.7);

// ----------------------------------------------------------------------------
// Widget-comment styles
// ----------------------------------------------------------------------------
.widget-comments {

  background-color: $background-color;

  .title {
    color: $title-color;
    margin-bottom: 15px;
  }

  .name {
    padding-left: 5px;
  }

  .comment-container {
    display: none;
  }

  .more-info {
    color: $moreinfo-color;
  }

}
