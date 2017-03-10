---
layout: default
title: "Getting started"
---

# Getting started

## Introduction
Point is a flexible CSS Framework for building modern responsive web apps.

- Built with Flexbox
- Mobile-First
- BEM, Namespaces, Modular, Beautiful code
- 14KB gzipped

## Setup
There are two ways to start
### 1. Install with Yarn
```sh
yarn add point.css
```
*****
### 2. Download from the repository
[https://github.com/moyus/point](https://github.com/moyus/point)

## Customize
Point uses Gulp for compiling SASS into CSS, If you want to customize Point with
your own variables, just download the source files from the repository.

### 1. Install dependences
Navigate to the root directory of Point, then run the command below to install all dependencies.
```sh
yarn
```

### 2. Override variables
All initial variables are located in `src/_vars.scss`.

### 3. Compile
Run the command below to start compiling your own customized **Point**, you can
find the compiled CSS files in the `./dist` directory

```
gulp build
```

## Copyright and license
Code copyright 2017 moyu. Code released under [the MIT license](https://github.com/moyus/point/blob/master/LICENSE).
