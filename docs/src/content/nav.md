---
layout: master
title: Nav
path:
  - Components
  - Nav
catalogue:
  - Basic
  - Layout
  - Variant
  - Sizing
---

# Nav

Provide horizontal navigation for content.

## Basic

<section class="snippet">
  <div class="snippet__preview">
    <ul class="nav">
      <li class="nav__item is-active">
        <a href="#" class="nav__link">Home</a>
      </li>
      <li class="nav__item">
        <a href="#" class="nav__link">Link</a>
      </li>
      <li class="nav__item">
        <a href="#" class="nav__link">Another Link</a>
      </li>
      <li class="nav__item">
        <a href="#" class="nav__link is-disabled">Disabled</a>
      </li>
    </ul>
  </div>
  <div class="snippet__source">

```html
<ul class="nav">
  <li class="nav__item is-active">
    <a href="#" class="nav__link">Home</a>
  </li>
  <li class="nav__item">
    <a href="#" class="nav__link">Link</a>
  </li>
  <li class="nav__item">
    <a href="#" class="nav__link">Another Link</a>
  </li>
  <li class="nav__item">
    <a href="#" class="nav__link is-disabled">Disabled</a>
  </li>
</ul>
```

  </div>
</section>

## Layout

###### Align center

Add `.nav--center` modifier class on `.nav` container.

<section class="snippet">
  <div class="snippet__preview">
    <ul class="nav nav--center">
      <li class="nav__item is-active">
        <a href="#" class="nav__link">Home</a>
      </li>
      <li class="nav__item">
        <a href="#" class="nav__link">Link</a>
      </li>
      <li class="nav__item">
        <a href="#" class="nav__link">Another Link</a>
      </li>
      <li class="nav__item">
        <a href="#" class="nav__link is-disabled">Disabled</a>
      </li>
    </ul>
  </div>
  <div class="snippet__source">

```html
<ul class="nav nav--center">
  ...
</ul>
```

  </div>
</section>

###### Align end

Add `.nav--end` modifier class on `.nav` container.

<section class="snippet">
  <div class="snippet__preview">
    <ul class="nav nav--end">
      <li class="nav__item is-active">
        <a href="#" class="nav__link">Home</a>
      </li>
      <li class="nav__item">
        <a href="#" class="nav__link">Link</a>
      </li>
      <li class="nav__item">
        <a href="#" class="nav__link">Another Link</a>
      </li>
      <li class="nav__item">
        <a href="#" class="nav__link is-disabled">Disabled</a>
      </li>
    </ul>
  </div>
  <div class="snippet__source">

```html
<ul class="nav nav--end">
  ...
</ul>
```

  </div>
</section>

###### Stretch

Add `.nav--stretch` modifier class on `.nav` container.

<section class="snippet">
  <div class="snippet__preview">
    <ul class="nav nav--stretch">
      <li class="nav__item is-active">
        <a href="#" class="nav__link">Home</a>
      </li>
      <li class="nav__item">
        <a href="#" class="nav__link">Link</a>
      </li>
      <li class="nav__item">
        <a href="#" class="nav__link">Another Link</a>
      </li>
      <li class="nav__item">
        <a href="#" class="nav__link is-disabled">Disabled</a>
      </li>
    </ul>
  </div>
  <div class="snippet__source">

```html
<ul class="nav nav--stretch">
  ...
</ul>
```

  </div>
</section>

## Variant

###### Tabs

By adding `.nav--tabs` modifier class on `.nav` element to create tabs styled nav list.

<section class="snippet">
  <div class="snippet__preview">
    <ul class="nav nav--tabs">
      <li class="nav__item is-active">
        <a href="#" class="nav__link">Home</a>
      </li>
      <li class="nav__item">
        <a href="#" class="nav__link">Link</a>
      </li>
      <li class="nav__item">
        <a href="#" class="nav__link">Another Link</a>
      </li>
      <li class="nav__item">
        <a href="#" class="nav__link is-disabled">Disabled</a>
      </li>
    </ul>
  </div>
  <div class="snippet__source">

```html
<ul class="nav nav--tabs">
  <li class="nav__item is-active">
    <a href="#" class="nav__link">Home</a>
  </li>
  <li class="nav__item">
    <a href="#" class="nav__link">Link</a>
  </li>
  <li class="nav__item">
    <a href="#" class="nav__link">Another Link</a>
  </li>
  <li class="nav__item">
    <a href="#" class="nav__link is-disabled">Disabled</a>
  </li>
</ul>
```

  </div>
</section>

###### Pills

By adding `.nav--pills` modifier class on `.nav` element to create pills styled nav list.

<section class="snippet">
  <div class="snippet__preview">
    <ul class="nav nav--pills">
      <li class="nav__item is-active">
        <a href="#" class="nav__link">Home</a>
      </li>
      <li class="nav__item">
        <a href="#" class="nav__link">Link</a>
      </li>
      <li class="nav__item">
        <a href="#" class="nav__link">Another Link</a>
      </li>
      <li class="nav__item">
        <a href="#" class="nav__link is-disabled">Disabled</a>
      </li>
    </ul>
  </div>
  <div class="snippet__source">

```html
<ul class="nav nav--pills">
  <li class="nav__item is-active">
    <a href="#" class="nav__link">Home</a>
  </li>
  <li class="nav__item">
    <a href="#" class="nav__link">Link</a>
  </li>
  <li class="nav__item">
    <a href="#" class="nav__link">Another Link</a>
  </li>
  <li class="nav__item">
    <a href="#" class="nav__link is-disabled">Disabled</a>
  </li>
</ul>
```

  </div>
</section>

## Sizing

All variants can combile with `.nav--sm` modifier classes to get a small size of it.

<section class="snippet">
  <div class="snippet__preview">
    <ul class="nav nav--sm">
      <li class="nav__item">
        <a href="#" class="nav__link">Home</a>
      </li>
      <li class="nav__item">
        <a href="#" class="nav__link">Link</a>
      </li>
      <li class="nav__item">
        <a href="#" class="nav__link">Another Link</a>
      </li>
      <li class="nav__item">
        <a href="#" class="nav__link is-disabled">Disabled</a>
      </li>
    </ul>
  </div>
  <div class="snippet__source">

```html
<ul class="nav nav--sm">
  ...
</ul>
```

  </div>
</section>
