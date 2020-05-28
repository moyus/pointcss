---
layout: master
title: "Nav"
catalogue:
  - Basic
  - Layout
  - Variant
  - Sizing
---

# Nav

Provide horizontal navigation for content.

## Basic

<ul class="nav mb-6">
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

## Layout

##### Align center

Add `.nav--center` modifier class on `.nav` container.

<ul class="nav nav--center mb-6">
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

##### Align end

Add `.nav--end` modifier class on `.nav` container.

<ul class="nav nav--end mb-6">
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

##### Stretch

Add `.nav--stretch` modifier class on `.nav` container.

<ul class="nav nav--stretch mb-6">
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

```html
<ul class="nav nav--stretch">
  ...
</ul>
```

### Align between

<ul class="nav nav--between mb-6">
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

## Variant

### Tabs

By adding `.nav--tabs` modifier class on `.nav` element to create tabs styled nav list.

<ul class="nav nav--tabs mb-6">
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

### Pills

By adding `.nav--pills` modifier class on `.nav` element to create pills styled nav list.

<ul class="nav nav--pills mb-6">
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

## Sizing

All variants can combile with sizing modifier classes to change nav size

- `.nav--sm`
- `.nav--lg`

##### Small

<ul class="nav nav--sm mb-6">
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

```html
<ul class="nav nav--sm">
  ...
</ul>
```

##### Normal

<ul class="nav mb-6">
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

```html
<ul class="nav">
  ...
</ul>
```

##### Large

<ul class="nav nav--lg mb-6">
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

```html
<ul class="nav nav--lg">
  ...
</ul>
```
