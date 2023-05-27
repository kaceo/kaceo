module.exports = (coll) => {
  const posts = [...coll.getFilteredByGlob('pages/essays/**/*.md')];

  return posts.reverse();
};
