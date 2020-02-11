---
layout: master
title: "Button"
catalogue:
  - Basic
  - Variants
  - State
  - Sizing
  - Block
  - Group
---

# Button

## Basic

<button class="btn">Button</button>

```html
<button class="btn">Button</button>
```

## Variants

<div class="mb-6">
  <button class="btn btn--primary">Primary</button>
  <button class="btn btn--info">Info</button>
  <button class="btn btn--success">Success</button>
  <button class="btn btn--danger">Danger</button>
  <button class="btn btn--warning">Warning</button>
  <button class="btn btn--black">Black</button>
  <button class="btn btn--dark">Dark</button>
  <button class="btn btn--white">White</button>
</div>

```html
<button class="btn btn--primary">Primary</button>
<button class="btn btn--info">Info</button>
<button class="btn btn--success">Success</button>
<button class="btn btn--danger">Danger</button>
<button class="btn btn--warning">Warning</button>
<button class="btn btn--black">Black</button>
<button class="btn btn--dark">Dark</button>
<button class="btn btn--white">White</button>
```

##### Outline

By adding the `.btn--outline` modifier class on any predefined button element to remove background color

<div class="mb-6">
  <button class="btn btn--outline btn--primary">Primary</button>
  <button class="btn btn--outline btn--info">Info</button>
  <button class="btn btn--outline btn--success">Success</button>
  <button class="btn btn--outline btn--danger">Danger</button>
  <button class="btn btn--outline btn--warning">Warning</button>
  <button class="btn btn--outline btn--black">Black</button>
  <button class="btn btn--outline btn--dark">Dark</button>
  <button class="btn btn--outline btn--white">White</button>
</div>

```html
<button class="btn btn--outline btn--primary">Primary</button>
<button class="btn btn--outline btn--info">Info</button>
<button class="btn btn--outline btn--success">Success</button>
<button class="btn btn--outline btn--danger">Danger</button>
<button class="btn btn--outline btn--warning">Warning</button>
<button class="btn btn--outline btn--black">Black</button>
<button class="btn btn--outline btn--dark">Dark</button>
<button class="btn btn--outline btn--white">White</button>
```

## State

<div class="mb-6">
  <button class="btn" disabled>Disabled</button>
  <button class="btn btn--primary" disabled>Disabled</button>
  <button class="btn btn--primary btn--outline" disabled>Disabled</button>
</div>


```html
<button class="btn" disabled>Disabled</button>
<button class="btn btn--primary" disabled>Disabled</button>
<button class="btn btn--primary btn--outline" disabled>Disabled</button>
```

##### Loading

<div class="mb-6">
  <button class="btn btn--loose is-loading">Loading</button>
  <button class="btn btn--primary btn--loose is-loading" disabled>Loading</button>
</div>

```html
<button class="btn btn--loose is-loading">Loading</button>
<button class="btn btn--primary btn--loose is-loading" disabled>Loading</button>
```

## Sizing

Add `.btn--sm` or `.btn--lg` modifier class to quickly create different size button

<div class="mb-6">
  <button class="btn btn--sm">Small Button</button>
  <button class="btn">Default Size</button>
  <button class="btn btn--lg">Large Button</button>
</div>

```html
<button class="btn btn--sm">Small Button</button>
<button class="btn">Default Size</button>
<button class="btn btn--lg">Large Button</button>
```

## Block

By adding `.btn--block` modifier class to quickly create block level button

<div class="mb-6">
  <button class="btn btn--block btn--lg">Block Button</button>
</div>

```html
<button class="btn btn--block btn--lg">Block Button</button>
```

## Group

Buttons can be grouped by placing multiple `.btn` elements into a `.btn-group` container element

<div class="mb-6">
  <div class="btn-group">
    <button class="btn">Left</button>
    <button class="btn">Middle</button>
    <button class="btn">Right</button>
  </div>
</div>

```html
<div class="btn-group">
  <button class="btn">Left</button>
  <button class="btn">Middle</button>
  <button class="btn">Right</button>
</div>
```
