---
layout: master
title: "Buttons"
---

# Buttons
- [Types](#types)
- [Outline](#outline)
- [States](#states)
- [Sizes](#sizes)
- [Block](#block)
- [Group](#group)

## Types
There are seven predefined button styles.

<div class="u-mb-15">
  <button class="btn">Button</button>
  <button class="u-mb-5 btn btn--ghost">Ghost</button>
  <button class="u-mb-5 btn btn--primary">Primary</button>
  <button class="u-mb-5 btn btn--info">Info</button>
  <button class="u-mb-5 btn btn--success">Success</button>
  <button class="u-mb-5 btn btn--danger">Danger</button>
  <button class="u-mb-5 btn btn--warning">Warning</button>
</div>

```html
<button class="btn">Button</button>
<button class="btn btn--ghost">Ghost</button>
<button class="btn btn--primary">Primary</button>
<button class="btn btn--info">Info</button>
<button class="btn btn--success">Success</button>
<button class="btn btn--danger">Danger</button>
<button class="btn btn--warning">Warning</button>
```

## Outline
By adding the `.btn--outline` modifier class on any predefined button element to
remove background color.

<div class="u-mb-15">
  <button class="u-mb-5 btn btn--outline btn--primary">Primary</button>
  <button class="u-mb-5 btn btn--outline btn--info">Info</button>
  <button class="u-mb-5 btn btn--outline btn--success">Success</button>
  <button class="u-mb-5 btn btn--outline btn--danger">Danger</button>
  <button class="u-mb-5 btn btn--outline btn--warning">Warning</button>
</div>

```html
<button class="btn btn--outline btn--primary">Primary</button>
<button class="btn btn--outline btn--info">Info</button>
<button class="btn btn--outline btn--success">Success</button>
<button class="btn btn--outline btn--danger">Danger</button>
<button class="btn btn--outline btn--warning">Warning</button>
```

## States
Make buttons look inactive by adding the `disabled` attrubute.

<div class="u-mb-15">
  <button class="u-mb-5 btn btn--primary" disabled>Disabled</button>
  <button class="u-mb-5 btn btn--info" disabled>Info</button>
</div>


```html
<button class="btn btn--primary" disabled>Primary</button>
<button class="btn btn--info" disabled>Info</button>
```

***
Make buttons look loading by adding the `.is-loading` class to `.btn` element.

<div class="u-mb-15">
  <button class="u-mb-5 btn btn--info btn--smart is-loading">Loading</button>
  <button class="u-mb-5 btn btn--info btn--smart is-loading" disabled>Loading</button>
</div>

```html
<button class="btn btn--info btn--smart is-loading">Loading</button>
<button class="btn btn--info btn--smart is-loading" disabled>Loading</button>
```

## Sizes
Add `.btn--sm` or `.btn--lg` modifier class to quickly create different size button

<div class="u-mb-15">
  <button class="u-mb-5 btn btn--ghost btn--sm">Small Button</button>
  <button class="u-mb-5 btn btn--ghost">Default Size</button>
  <button class="u-mb-5 btn btn--ghost btn--lg">Large Button</button>
</div>

```html
<button class="btn btn--ghost btn--sm">Small Button</button>
<button class="btn btn--ghost">Default Size</button>
<button class="btn btn--ghost btn--lg">Large Button</button>
```

## Block
By adding `.btn--block` modifier class to quickly create block level button

<div class="u-mb-15">
  <button class="btn btn--primary btn--block btn--lg">Block Button</button>
</div>

```html
<button class="btn btn--primary btn--block btn--lg">Block Button</button>
```

## Group
Buttons can be grouped by placing multiple `.btn` elements into a `.btn-group`
container element

<div class="u-mb-15">
  <div class="btn-group">
    <button class="u-mb-5 btn btn--primary btn--outline">Left</button>
    <button class="u-mb-5 btn btn--primary btn--outline">Middle</button>
    <button class="u-mb-5 btn btn--primary btn--outline">Right</button>
  </div>
</div>

```html
<div class="btn-group">
  <button class="btn btn--primary btn--outline">Left</button>
  <button class="btn btn--primary btn--outline">Middle</button>
  <button class="btn btn--primary btn--outline">Right</button>
</div>
```
