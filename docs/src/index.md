---
layout: default
title: "Getting started"
---

# Getting started

## Introduction
pointcss is a flexible CSS Framework for building modern responsive web apps.

- Built with Flexbox
- Mobile-First
- BEM, Namespaces, Modular, Beautiful code
- 10KB minified and gzipped

## Installation
There are 3 ways to start

### Install with Yarn
```sh
yarn add point-sass
```

### Install with NPM
```sh
npm install pointcss --save
```

### Direct `<script>` Include
`<link rel="stylesheet" href="dist/point.min.css" />`

---

## Customization
pointcss is coded in [SASS](http://sass-lang.com/), If you're familiar with it, You can continue.

### 1. Install the dependence
```sh
yarn add point-sass --dev
```

### 2. Set your variables
you can reference all initial variables in `scss/_variables.scss`
```scss
$color-primary:                         #636AFF; // primary
$color-danger:                          #ff2d20; // negative
$color-success:                         #15CD72; // positive
$color-info:                            #0069ff; // accent
$color-warning:                         #ED6E33; // warning
...
```

### 3. Import pointcss at the end of your code
```scss
// overwrite variables
$color-primary:                         #636AFF;

// your code

@import "node_modules/pointcss/point"
```

## Browser Support
pointcss uses [Normalize.css](https://necolas.github.io/normalize.css/) for CSS
reset and [Autoprefixer](https://github.com/postcss/autoprefixer) to make styles
compatible with earlier browser versions. For best user experience, these
browsers are recommended:

- Chrome
- Firefox
- Safari
- Opera
- Microsoft Edge
- Internet Explorer 10+

## Copyright and license
Code copyright 2017-2020 moyu. Code released under [the MIT license](https://github.com/moyus/point/blob/master/LICENSE).
