const fs = require('fs')
const postcss = require('postcss')
const atImport = require('postcss-import')
const mq = require('css-mqpacker')
const rmComments = require('postcss-discard-comments')
const select = require('postcss-select')

postcss([
  atImport(), mq(), rmComments({ removeAll: true }),
  select([
    '.measure', '.measure-ns', '.truncate'
  ])
]).process('@import "tachyons";')
  .then(css => {
    fs.writeFileSync('src/selected-css.css', css)
  })
