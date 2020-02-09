---
layout: master
title: "Navbar"
catalogue:
  - Basic
  - Variants
---

# Navbar

A fundamental navigation component, you can extend it to fit a more complex situation.

## Basic

<div class="mb-6">
  <nav class="navbar">
    <div class="navbar__start">
      <a role="button" class="navbar__brand">
        <img src="{{project.url}}/images/logo.svg" alt="pointcss" />
      </a>
      <div class="navbar__item is-active">
        <a role="button" class="navbar__link">Home</a>
      </div>
      <div class="navbar__item">
        <a role="button" class="navbar__link">Content</a>
      </div>
      <div class="navbar__item">
        <a role="button" class="navbar__link">Components</a>
      </div>
      <div class="navbar__item">
        <a role="button" class="navbar__link">Utilities</a>
      </div>
    </div>
    <div class="navbar__end">
      <div class="navbar__item">
        <div class="flex">
          <button class="btn">Sign up</button>
        <button class="btn btn--primary ml-3">Log in</button>
        </div>
      </div>
    </div>
  </nav>
</div>

```html
<nav class="navbar">
    <div class="navbar__start">
      <a role="button" class="navbar__brand">
        <img src="{{project.url}}/images/logo.svg" alt="pointcss" />
      </a>
      <div class="navbar__item is-active">
        <a role="button" class="navbar__link">Home</a>
      </div>
      <div class="navbar__item">
        <a role="button" class="navbar__link">Content</a>
      </div>
      <div class="navbar__item">
        <a role="button" class="navbar__link">Components</a>
      </div>
      <div class="navbar__item">
        <a role="button" class="navbar__link">Utilities</a>
      </div>
    </div>
    <div class="navbar__end">
      <div class="navbar__item">
        <div class="flex">
          <button class="btn btn--loose">Sign up</button>
        <button class="btn btn--primary btn--loose ml-3">Log in</button>
        </div>
      </div>
    </div>
  </nav>
```

## Variants

Choose `.navbar--light` for use with light background colors, or `.navbar--dark` for dark background colors

<div class="mb-6">
  <nav class="navbar navbar--dark px-5 bg-dark">
    <div class="navbar__start">
      <a role="button" class="navbar__brand">POINTCSS</a>
      <div class="navbar__item is-active">
        <a role="button" class="navbar__link">Home</a>
      </div>
      <div class="navbar__item">
        <a role="button" class="navbar__link">Content</a>
      </div>
      <div class="navbar__item">
        <a role="button" class="navbar__link">Components</a>
      </div>
      <div class="navbar__item">
        <a role="button" class="navbar__link">Utilities</a>
      </div>
    </div>
    <div class="navbar__end">
      <div class="navbar__item">
        <div class="flex">
          <button class="btn btn--white btn--outline">Sign up</button>
          <button class="btn btn--white btn--outline ml-3">Log in</button>
        </div>
      </div>
    </div>
  </nav>
</div>

<div class="mb-6">
  <nav class="navbar navbar--dark px-5 bg-primary">
    <div class="navbar__start">
      <a role="button" class="navbar__brand">POINTCSS</a>
      <div class="navbar__item is-active">
        <a role="button" class="navbar__link">Home</a>
      </div>
      <div class="navbar__item">
        <a role="button" class="navbar__link">Content</a>
      </div>
      <div class="navbar__item">
        <a role="button" class="navbar__link">Components</a>
      </div>
      <div class="navbar__item">
        <a role="button" class="navbar__link">Utilities</a>
      </div>
    </div>
    <div class="navbar__end">
      <div class="navbar__item">
        <div class="flex">
          <button class="btn btn--white btn--outline">Sign up</button>
          <button class="btn btn--white btn--outline ml-3">Log in</button>
        </div>
      </div>
    </div>
  </nav>
</div>

<div class="mb-6">
  <nav class="navbar navbar--light px-5 bg-light">
    <div class="navbar__start">
      <a role="button" class="navbar__brand">POINTCSS</a>
      <div class="navbar__item is-active">
        <a role="button" class="navbar__link">Home</a>
      </div>
      <div class="navbar__item">
        <a role="button" class="navbar__link">Content</a>
      </div>
      <div class="navbar__item">
        <a role="button" class="navbar__link">Components</a>
      </div>
      <div class="navbar__item">
        <a role="button" class="navbar__link">Utilities</a>
      </div>
    </div>
    <div class="navbar__end">
      <div class="navbar__item">
        <div class="flex">
          <button class="btn">Sign up</button>
        <button class="btn btn--primary ml-3">Log in</button>
        </div>
      </div>
    </div>
  </nav>
</div>

```html
<nav class="navbar navbar--dark px-5 bg-dark">
  ...
</nav>
<nav class="navbar navbar--dark px-5 bg-primary">
  ...
</nav>
<nav class="navbar navbar--light px-5 bg-light">
  ...
</nav>
```
