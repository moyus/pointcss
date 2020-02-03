---
layout: master
title: "Navbar"
---

# Navbar
- [Basic](#basic)
- [Theme](#theme)

## Basic

Structure:
- `.navbar`
  -  `.navbar__start`, `.navbar__end`
    - `.navbar__item`

<div class="u-mb-15">
  <nav class="navbar">
    <div class="navbar__start">
        <a role="button" class="navbar__item navbar__brand">Point</a>
    </div>
    <div class="navbar__end">
      <a role="button" class="navbar__item">Home</a>
      <a role="button" class="navbar__item">About</a>
      <a role="button" class="navbar__item">Work</a>
      <a role="button" class="navbar__item">Shop</a>
      <a role="button" class="navbar__item">Blog</a>
      <a role="button" class="navbar__item">Contact</a>
    </div>
  </nav>
</div>

```html
<nav class="navbar">
  <div class="navbar__start">
      <a role="button" class="navbar__item navbar__brand">Point</a>
  </div>
  <div class="navbar__end">
    <a role="button" class="navbar__item">Home</a>
    <a role="button" class="navbar__item">About</a>
    <a role="button" class="navbar__item">Work</a>
    <a role="button" class="navbar__item">Shop</a>
    <a role="button" class="navbar__item">Blog</a>
    <a role="button" class="navbar__item">Contact</a>
  </div>
</nav>
```

## Theme

Chose `.navbar--light` for use with light background colors, or `.navbar--dark` for dark background colors.

<div class="u-mb-15">
  <nav class="navbar navbar--light u-bg-primary">
    <div class="navbar__start">
        <a role="button" class="navbar__item navbar__brand">Point</a>
    </div>
    <div class="navbar__end">
      <a role="button" class="navbar__item">Home</a>
      <a role="button" class="navbar__item">About</a>
      <a role="button" class="navbar__item">Work</a>
      <a role="button" class="navbar__item">Shop</a>
      <a role="button" class="navbar__item">Blog</a>
      <a role="button" class="navbar__item">Contact</a>
    </div>
  </nav>
</div>

```html
<nav class="navbar navbar--light u-bg-primary">
  ...
</nav>
```

---
<div class="u-mb-15">
  <nav class="navbar navbar--dark" style="background-color: #333;">
    <div class="navbar__start">
        <a role="button" class="navbar__item navbar__brand">Point</a>
    </div>
    <div class="navbar__end">
      <a role="button" class="navbar__item">Home</a>
      <a role="button" class="navbar__item">About</a>
      <a role="button" class="navbar__item">Work</a>
      <a role="button" class="navbar__item">Shop</a>
      <a role="button" class="navbar__item">Blog</a>
      <a role="button" class="navbar__item">Contact</a>
    </div>
  </nav>
</div>

```html
<nav class="navbar navbar--dark" style="background-color: #333;">
  ...
</nav>
```
