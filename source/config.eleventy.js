const moment = require("moment");
const yaml = require("js-yaml");
const devops = require("./_data/devops");
const pluginPWA = require("eleventy-plugin-pwa");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const navigationPlugin = require('@11ty/eleventy-navigation')


module.exports =
function(eleventyConfig) {

  //======================================
  // Configuration Variables
  //======================================

  var repodir = '/'
  if (devops.production) {
    eleventyConfig.addPlugin(pluginPWA);
  } else {
    //eleventyConfig.setPugOptions({ debug: true });
    repodir = '/kaceo'
  }

  //======================================
  // Plugins
  //======================================

  eleventyConfig.addPlugin(pluginRss)
  eleventyConfig.addPlugin(syntaxHighlight, {
    templateFormats: ["*"],
  })
  eleventyConfig.addPlugin(navigationPlugin)

  //======================================
  // Filters functions
  //eleventyConfig.addNunjucksFilter
  //======================================

  // limit filter
  eleventyConfig.addFilter("limit",
  function (array, limit) {
    return array.slice(0, limit);
  });

  // date filter
  eleventyConfig.addFilter("date",
  function (date, format) {
    return moment(date).format(format);
  });

  //======================================
  // Data type processors
  //======================================

  eleventyConfig.addDataExtension("yaml",
    contents => yaml.safeLoad(contents));

  eleventyConfig.addDataExtension("geojson",
    contents => JSON.parse(contents));

  let markdownIt = require("markdown-it");
  let markdownItAttrs = require("markdown-it-attrs");
  let markdownItContainer = require("markdown-it-container-pandoc");
  let options = { html: true };
  let markdownLib =
    markdownIt(options)
    .use(markdownItContainer)
    .use(markdownItAttrs);
  eleventyConfig.setLibrary("md", markdownLib);

  //======================================
  // Collections
  // relative to input directory
  //======================================

  // essays collection
  eleventyConfig.addCollection("essays",
  function (collection) {
    return collection.getFilteredByGlob(
      "source/content/essays/*.md");
  });

  // projects collection
  eleventyConfig.addCollection("projects",
  function (collection) {
    return collection.getFilteredByGlob(
      "source/content/projects/*.md");
  });

  //======================================
  // Configuration Variables
  //======================================

  eleventyConfig.addPassthroughCopy(
    { "source/static/": "/" });
  eleventyConfig.addPassthroughCopy(
    { "source/assets/": "/assets" });

  return {
    pathPrefix: repodir,
    dir: {
      output: "./_site",         // "_site"

      input: "./source/content",   // "source/pages"
      includes: "../_includes",  // "source/_includes"
      layouts: "../_layouts",    // "source/_layouts"
      data: "../_data",          // "source/_data"
    },

    //passthroughFileCopy: true,
    //templateFormats: ["md", "njk"],
    templateFormats: ['md', 'njk', 'pug', 'liquid'],
    htmlTemplateEngine: 'njk',
    //markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    setQuietMode: true,

  }
}
