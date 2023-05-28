
const glob = require('./config').dir

module.exports = (coll) => {
  const posts = [...coll.getFilteredByGlob(glob)];

  return posts.reverse();
};
