---
layout: master
title: "List"
catalogue:
  - Basic
  - Inset
  - Bordered
  - Linked
  - Sizing
---

# List

Provide basic styled list, but it also can be extended to display complex content.

## Basic

<section class="snippet">
  <div class="snippet__preview">
    <ul class="list">
      <li class="list__item">1. Active</li>
      <li class="list__item">2. Dapibus ac facilisis in</li>
      <li class="list__item">3. Morbi leo risus</li>
      <li class="list__item">4. Disabled</li>
      <li class="list__item">5. Vestibulum at eros</li>
    </ul>
  </div>
  <div class="snippet__source">

```html
<ul class="list">
  <li class="list__item">1. Active</li>
  <li class="list__item">2. Dapibus ac facilisis in</li>
  <li class="list__item">3. Morbi leo risus</li>
  <li class="list__item">4. Disabled</li>
  <li class="list__item">5. Vestibulum at eros</li>
</ul>
```

  </div>
</section>

## Inset

By adding the `.list--inset` modifier class on `.list` container to create a inset list, so you can use it as inner content of other components.

<section class="snippet">
  <div class="snippet__preview">
    <ul class="list list--inset">
      <li class="list__item">1. Active</li>
      <li class="list__item">2. Dapibus ac facilisis in</li>
      <li class="list__item">3. Morbi leo risus</li>
      <li class="list__item">4. Disabled</li>
      <li class="list__item">5. Vestibulum at eros</li>
    </ul>
  </div>
  <div class="snippet__source">

```html
<ul class="list list--inset">
  <li class="list__item">1. Active</li>
  <li class="list__item">2. Dapibus ac facilisis in</li>
  <li class="list__item">3. Morbi leo risus</li>
  <li class="list__item">4. Disabled</li>
  <li class="list__item">5. Vestibulum at eros</li>
</ul>
```

  </div>
</section>

<section class="snippet">
  <div class="snippet__preview">
    <div class="box">
      <header class="box__header">List in Box</header>
      <div class="box__body">
        <ul class="list list--inset mb-0">
          <li class="list__item">1. Active</li>
          <li class="list__item">2. Dapibus ac facilisis in</li>
          <li class="list__item">3. Morbi leo risus</li>
          <li class="list__item">4. Disabled</li>
          <li class="list__item">5. Vestibulum at eros</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="snippet__source">

```html
<div class="box">
  <header class="box__header">List in Box</header>
  <div class="box__body">
    <ul class="list list--inset mb-0">
      <li class="list__item">1. Active</li>
      <li class="list__item">2. Dapibus ac facilisis in</li>
      <li class="list__item">3. Morbi leo risus</li>
      <li class="list__item">4. Disabled</li>
      <li class="list__item">5. Vestibulum at eros</li>
    </ul>
  </div>
</div>
```

  </div>
</section>

## Bordered

By adding the `.list--bordered` modifier class on `.list` container, you can easily create a borderd list style or remove all borders by adding the `.list--borderless` modifier class.

<section class="snippet">
  <div class="snippet__preview">
    <ul class="list list--bordered">
      <li class="list__item">1. Active</li>
      <li class="list__item">2. Dapibus ac facilisis in</li>
      <li class="list__item">3. Morbi leo risus</li>
      <li class="list__item">4. Disabled</li>
      <li class="list__item">5. Vestibulum at eros</li>
    </ul>
  </div>
  <div class="snippet__source">

```html
<ul class="list list--bordered">
  <li class="list__item">1. Active</li>
  <li class="list__item">2. Dapibus ac facilisis in</li>
  <li class="list__item">3. Morbi leo risus</li>
  <li class="list__item">4. Disabled</li>
  <li class="list__item">5. Vestibulum at eros</li>
</ul>
```

  </div>
</section>

By adding the `.list--borderless` modifier clas on `.list` container to remove any borders.

<section class="snippet">
  <div class="snippet__preview">
    <ul class="list list--borderless">
      <li class="list__item">1. Active</li>
      <li class="list__item">2. Dapibus ac facilisis in</li>
      <li class="list__item">3. Morbi leo risus</li>
      <li class="list__item">4. Disabled</li>
      <li class="list__item">5. Vestibulum at eros</li>
    </ul>
  </div>
  <div class="snippet__source">

```html
<ul class="list list--borderless">
  <li class="list__item">1. Active</li>
  <li class="list__item">2. Dapibus ac facilisis in</li>
  <li class="list__item">3. Morbi leo risus</li>
  <li class="list__item">4. Disabled</li>
  <li class="list__item">5. Vestibulum at eros</li>
</ul>
```

  </div>
</section>

## Linked

To quick create linkify list by using `<a>` tag and child `.list__link` class.

<section class="snippet">
  <div class="snippet__preview">
    <div class="list list--bordered list--lg">
      <a class="list__link">1. Dapibus ac facilisis in</a>
      <a class="list__link is-active">2. Active</a>
      <a class="list__link">3. Morbi leo risus</a>
      <a class="list__link">4. Disabled</a>
      <a class="list__link">5. Vestibulum at eros</a>
    </div>
  </div>
  <div class="snippet__source">

```html
<div class="list list--bordered list--lg">
  <a class="list__link">1. Dapibus ac facilisis in</a>
  <a class="list__link is-active">2. Active</a>
  <a class="list__link">3. Morbi leo risus</a>
  <a class="list__link">4. Disabled</a>
  <a class="list__link">5. Vestibulum at eros</a>
</div>
```

  </div>
</section>

## Sizing

Use `.list--sm`, `.list--lg` modifier classes on `.list` container to change size

##### Small

<section class="snippet">
  <div class="snippet__preview">
    <ul class="list list--bordered list--sm">
      <li class="list__item">1. Active</li>
      <li class="list__item">2. Dapibus ac facilisis in</li>
      <li class="list__item">3. Morbi leo risus</li>
      <li class="list__item">4. Disabled</li>
      <li class="list__item">5. Vestibulum at eros</li>
    </ul>
  </div>
  <div class="snippet__source">

```html
<ul class="list list--bordered list--sm">
  <li class="list__item">1. Active</li>
  <li class="list__item">2. Dapibus ac facilisis in</li>
  <li class="list__item">3. Morbi leo risus</li>
  <li class="list__item is-disabled">4. Disabled</li>
  <li class="list__item">5. Vestibulum at eros</li>
</ul>
```

  </div>
</section>

##### Large

<section class="snippet">
  <div class="snippet__preview">
    <ul class="list list--bordered list--lg">
      <li class="list__item">1. Active</li>
      <li class="list__item">2. Dapibus ac facilisis in</li>
      <li class="list__item">3. Morbi leo risus</li>
      <li class="list__item">4. Disabled</li>
      <li class="list__item">5. Vestibulum at eros</li>
    </ul>
  </div>
  <div class="snippet__source">

```html
<ul class="list list--bordered list--lg">
  <li class="list__item">1. Active</li>
  <li class="list__item">2. Dapibus ac facilisis in</li>
  <li class="list__item">3. Morbi leo risus</li>
  <li class="list__item">4. Disabled</li>
  <li class="list__item">5. Vestibulum at eros</li>
</ul>
```

  </div>
</section>
