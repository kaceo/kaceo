
//const moment = require("moment");
//const { DateTime } = require("luxon");
const yaml = require("js-yaml");

const pluginPWA = require("eleventy-plugin-pwa");
const pluginBundle = require("@11ty/eleventy-plugin-bundle")
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginNavigation = require('@11ty/eleventy-navigation')
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

const markdownItAttrs = require("markdown-it-attrs");
const markdownItContainer = require("markdown-it-container-pandoc");
const markdownItAnchor = require("markdown-it-anchor");


// where are the source and output dirs?
const dirlist = {
  output: "./_site",         // "_site"

  input: "./pages",                 // "pages"
  includes: "../source/_includes",  // "source/_includes"
  layouts: "../source/_layouts",    // "source/_layouts"
  data: "../source/_data",          // "source/_data"
}

// list of asset directories
const clonelist = [
  { "source/public/": "/" },
  { "source/res/": "/assets/" },
  { "source/lib/": "/assets/" },
]

// list of post collections
const postslist = [
  { name: "essays", dir: "essays/**/*.md", },
  { name: "projects", dir: "projects/**/*.md", },
]

const grouplist = [
  { name: "allPosts",
    data: require('./eleventy/collections/allPosts') },
  { name: "allTags",
    data: require('./eleventy/collections/allTags') },
  { name: "pagedPosts",
    data: require('./eleventy/collections/pagedPosts') },
  { name: "pagedPostsByTag",
    data: require('./eleventy/collections/pagedPostsByTag') },
]

const filterlist = [
  { name: 'htmlDateString',
    data: require('./eleventy/filters/htmlDateString') },
  { name: 'readableDate',
    data: require('./eleventy/filters/readableDate') },
  { name: 'min',
    data: require('./eleventy/filters/min') },
  { name: 'head',
    data: require('./eleventy/filters/head') },
  { name: 'filterTagList',
    data: require('./eleventy/filters/filterTagList') },
  { name: 'getAllTags',
    data: require('./eleventy/filters/getAllTags') },
]

const pugOptions = {
  //debug: true,
  //pretty compileDebug basedir
  //doctype inlineRuntimeFunctions
  //filterOptions filterAliases filters
  //globals self includeSources
  //templateName plugins
  //self: true,
  globals: ['filters', 'bob'],
}

// other data from the data directories
const devops = require("./source/_data/devops");
//const meta = yaml.load("./source/_data/meta.yaml")

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////

module.exports =
function(eleventyConfig) {

  //======================================
  // Plugins
  // - PWA mode
  // - RSS generator
  // - Syntax Hightlighting
  // - Navigation
  //======================================

  var repodir = '/'
  if (devops.production) {
    eleventyConfig.addPlugin(pluginPWA);
  } else {
    repodir = devops.baseUrl
  }

  eleventyConfig.addPlugin(pluginRss)
  eleventyConfig.addPlugin(pluginSyntaxHighlight, {
    templateFormats: ["*"],
    preAttributes: { tabindex: 0 },
  })
  eleventyConfig.addPlugin(pluginNavigation)
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin)
  //eleventyConfig.addPlugin(pluginBundle)

  //======================================
  // Data type processors
  // - yaml
  // - json
  //======================================

  eleventyConfig.addDataExtension("yaml",
    contents => yaml.load(contents));

  eleventyConfig.addDataExtension("geojson",
    contents => JSON.parse(contents));

  //======================================
  // Markdown Processing
/*
  let markdownIt = require("markdown-it");
  let markdownItAttrs = require("markdown-it-attrs");
  let markdownItContainer = require("markdown-it-container-pandoc");
  let options = { html: true };
  let markdownLib =
    markdownIt(options)
    .use(markdownItContainer)
    .use(markdownItAttrs);
  eleventyConfig.setLibrary("md", markdownLib);
*/
  //======================================

  eleventyConfig.amendLibrary("md",
  mdLib => {
    mdLib.use(markdownItAnchor, {
      permalink: markdownItAnchor.permalink.ariaHidden({
        //placement: "after",
        class: "header-anchor",
        symbol: "#",
        ariaHidden: false,
      }),
      level: [1,2,3,4],
      slugify: eleventyConfig.getFilter("slugify")
    });
    mdLib.use(markdownItContainer)
    mdLib.use(markdownItAttrs)
  })

