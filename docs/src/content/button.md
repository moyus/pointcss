---
layout: master
title: Button
path: [Components, Button]
catalogue:
  - Basic
  - Variant
  - State
  - Sizing
  - Block
  - Group
---

# Button

## Basic

<section class="snippet">
  <div class="snippet__preview">
    <button class="btn">Button</button>
  </div>
  <div class="snippet__source">

```html
<button class="btn">Button</button>
```

  </div>
</section>

## Variant

<section class="snippet">
  <div class="snippet__preview">
    <div class="inline-list">
      <button class="btn btn--black">Black</button>
      <button class="btn btn--dark">Dark</button>
      <button class="btn btn--light">Light</button>
      <button class="btn btn--white">White</button>
      <button class="btn btn--link">Link</button>
      <button class="btn btn--icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line></svg>
      </button>
      <div class="flex-break"></div>
      <button class="btn btn--primary">Primary</button>
      <button class="btn btn--info">Info</button>
      <button class="btn btn--success">Success</button>
      <button class="btn btn--danger">Danger</button>
      <button class="btn btn--warning">Warning</button>
    </div>
  </div>
  <div class="snippet__source">

```html
<button class="btn btn--black">Black</button>
<button class="btn btn--dark">Dark</button>
<button class="btn btn--light">Light</button>
<button class="btn btn--white">White</button>
<button class="btn btn--link">Link</button>
<button class="btn btn--icon">...</button>
<button class="btn btn--primary">Primary</button>
<button class="btn btn--info">Info</button>
<button class="btn btn--success">Success</button>
<button class="btn btn--danger">Danger</button>
<button class="btn btn--warning">Warning</button>
```

  </div>
</section>

##### Outline

By adding the `.btn--outline` modifier class on any predefined button element to remove background color

<section class="snippet">
  <div class="snippet__preview">
    <button class="btn btn--outline btn--primary">Primary</button>
    <button class="btn btn--outline btn--info">Info</button>
    <button class="btn btn--outline btn--success">Success</button>
    <button class="btn btn--outline btn--danger">Danger</button>
    <button class="btn btn--outline btn--warning">Warning</button>
    <button class="btn btn--outline btn--black">Black</button>
    <button class="btn btn--outline btn--dark">Dark</button>
    <button class="btn btn--outline btn--light">Light</button>
    <button class="btn btn--outline btn--white">White</button>
  </div>
  <div class="snippet__source">

```html
<button class="btn btn--outline btn--primary">Primary</button>
<button class="btn btn--outline btn--info">Info</button>
<button class="btn btn--outline btn--success">Success</button>
<button class="btn btn--outline btn--danger">Danger</button>
<button class="btn btn--outline btn--warning">Warning</button>
<button class="btn btn--outline btn--black">Black</button>
<button class="btn btn--outline btn--dark">Dark</button>
<button class="btn btn--outline btn--light">Light</button>
<button class="btn btn--outline btn--white">White</button>
```

  </div>
</section>

## State

<section class="snippet">
  <div class="snippet__preview">
    <button class="btn" disabled>Disabled</button>
    <button class="btn btn--primary" disabled>Disabled</button>
    <button class="btn btn--primary btn--outline" disabled>Disabled</button>
  </div>
  <div class="snippet__source">

```html
<button class="btn" disabled>Disabled</button>
<button class="btn btn--primary" disabled>Disabled</button>
<button class="btn btn--primary btn--outline" disabled>Disabled</button>
```

  </div>
</section>

##### Loading

<section class="snippet">
  <div class="snippet__preview">
    <button class="btn btn--loose is-loading">Loading</button>
    <button class="btn btn--primary btn--loose is-loading" disabled>Loading</button>
  </div>
  <div class="snippet__source">

```html
<button class="btn btn--loose is-loading">Loading</button>
<button class="btn btn--primary btn--loose is-loading" disabled>Loading</button>
```

  </div>
</section>

## Sizing

Add `.btn--sm` or `.btn--lg` modifier class to quickly create different size button

<section class="snippet">
  <div class="snippet__preview">
    <button class="btn btn--sm">Small Button</button>
    <button class="btn">Default Size</button>
    <button class="btn btn--lg">Large Button</button>
  </div>
  <div class="snippet__source">

```html
<button class="btn btn--sm">Small Button</button>
<button class="btn">Default Size</button>
<button class="btn btn--lg">Large Button</button>
```
  </div>
</section>

## Block

By adding `.btn--block` modifier class to quickly create block level button

<section class="snippet">
  <div class="snippet__preview">
    <button class="btn btn--block btn--lg">Block Button</button>
  </div>
  <div class="snippet__source">

```html
<button class="btn btn--block btn--lg">Block Button</button>
```

  </div>
</section>

## Group

Buttons can be grouped by placing multiple `.btn` elements into a `.btn-group` container element

<section class="snippet">
  <div class="snippet__preview">
    <div class="btn-group">
      <button class="btn">Left</button>
      <button class="btn">Middle</button>
      <button class="btn">Right</button>
    </div>
  </div>
  <div class="snippet__source">

```html
<div class="btn-group">
  <button class="btn">Left</button>
  <button class="btn">Middle</button>
  <button class="btn">Right</button>
</div>
```

  </div>
</section>
