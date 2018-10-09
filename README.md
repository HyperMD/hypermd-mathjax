# hypermd-mathjax

In HyperMD, Use [MathJax][] to render TeX formulars.

[Demo](https://hypermd.github.io/hypermd-mathjax/example/) | [GitHub](https://github.com/HyperMD/hypermd-mathjax) | [![NPM version](https://img.shields.io/npm/v/hypermd-mathjax.svg?style=flat-square)](https://npmjs.org/package/hypermd-mathjax)

## How to use

⚠️ First of all, add **mathjax-config** into your HTML, **before your .js script tag**.

More detail about the config can be found [here](http://docs.mathjax.org/en/latest/configuration.html). My personal favorite config is:

```html
<script type="text/x-mathjax-config">
MathJax.Hub.Config({
    jax: ["input/TeX", "output/HTML-CSS","output/NativeMML","output/SVG"],
    extensions: ["MathMenu.js","MathZoom.js", "AssistiveMML.js", "a11y/accessibility-menu.js"],
    TeX: {
        extensions: ["AMSmath.js","AMSsymbols.js","noErrors.js","noUndefined.js"]
    }
});
</script>
```

Then...

1. install `mathjax` and `hypermd-mathjax`
2. `import` before creating HyperMD editor
3. create HyperMD editor

### For webpack / parcel

After adding **mathjax-config** (see above) to HTML page, install the packages: `npm install --save hypermd-mathjax mathjax`

```js
import * as HyperMD from "hypermd"
import "hypermd-mathjax"

const your_textarea = document.getElementById('input-box')
const editor = HyperMD.fromTextArea(your_textarea)
```

### For requirejs (example)

Install the packages: `npm install --save hypermd-mathjax mathjax`

In your HTML:

```html
<textarea id="input-box" cols="30" rows="10">I'm using MathJax to render $f(a) = \frac{1}{2\pi i} \oint\frac{f(z)}{z-a}dz$</textarea>

<!-- **mathjax-config** HERE (see above)  -->

<script src="./node_modules/requirejs/require.js"></script>
<script src="./node_modules/hypermd/goods/patch-requirejs.js"></script> <!-- 👈 IMPORTANT -->
<script data-main src="main.js"></script>
```

As for your `main.js`, [here is an example](./example/requirejs-main.js).

### For Plain Browser Env

*Why hurting yourself? The bundlers and module loaders are the future!*

See the source of [example file](./example/pbe-index.html). Basically, all you need is adding few lines after CodeMirror and HyperMD, before creating your editor:

```html
<!-- **mathjax-config** HERE (see above)  -->

<script src='https://cdn.jsdelivr.net/npm/mathjax@2.7.5/MathJax.js?config=TeX-MML-AM_CHTML' async></script>
<script src="https://cdn.jsdelivr.net/npm/hypermd-mathjax/index.js"></script>
```


## Develop

0. (if needed) update `pbe.manifest.json` and define modules' global var name
1. `npm run dev`
2. Start test. You have to refresh the page manually...


[MathJax]: https://www.mathjax.org/
