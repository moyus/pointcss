---
layout: master
title: Navbar
path:
  - Components
  - Navbar
catalogue:
  - Basic
  - Variant
---

# Navbar

A fundamental navigation component, you can extend it to fit a more complex situation.

## Basic

<section class="snippet">
  <div class="snippet__preview">
    <nav class="navbar">
      <div class="navbar__start">
        <a class="navbar__brand">
          <img src="{{project.url}}/images/logo.svg" alt="pointcss" />
        </a>
        <ul class="navbar__list shown@lg">
          <li class="navbar__item is-active">
            <a class="navbar__link">Home</a>
          </li>
          <li class="navbar__item">
            <a class="navbar__link">Content</a>
          </li>
          <li class="navbar__item">
            <a class="navbar__link">Components</a>
          </li>
          <li class="navbar__item">
            <a class="navbar__link">Utilities</a>
          </li>
        </ul>
      </div>
      <div class="navbar__end">
        <div class="navbar__item hidden@lg">
          <button class="btn">Menu</button>
        </div>
        <div class="navbar__item shown@lg">
          <div class="flex">
            <button class="btn">Sign up</button>
            <button class="btn btn--primary ml-3">Log in</button>
          </div>
        </div>
      </div>
    </nav>
  </div>
  <div class="snippet__source">

```html
<nav class="navbar">
  <div class="navbar__start">
    <a class="navbar__brand">
      <img src="..." alt="Brand" />
    </a>
    <ul class="navbar__list shown@lg">
      <li class="navbar__item is-active">
        <a class="navbar__link">Home</a>
      </li>
      <li class="navbar__item">
        <a class="navbar__link">Content</a>
      </li>
      <li class="navbar__item">
        <a class="navbar__link">Components</a>
      </li>
      <li class="navbar__item">
        <a class="navbar__link">Utilities</a>
      </li>
    </ul>
  </div>
  <div class="navbar__end">
    <div class="navbar__item hidden@lg">
      <button class="btn">Menu</button>
    </div>
    <div class="navbar__item shown@lg">
      <button class="btn">Sign up</button>
      <button class="btn btn--primary ml-3">Log in</button>
    </div>
  </div>
</nav>
```

  </div>
</section>

## Variant

Choose `.navbar--light` for use with light background colors, or `.navbar--dark` for dark background colors

##### Dark

<section class="snippet">
  <div class="snippet__preview">
    <nav class="navbar navbar--dark p-5 bg-dark">
      <div class="navbar__start">
        <a role="button" class="navbar__brand">POINTCSS</a>
        <ul class="navbar__list shown@lg">
          <li class="navbar__item is-active">
            <a class="navbar__link">Home</a>
          </li>
          <li class="navbar__item">
            <a class="navbar__link">Content</a>
          </li>
          <li class="navbar__item">
            <a class="navbar__link">Components</a>
          </li>
          <li class="navbar__item">
            <a class="navbar__link">Utilities</a>
          </li>
        </ul>
      </div>
      <div class="navbar__end">
        <div class="navbar__item hidden@lg">
          <button class="btn btn--white btn--outline">Menu</button>
        </div>
        <div class="navbar__item shown@lg">
          <button class="btn btn--white btn--outline">Sign up</button>
          <button class="btn btn--white btn--outline ml-3">Log in</button>
        </div>
      </div>
    </nav>
  </div>
  <div class="snippet__source">

```html
<nav class="navbar navbar--dark p-5 bg-dark">
  ...
</nav>
```

  </div>
</section>

<section class="snippet">
  <div class="snippet__preview">
    <nav class="navbar navbar--dark p-5 bg-primary">
      <div class="navbar__start">
        <a role="button" class="navbar__brand">POINTCSS</a>
        <ul class="navbar__list shown@lg">
          <li class="navbar__item is-active">
            <a class="navbar__link">Home</a>
          </li>
          <li class="navbar__item">
            <a class="navbar__link">Content</a>
          </li>
          <li class="navbar__item">
            <a class="navbar__link">Components</a>
          </li>
          <li class="navbar__item">
            <a class="navbar__link">Utilities</a>
          </li>
        </ul>
      </div>
      <div class="navbar__end">
        <div class="navbar__item hidden@lg">
          <button class="btn btn--white btn--outline">Menu</button>
        </div>
        <div class="navbar__item shown@lg">
          <button class="btn btn--white btn--outline">Sign up</button>
          <button class="btn btn--white btn--outline ml-3">Log in</button>
        </div>
      </div>
    </nav>
  </div>
  <div class="snippet__source">

```html
<nav class="navbar navbar--dark p-5 bg-primary">
  ...
</nav>
```

  </div>
</section>

##### Light

<section class="snippet">
  <div class="snippet__preview">
    <nav class="navbar navbar--light p-5 bg-light">
      <div class="navbar__start">
        <a role="button" class="navbar__brand">POINTCSS</a>
        <ul class="navbar__list shown@lg">
          <li class="navbar__item is-active">
            <a class="navbar__link">Home</a>
          </li>
          <li class="navbar__item">
            <a class="navbar__link">Content</a>
          </li>
          <li class="navbar__item">
            <a class="navbar__link">Components</a>
          </li>
          <li class="navbar__item">
            <a class="navbar__link">Utilities</a>
          </li>
        </ul>
      </div>
      <div class="navbar__end">
        <div class="navbar__item hidden@lg">
          <button class="btn">Menu</button>
        </div>
        <div class="navbar__item shown@lg">
          <button class="btn">Sign up</button>
          <button class="btn ml-3">Log in</button>
        </div>
      </div>
    </nav>
  </div>
  <div class="snippet__source">

```html
<nav class="navbar navbar--light p-5 bg-light">
  ...
</nav>
```

  </div>
</section>
