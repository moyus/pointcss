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

<ul class="list">
  <li class="list__item">1. Active</li>
  <li class="list__item">2. Dapibus ac facilisis in</li>
  <li class="list__item">3. Morbi leo risus</li>
  <li class="list__item">4. Disabled</li>
  <li class="list__item">5. Vestibulum at eros</li>
</ul>

```html
<ul class="list">
  <li class="list__item">1. Active</li>
  <li class="list__item">2. Dapibus ac facilisis in</li>
  <li class="list__item">3. Morbi leo risus</li>
  <li class="list__item">4. Disabled</li>
  <li class="list__item">5. Vestibulum at eros</li>
</ul>
```

## Inset

By adding the `.list--inset` modifier class on `.list` container to create a inset list, so you can use it as inner content of other components.

<ul class="list list--inset">
  <li class="list__item">1. Active</li>
  <li class="list__item">2. Dapibus ac facilisis in</li>
  <li class="list__item">3. Morbi leo risus</li>
  <li class="list__item">4. Disabled</li>
  <li class="list__item">5. Vestibulum at eros</li>
</ul>

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

```html
<ul class="list list--inset">
  <li class="list__item">1. Active</li>
  <li class="list__item">2. Dapibus ac facilisis in</li>
  <li class="list__item">3. Morbi leo risus</li>
  <li class="list__item">4. Disabled</li>
  <li class="list__item">5. Vestibulum at eros</li>
</ul>

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

## Bordered
By adding the `.list--bordered` modifier class on `.list` container, you can easily create a borderd list style or remove all borders by adding the `.list--borderless` modifier class.

<ul class="list list--bordered">
  <li class="list__item">1. Active</li>
  <li class="list__item">2. Dapibus ac facilisis in</li>
  <li class="list__item">3. Morbi leo risus</li>
  <li class="list__item">4. Disabled</li>
  <li class="list__item">5. Vestibulum at eros</li>
</ul>

<ul class="list list--borderless">
  <li class="list__item">1. Active</li>
  <li class="list__item">2. Dapibus ac facilisis in</li>
  <li class="list__item">3. Morbi leo risus</li>
  <li class="list__item">4. Disabled</li>
  <li class="list__item">5. Vestibulum at eros</li>
</ul>

```html
<ul class="list list--bordered">
  <li class="list__item">1. Active</li>
  <li class="list__item">2. Dapibus ac facilisis in</li>
  <li class="list__item">3. Morbi leo risus</li>
  <li class="list__item">4. Disabled</li>
  <li class="list__item">5. Vestibulum at eros</li>
</ul>

<ul class="list list--borderless">
  <li class="list__item">1. Active</li>
  <li class="list__item">2. Dapibus ac facilisis in</li>
  <li class="list__item">3. Morbi leo risus</li>
  <li class="list__item">4. Disabled</li>
  <li class="list__item">5. Vestibulum at eros</li>
</ul>
```

## Linked
To quick create linkify list by using `<a>` tag and child `.list__link` class.

<div class="list list--bordered list--lg">
  <a class="list__link">1. Dapibus ac facilisis in</a>
  <a class="list__link is-active">2. Active</a>
  <a class="list__link">3. Morbi leo risus</a>
  <a class="list__link">4. Disabled</a>
  <a class="list__link">5. Vestibulum at eros</a>
</div>

```html
<div class="list list--bordered list--lg">
  <a class="list__link">1. Dapibus ac facilisis in</a>
  <a class="list__link is-active">2. Active</a>
  <a class="list__link">3. Morbi leo risus</a>
  <a class="list__link">4. Disabled</a>
  <a class="list__link">5. Vestibulum at eros</a>
</div>
```

## Sizing

Use `.list--sm`, `.list--lg` modifier classes on `.list` container to change size

<ul class="list list--bordered list--sm">
  <li class="list__item">1. Active</li>
  <li class="list__item">2. Dapibus ac facilisis in</li>
  <li class="list__item">3. Morbi leo risus</li>
  <li class="list__item">4. Disabled</li>
  <li class="list__item">5. Vestibulum at eros</li>
</ul>

<ul class="list list--bordered">
  <li class="list__item">1. Active</li>
  <li class="list__item">2. Dapibus ac facilisis in</li>
  <li class="list__item">3. Morbi leo risus</li>
  <li class="list__item">4. Disabled</li>
  <li class="list__item">5. Vestibulum at eros</li>
</ul>

<ul class="list list--bordered list--lg">
  <li class="list__item">1. Active</li>
  <li class="list__item">2. Dapibus ac facilisis in</li>
  <li class="list__item">3. Morbi leo risus</li>
  <li class="list__item">4. Disabled</li>
  <li class="list__item">5. Vestibulum at eros</li>
</ul>

```html
<ul class="list list--bordered list--sm">
  <li class="list__item">1. Active</li>
  <li class="list__item">2. Dapibus ac facilisis in</li>
  <li class="list__item">3. Morbi leo risus</li>
  <li class="list__item is-disabled">4. Disabled</li>
  <li class="list__item">5. Vestibulum at eros</li>
</ul>

<ul class="list list--bordered">
  <li class="list__item">1. Active</li>
  <li class="list__item">2. Dapibus ac facilisis in</li>
  <li class="list__item">3. Morbi leo risus</li>
  <li class="list__item">4. Disabled</li>
  <li class="list__item">5. Vestibulum at eros</li>
</ul>

<ul class="list list--bordered list--lg">
  <li class="list__item">1. Active</li>
  <li class="list__item">2. Dapibus ac facilisis in</li>
  <li class="list__item">3. Morbi leo risus</li>
  <li class="list__item">4. Disabled</li>
  <li class="list__item">5. Vestibulum at eros</li>
</ul>
```
