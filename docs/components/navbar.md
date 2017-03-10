---
layout: default
title: "Navbar"
---

# Navbar
- [Basic](#basic)

## Basic

Structure:
- `.c-navbar`
  - `.c-navbar__left`, `.c-navbar__center`, `.c-navbar__right`
    - `.c-navbar__item`

<div class="u-mb-15">
  <nav class="c-navbar">
    <div class="c-navbar__left is-auto">
        <a role="button" class="c-navbar__item">
            <img src="{{site.url}}images/logo-head.png" alt="">
        </a>
    </div>
    <div class="c-navbar__right is-fixed">
      <a role="button" class="c-navbar__item">Home</a>
      <a role="button" class="c-navbar__item">About</a>
      <a role="button" class="c-navbar__item">Work</a>
      <a role="button" class="c-navbar__item">Shop</a>
      <a role="button" class="c-navbar__item">Blog</a>
      <a role="button" class="c-navbar__item">Contact</a>
    </div>
  </nav>
</div>

```html
<nav class="c-navbar">
  <div class="c-navbar__left is-auto">
      <a role="button" class="c-navbar__item">
          <img src="images/logo-head.png" alt="">
      </a>
  </div>
  <div class="c-navbar__right is-fixed">
    <a role="button" class="c-navbar__item">Home</a>
    <a role="button" class="c-navbar__item">About</a>
    <a role="button" class="c-navbar__item">Work</a>
    <a role="button" class="c-navbar__item">Shop</a>
    <a role="button" class="c-navbar__item">Blog</a>
    <a role="button" class="c-navbar__item">Contact</a>
  </div>
</nav>
```

***

<div class="u-mb-15">
  <nav class="c-navbar">
      <div class="c-navbar__center">
        <a role="button" class="c-navbar__item">
            <img src="{{site.url}}images/logo.png" width="40" height="40">
        </a>
      </div>
      <div class="c-navbar__left">
        <a role="button" class="c-navbar__item">APPS</a>
        <a role="button" class="c-navbar__item">TECH</a>
        <a role="button" class="c-navbar__item">CREATIVE</a>
        <a role="button" class="c-navbar__item">INSIGHTS</a>
      </div>
      <div class="c-navbar__right">
        <div class="c-navbar__item">
          <form action="#" class="form-inline">
            <div class="form-group">
              <input type="text" class="form-input" placeholder="Search...">
            </div>
          </form>
        </div>
        <div class="c-navbar__item">
          <a role="button" class="btn btn--primary btn--outline">SIGN IN</a>
        </div>
      </div>
  </nav>
</div>
