const moment = require("moment");

module.exports =
function(eleventyConfig) {

  // essays collection
  eleventyConfig.addCollection("essays",
  function (collection) {
    return collection.getFilteredByGlob(
      "./source/essays/*.md");
  });

  // projects collection
  eleventyConfig.addCollection("projects",
  function (collection) {
    return collection.getFilteredByGlob(
      "./source/projects/*.md");
  });

  // limit filter
  eleventyConfig.addNunjucksFilter("limit",
  function (array, limit) {
    return array.slice(0, limit);
  });

  // date filter
  eleventyConfig.addNunjucksFilter("date",
  function (date, format) {
    return moment(date).format(format);
  });

  //eleventyConfig.setPugOptions({ debug: true });

  return {
    dir: {
      output: "./_site",
      input: "./source",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
    },
    passthroughFileCopy: true,

  }

}
