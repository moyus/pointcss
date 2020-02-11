---
layout: master
title: "Nav"
catalogue:
  - Basic
  - Variants
  - Sizing
  - Placement
---

# Nav

Generic content navigation.

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

## Variants

### Rails

By adding `.nav--rails` modifier class on `.nav` element to create rails styled nav

<ul class="nav nav--rails mb-6">
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
<ul class="nav nav--rails">
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

By adding `.nav--pills` modifier class on `.nav` element to create pills styled nav

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

### Tabs

By adding `.nav--tabs` modifier class on `.nav` element to create tabs styled nav

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

## Sizing

All variants can combile with sizing modifier classes to change nav size

- `.nav--sm`
- `.nav--lg`

##### Small sizing

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

##### Normal sizing

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

##### Large sizing

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

## Placement

All variants can combile with position modifier classes to change nav placement

- `.nav--start`
- `.nav--center`
- `.nav--end`
- `.nav--stretch`

##### Start

<ul class="nav nav--start mb-6">
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
<ul class="nav nav--start">
  ...
</ul>
```

##### Center

<ul class="nav nav--rails nav--center mb-6">
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
<ul class="nav nav--rails nav--center">
  ...
</ul>
```

##### End

<ul class="nav nav--pills nav--end mb-6">
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
<ul class="nav nav--pills nav--end">
  ...
</ul>
```

##### Stretch

<ul class="nav nav--tabs nav--stretch mb-6">
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
<ul class="nav nav--tabs nav--stretch">
  ...
</ul>
```
