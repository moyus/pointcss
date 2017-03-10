---
layout: default
title: "Getting started"
---

## Introduction
Point is a flexible CSS Framework for building modern responsive web apps.

## Setup
There are two ways to start
### 1. Install with Yarn
```
yarn add point.css
```
*****
### 2. Download from the repository
[https://github.com/moyu/point/tree/master/css](https://github.com/moyu/point/tree/master/css)

## Customize
Point uses Gulp for compiling SASS into CSS, If you want to customize Point with
your own variables, just download the source files from the repository.

### 1. Install dependences
Navigate to the root directory of Point, then run the command below to install all dependencies.
```
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
