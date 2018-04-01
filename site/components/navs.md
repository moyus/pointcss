---
layout: default
title: "Navs"
---

# Navs
- [Basic](#basic)
- [Menus](#menus)
- [Pills](#pills)
- [Tabs](#tabs)

## Basic
The basic **Nav** just remove default list style. You can easily extend it to create your own content navigation and keep the code style consistent.

<div class="u-mb-15">
  <ul class="nav">
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
</div>

```html
<ul class="nav">
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
```

## Menus

<div class="l-row">
  <div class="l-col-6@md">
    <ul class="nav nav--menus u-mb-15">
      <li class="nav__item">
        <a href="#" class="nav__link is-active">Home</a>
      </li>
      <li class="nav__item">
        <a href="#" class="nav__link">Link</a>
        <ul class="nav nav--menus nav--sm">
          <li class="nav__item">
            <a href="#" class="nav__link">SubItem 1</a>
          </li>
          <li class="nav__item">
            <a href="#" class="nav__link">SubItem 2</a>
          </li>
        </ul>
      </li>
      <li class="nav__item">
        <a href="#" class="nav__link">Another Link</a>
      </li>
      <li class="nav__divider"></li>
      <li class="nav__item">
        <a href="#" class="nav__link is-disabled">Disabled</a>
      </li>
    </ul>
  </div>
</div>

```html
<ul class="nav nav--menus">
  <li class="nav__item">
    <a href="#" class="nav__link is-active">Home</a>
  </li>
  <li class="nav__item">
    <a href="#" class="nav__link">Link</a>
    <ul class="nav nav--menus nav--sm">
      <li class="nav__item">
        <a href="#" class="nav__link">SubItem 1</a>
      </li>
      <li class="nav__item">
        <a href="#" class="nav__link">SubItem 2</a>
      </li>
    </ul>
  </li>
  <li class="nav__item">
    <a href="#" class="nav__link">Another Link</a>
  </li>
  <li class="nav__divider"></li>
  <li class="nav__item">
    <a href="#" class="nav__link is-disabled">Disabled</a>
  </li>
</ul>
```

## Pills Nav

<div class="u-mb-15">
  <ul class="nav nav--pills">
    <li class="nav__item">
      <a href="#" class="nav__link is-active">Home</a>
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
</div>

```html
<ul class="nav nav--pills">
  <li class="nav__item">
    <a href="#" class="nav__link is-active">Home</a>
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

## Tabs Nav

<div class="u-mb-15">
  <ul class="nav nav--tabs">
    <li class="nav__item">
      <a href="#" class="nav__link is-active">Home</a>
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
</div>

```html
<ul class="nav nav--tabs">
  <li class="nav__item">
    <a href="#" class="nav__link is-active">Home</a>
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
