module.exports = {
  layout: "page",
  title: "Untitled Post",
  tags: [
    "essays",
    "articles",
  ],

  permalink: "entry/{{ page.fileSlug }}/",
  //dynamicPermalinks: true,
  //permalink: data=> `entry/${data.page.fileSlug}/`,

  eleventyComputed: {
    //permalink: (data) => `p/${data.page.fileSlug}/',

    //choose a thumb image
    thumb: (data) => {
      if(data.thumb) {
        if (data.thumb.search(/^https?:\/\//) !== -1) {
          return data.thumb
        }
        return `/assets/img/${data.thumb})`
      }
      else {
        return false
      }
    },
  },
}
