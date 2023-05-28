
const paginate = require('./config').perpage

module.exports = (coll) => {
  const tagList = require('./allTags')(coll);

  const maxPostsPerPage = paginate;
  const pagedPosts = [];

  Object.keys(tagList).forEach((tagName) => {
    const taggedPosts = [...coll.getFilteredByTag(tagName)].reverse();
    const numberOfPages = Math.ceil(taggedPosts.length / maxPostsPerPage);

    for (let pageNum = 1; pageNum <= numberOfPages; pageNum++) {
      const sliceFrom = (pageNum - 1) * maxPostsPerPage;
      const sliceTo = sliceFrom + maxPostsPerPage;

      pagedPosts.push({
        tagName,
        number: pageNum,
        posts: taggedPosts.slice(sliceFrom, sliceTo),
        first: pageNum === 1,
        last: pageNum === numberOfPages
      });
    }
  });

  return pagedPosts;
};
