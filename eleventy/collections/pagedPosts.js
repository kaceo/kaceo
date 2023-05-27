//const siteData = require('../../source/_data/meta');

const paginate = 6 //siteData.paginate;

module.exports = (coll) => {
  const allPosts = require('./posts')(coll);

  const maxPostsPerPage = paginate;
  const numberOfPages = Math.ceil(allPosts.length / maxPostsPerPage);
  const pagedPosts = [];

  for (let pageNum = 1; pageNum <= numberOfPages; pageNum++) {
    const sliceFrom = (pageNum - 1) * maxPostsPerPage;
    const sliceTo = sliceFrom + maxPostsPerPage;

    pagedPosts.push({
      number: pageNum,
      posts: allPosts.slice(sliceFrom, sliceTo),
      first: pageNum === 1,
      last: pageNum === numberOfPages
    });
  }

  return pagedPosts;
};
