// Remove tag all, nav, post, posts

module.exports =
function filterTagList(tags) {
  return (tags || [])
  .filter(tag => ["all", "nav", "post", "posts"].indexOf(tag) === -1);
}
