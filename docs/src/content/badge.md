---
layout: master
title: "Badge"
catalogue:
  - Basic
  - Variant
  - Sizing
  - Linked
  - Position
---

# Badge

## Basic

<section class="snippet">
  <div class="snippet__preview">
    <div class="level">
      <div class="level__item">
        <span class="badge">Badge</span>
      </div>
      <div class="level__item">
        <button class="btn">
          <div class="flex items-center">
            <span>Messages</span>
            <span class="ml-3 badge badge--sm badge--danger">12</span>
          </div>
        </button>
      </div>
      <div class="level__item">
        <h3 class="m-0">Heading<sup class="badge badge--info">New</sup></h3>
      </div>
    </div>
  </div>
  <div class="snippet__source">

```html
<span class="badge">Badge</span>

<button class="btn">
  <div class="flex items-center">
    <span>Messages</span>
    <span class="ml-3 badge badge--danger">12</span>
  </div>
</button>

<h3>Heading<sup class="badge badge--info">New</sup></h3>
```
  </div>
</section>

## Variant

<section class="snippet">
  <div class="snippet__preview">
    <span class="badge badge--primary">Primary</span>
    <span class="badge badge--info">Info</span>
    <span class="badge badge--success">Success</span>
    <span class="badge badge--danger">Danger</span>
    <span class="badge badge--warning">Warning</span>
    <span class="badge badge--black">Black</span>
    <span class="badge badge--dark">Dark</span>
    <span class="badge badge--white">White</span>
  </div>
  <div class="snippet__source">

```html
<span class="badge badge--primary">Primary</span>
<span class="badge badge--info">Info</span>
<span class="badge badge--success">Success</span>
<span class="badge badge--danger">Danger</span>
<span class="badge badge--warning">Warning</span>
<span class="badge badge--black">Black</span>
<span class="badge badge--dark">Dark</span>
<span class="badge badge--white">White</span>
```

  </div>
</section>

##### Empty badge

<section class="snippet">
  <div class="snippet__preview">
    <span class="badge"></span>
    <span class="badge badge--primary"></span>
    <span class="badge badge--info"></span>
    <span class="badge badge--success"></span>
    <span class="badge badge--danger"></span>
    <span class="badge badge--warning"></span>
  </div>
  <div class="snippet__source">

```html
<span class="badge"></span>
<span class="badge badge--primary"></span>
<span class="badge badge--info"></span>
<span class="badge badge--success"></span>
<span class="badge badge--danger"></span>
<span class="badge badge--warning"></span>
```

  </div>
</section>

## Sizing

<section class="snippet">
  <div class="snippet__preview">
    <div class="level">
      <div class="level__item">
        <span class="badge badge--primary badge--sm">Small</span>
      </div>
      <div class="level__item">
        <span class="badge badge--success">Normal</span>
      </div>
      <div class="level__item">
        <span class="badge badge--warning badge--lg">Large</span>
      </div>
    </div>
  </div>
  <div class="snippet__source">

```html
<span class="badge badge--sm"></span>
<span class="badge badge--lg"></span>
```

  </div>
</section>

## Linked

<section class="snippet">
  <div class="snippet__preview">
    <a class="badge badge--link">Badge</a>
    <a class="badge badge--primary badge--link">Primary</a>
    <a class="badge badge--info badge--link">Info</a>
    <a class="badge badge--success badge--link">Success</a>
    <a class="badge badge--danger badge--link">Danger</a>
    <a class="badge badge--warning badge--link">Warning</a>
  </div>
  <div class="snippet__source">

```html
<a class="badge badge--link">Badge</a>
<a class="badge badge--primary badge--link">Primary</a>
<a class="badge badge--info badge--link">Info</a>
<a class="badge badge--success badge--link">Success</a>
<a class="badge badge--danger badge--link">Danger</a>
<a class="badge badge--warning badge--link">Warning</a>
```

  </div>
</section>

## Position

By composing with other components, you can specify the position of badge.

<section class="snippet">
  <div class="snippet__preview">
    <button class="btn btn--lose">
      <span>Messages</span>
      <span class="badge badge--danger badge--sm badge--pill badge--rt">99</span>
    </button>
  </div>
  <div class="snippet__source">

```html
<button class="btn btn--lose">
  <span>Messages</span>
  <span class="badge badge--danger badge--pill badge--rt">99</span>
</button>
```

  </div>
</section>