/*
  extend ---javascript front matter
  https://www.11ty.dev/docs/data-frontmatter-customize/
  =========================================
  const { RetrieveGlobals } = require('node-retrieve-globals')
  eleventyConfig.setFrontMatterParsingOptions({
    engines: {
      "javascript": function(frontMatterCode) {
        let vm = new RetrieveGlobals(frontMatterCode)
        let data = {}
        return vm.getGlobalContext(data, {
          reuseGlobal: true,
          dynamicImport: true,
        })
      }
    }
  })
*/

  //======================================
  // Files to Copy as part of a Style
  //======================================

  clonelist.forEach( i =>
    eleventyConfig.addPassthroughCopy(i)
  );

  // also detect changes in the source
  eleventyConfig.addWatchTarget(
    "source/**/*"
  );

  eleventyConfig.setDataDeepMerge(true);
  //eleventyConfig.addLayoutAlias("post", "layouts/post.njk");
  //eleventyConfig.setLiquidOptions({ jsTruthy: true });


  //======================================
  // Filters functions
  //eleventyConfig.addNunjucksFilter
  //
  // markdown, liquid, nunjucks, handlebar, javascript
  // not pug,
  // addShortcode,
  // addPairedShortcode,
  // addFilter,
  //======================================

  filterlist.forEach (i => {
    eleventyConfig.addFilter(i.name, i.date)
  })

  //======================================
  // Collections
  // relative to input directory
  //======================================

  grouplist.forEach (i => {
    console.log('Collection ', i.name, ' <= ')
    eleventyConfig.addCollection(
      i.name, i.data
    );
  })

/*
  postslist.forEach (i => {
    console.log('Collection ', i.name, ' <= ', i.dir)
    eleventyConfig.addCollection(
      i.name,
      function(collection) {
        return collection.getFilteredByGlob(i.dir)
      }
    );
  })

  eleventyConfig.addCollection("tagList",
    function(collection) {
    let tagSet = new Set();
    collection.getAll().forEach(item => {
      (item.data.tags || []).forEach(tag => tagSet.add(tag));
    });
    return [...tagSet];
  });
*/

  // create a global to access filters
  //--------------------------------------

  //globalData?

  global.filters = eleventyConfig.javascriptFunctions;
  eleventyConfig.setPugOptions( pugOptions )

/* global.bob = function (page) {
    //var page =
    var pp = page
    var nn = page
    return {
      prev: pp,
      next: nn,
  }}
console.log(global)
*/

  //remove Dynamic evaluation for Permalink
  //eleventyConfig.setDynamicPermalinks(false);

  //change Permalink evaluation
/*
  eleventyConfig.addGlobalData(
    "permalink", () => {
    return (data) => `${data.page.filePathStem}.${data.page.outputFileExtension}`;
  });
  'name', 'string'
  'name', ()=>function
  'name'. ()=> { return new Promise ....}
  'name', async () => { return Promise.resolve....}
  https://www.11ty.dev/docs/data-global-custom/
*/

  //======================================
  // Eleventy Event Handling
  //======================================

  eleventyConfig.on("beforeBuild", () => {
    // compile sass, postcss, tailwind
    console.log('CSS compiled')
  })

  //======================================
  // Eleventy Configuration Settings
  //======================================
  return {
    pathPrefix: repodir,
    dir: dirlist,

    // which files to select
    // html,liquid,ejs,md,hbs,mustache,haml,pug,njk,11ty.js
    templateFormats: [
      'md', 'pug', 'njk', 'liquid', 'html', 'ejs',
    ],

    // which engine for md preprocess | liquid
    // *.md => (engine) => markdown => html
    markdownTemplateEngine: 'njk',

    // which engine for html preprocess | liquid
    // *.html => (engine) => html
    //htmlTemplateEngine: 'njk',

    // which engine for json | liquid
    //dataTemplateEngine: 'njk',
    dataTemplateEngine: false,

    //passthroughFileCopy: true,
    //setQuietMode: true,
  }
}
