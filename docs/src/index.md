---
layout: master
title: "Getting started"
catalogue:
  - Installation
  - Customization
  - Browser Support
  - Copyright and License
---

# Introduction
**pointcss** is a flexible CSS Framework for building modern responsive web apps.

- Built with flexbox
- Mobile friendly layout
- 10KB minified and gzipped

## Installation
There are 3 ways to get start

### Yarn
```sh
yarn add pointcss
```

### NPM
```sh
npm install pointcss --save
```

### Download and use production file
```html
<link rel="stylesheet" href="dist/point.min.css" />
```

## Customization
**pointcss** is coded in [SASS](http://sass-lang.com/), If you're familiar with it, You can continue

### Install the dependence
```sh
yarn add pointcss --dev
```

### Set your variables
you can reference all initial variables in `scss/_variables.scss`
```scss
$color-primary:                         #636AFF; // primary
$color-danger:                          #ff2d20; // negative
$color-success:                         #15CD72; // positive
$color-info:                            #0069ff; // accent
$color-warning:                         #ED6E33; // warning
...
```

### Import pointcss at the end of your code
```scss
// overwrite variables
$color-primary:                         #636AFF;

// your code

@import "node_modules/pointcss/point"
```

## Browser Support
**pointcss** uses [Normalize.css](https://necolas.github.io/normalize.css/) for CSS
reset and [Autoprefixer](https://github.com/postcss/autoprefixer) to make styles
compatible with earlier browser versions. For best user experience, these
browsers are recommended:

- Chrome
- Firefox
- Safari
- Opera
- Microsoft Edge
- Internet Explorer 10+

## Copyright and License
<p>
  Designed and built by <a href="{{site.author}}">MOYU</a>.
  Licensed under the <a href="{{site.license}}">MIT License</a>.
</p>
