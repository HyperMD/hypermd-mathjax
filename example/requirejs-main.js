requirejs.config({
  baseUrl: "https://cdn.jsdelivr.net/npm/",
  // baseUrl: "./node_modules/",   // not a favor of CDN? Use this.

  packages: [
    { name: 'hypermd', main: 'everything.js' },
    { name: 'codemirror', main: 'lib/codemirror.js' },

    // ...

    // add this 2 lines to requirejs config.packages:
    { name: 'hypermd-mathjax', main: 'index.js' },
    { name: 'mathjax', main: 'MathJax.js' },
  ]
})


//////////////////////////////////////////////////////////////////
// This part is for development. It's meaningless to you. Please delete it:
// 这一小段代码仅用于开发测试，对你没用。要拷贝代码时，记得删除：
if (location.search.indexOf('_hmd_dev_') !== -1) requirejs.config({ paths: { "hypermd-mathjax": "/." } })
//////////////////////////////////////////////////////////////////



require([
  "hypermd",

  // ...

  // add this to your dependencies:
  "hypermd-mathjax",
], function (HyperMD) {
  var your_textarea = document.getElementById('input-box')
  var editor = HyperMD.fromTextArea(your_textarea)
})