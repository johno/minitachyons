const fs = require('fs')
const postcss = require('postcss')
const atImport = require('postcss-import')
const mq = require('css-mqpacker')
const rmComments = require('postcss-discard-comments')
const select = require('postcss-select')

postcss([
  atImport(), mq(), rmComments({ removeAll: true }),
  select([
    '.measure', '.measure-ns', '.truncate', '.ttu', '.tracked',
    '.b', '.b-ns', '.normal', '.normal-ns', '.v-mid', '.v-mid-ns',
    '.mid-gray', '.silver', '.light-silver'
  ])
]).process('@import "tachyons";')
  .then(css => {
    fs.writeFileSync('src/selected-css.css', css)
  })
