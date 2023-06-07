const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const tailwindconfig = require('./tailwind.config.js')

module.exports =

function (cssCode, done) {
  postcss([
    tailwindcss(tailwindconfig),
    autoprefixer()
  ])
  .process(cssCode)
  .then(
    (r) => done(null, r.css),
    (e) => done(e, null)
  );
}
