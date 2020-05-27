---
layout: master
title: "Badge"
catalogue:
  - Basic
  - Variants
  - Linked
  - Position
---

# Badge

## Basic
<div class="level mb-6">
  <div class="level__item">
    <span class="badge">Badge</span>
  </div>
  <div class="level__item">
    <button class="btn">
      <div class="flex items-center">
        <span>Messages</span>
        <span class="ml-3 badge badge--danger">12</span>
      </div>
    </button>
  </div>
  <div class="level__item">
    <h3 class="m-0">Heading<sup class="badge badge--info">New</sup></h3>
  </div>
</div>

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

## Variants

<div class="mb-6">
  <span class="badge badge--primary">Primary</span>
  <span class="badge badge--info">Info</span>
  <span class="badge badge--success">Success</span>
  <span class="badge badge--danger">Danger</span>
  <span class="badge badge--warning">Warning</span>
  <span class="badge badge--black">Black</span>
  <span class="badge badge--dark">Dark</span>
  <span class="badge badge--light">Light</span>
  <span class="badge badge--white">White</span>
</div>

```html
<span class="badge badge--primary">Primary</span>
<span class="badge badge--info">Info</span>
<span class="badge badge--success">Success</span>
<span class="badge badge--danger">Danger</span>
<span class="badge badge--warning">Warning</span>
<span class="badge badge--black">Black</span>
<span class="badge badge--dark">Dark</span>
<span class="badge badge--light">Light</span>
<span class="badge badge--white">White</span>
```

##### Empty badge

<div class="mb-6">
  <span class="badge"></span>
  <span class="badge badge--primary"></span>
  <span class="badge badge--info"></span>
  <span class="badge badge--success"></span>
  <span class="badge badge--danger"></span>
  <span class="badge badge--warning"></span>
</div>

```html
<span class="badge"></span>
<span class="badge badge--primary"></span>
<span class="badge badge--info"></span>
<span class="badge badge--success"></span>
<span class="badge badge--danger"></span>
<span class="badge badge--warning"></span>
```

## Linked

<div class="mb-6">
  <a class="badge badge--link">Badge</a>
  <a class="badge badge--primary badge--link">Primary</a>
  <a class="badge badge--info badge--link">Info</a>
  <a class="badge badge--success badge--link">Success</a>
  <a class="badge badge--danger badge--link">Danger</a>
  <a class="badge badge--warning badge--link">Warning</a>
</div>

```html
<a class="badge badge--link">Badge</a>
<a class="badge badge--primary badge--link">Primary</a>
<a class="badge badge--info badge--link">Info</a>
<a class="badge badge--success badge--link">Success</a>
<a class="badge badge--danger badge--link">Danger</a>
<a class="badge badge--warning badge--link">Warning</a>
```

## Position
By composing with other components, you can specify the position of badge.

<div class="mb-6">
  <button class="btn btn--lose">
    <span>Messages</span>
    <span class="badge badge--danger badge--rt">99</span>
  </button>
</div>

```html
<button class="btn btn--lose">
  <span>Messages</span>
  <span class="badge badge--danger badge--rt">99</span>
</button>
```
