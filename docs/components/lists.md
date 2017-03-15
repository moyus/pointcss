---
layout: default
title: "Lists"
---

# Lists
- [Basic](#basic)
- [Inset](#inset)
- [Bordered](#bordered)
- [Linked](#linked)
- [Sizes](#sizes)

## Basic
List component provide basic styled list, but it also can be extended to
display complex content.

<div class="l-row">
  <div class="l-col-6@md">
    <ul class="c-list">
      <li class="c-list__item">1. Active</li>
      <li class="c-list__item">2. Dapibus ac facilisis in</li>
      <li class="c-list__item">3. Morbi leo risus</li>
      <li class="c-list__item is-disabled">4. Disabled</li>
      <li class="c-list__item">5. Vestibulum at eros</li>
    </ul>
  </div>
</div>

```html
<ul class="c-list">
  <li class="c-list__item">1. Active</li>
  <li class="c-list__item">2. Dapibus ac facilisis in</li>
  <li class="c-list__item">3. Morbi leo risus</li>
  <li class="c-list__item is-disabled">4. Disabled</li>
  <li class="c-list__item">5. Vestibulum at eros</li>
</ul>
```

## Inset List
By adding the `.c-list--inset` modifier class on `.c-list`
container to create a inset list, so you can use it as inner content of other components.

<div class="l-row">
  <div class="l-col-6@md">
    <ul class="c-list c-list--inset">
      <li class="c-list__item">1. Active</li>
      <li class="c-list__item">2. Dapibus ac facilisis in</li>
      <li class="c-list__item">3. Morbi leo risus</li>
      <li class="c-list__item is-disabled">4. Disabled</li>
      <li class="c-list__item">5. Vestibulum at eros</li>
    </ul>
  </div>
  <div class="l-col-6@md">
    <div class="c-box">
      <header class="c-box__header">List in Box</header>
      <div class="c-box__body">
        <ul class="c-list c-list--inset u-mb-0">
          <li class="c-list__item">1. Active</li>
          <li class="c-list__item">2. Dapibus ac facilisis in</li>
          <li class="c-list__item">3. Morbi leo risus</li>
          <li class="c-list__item is-disabled">4. Disabled</li>
          <li class="c-list__item">5. Vestibulum at eros</li>
        </ul>
      </div>
    </div>
  </div>
</div>

```html
<ul class="c-list c-list--inset">
  <li class="c-list__item">1. Active</li>
  <li class="c-list__item">2. Dapibus ac facilisis in</li>
  <li class="c-list__item">3. Morbi leo risus</li>
  <li class="c-list__item is-disabled">4. Disabled</li>
  <li class="c-list__item">5. Vestibulum at eros</li>
</ul>

<div class="c-box">
  <header class="c-box__header">List in Box</header>
  <div class="c-box__body">
    <ul class="c-list c-list--inset u-mb-0">
      <li class="c-list__item">1. Active</li>
      <li class="c-list__item">2. Dapibus ac facilisis in</li>
      <li class="c-list__item">3. Morbi leo risus</li>
      <li class="c-list__item is-disabled">4. Disabled</li>
      <li class="c-list__item">5. Vestibulum at eros</li>
    </ul>
  </div>
</div>
```

## Bordered List
By adding the `.c-list--bordered` modifier class on `.c-list`
container, you can easily create a borderd list style.

<div class="l-row">
  <div class="l-col-6@md">
    <ul class="c-list c-list--bordered">
      <li class="c-list__item">1. Active</li>
      <li class="c-list__item">2. Dapibus ac facilisis in</li>
      <li class="c-list__item">3. Morbi leo risus</li>
      <li class="c-list__item is-disabled">4. Disabled</li>
      <li class="c-list__item">5. Vestibulum at eros</li>
    </ul>
  </div>
</div>

```html
<ul class="c-list c-list--bordered">
  <li class="c-list__item">1. Active</li>
  <li class="c-list__item">2. Dapibus ac facilisis in</li>
  <li class="c-list__item">3. Morbi leo risus</li>
  <li class="c-list__item is-disabled">4. Disabled</li>
  <li class="c-list__item">5. Vestibulum at eros</li>
</ul>
```

## Linked List
To quick create linkify list by using `<a>` tag and child `.c-list__link` class.

<div class="l-row">
  <div class="l-col-6@md">
    <div class="c-list c-list--bordered c-list--lg">
      <a class="c-list__link">1. Dapibus ac facilisis in</a>
      <a class="c-list__link is-active">2. Active</a>
      <a class="c-list__link">3. Morbi leo risus</a>
      <a class="c-list__link is-disabled">4. Disabled</a>
      <a class="c-list__link">5. Vestibulum at eros</a>
    </div>
  </div>
</div>

```html
<div class="c-list c-list--bordered c-list--lg">
  <a class="c-list__link">1. Dapibus ac facilisis in</a>
  <a class="c-list__link is-active">2. Active</a>
  <a class="c-list__link">3. Morbi leo risus</a>
  <a class="c-list__link is-disabled">4. Disabled</a>
  <a class="c-list__link">5. Vestibulum at eros</a>
</div>
```

## Sizes
List has a default size, but you can use `.c-list--sm`, `.c-list--lg`
modifier classes on `.c-list` container to change list size.

<div class="l-row">
  <div class="l-col-4@md">
    <ul class="c-list c-list--bordered c-list--sm">
      <li class="c-list__item">1. Active</li>
      <li class="c-list__item">2. Dapibus ac facilisis in</li>
      <li class="c-list__item">3. Morbi leo risus</li>
      <li class="c-list__item is-disabled">4. Disabled</li>
      <li class="c-list__item">5. Vestibulum at eros</li>
    </ul>
  </div>
  <div class="l-col-4@md">
    <ul class="c-list c-list--bordered">
      <li class="c-list__item">1. Active</li>
      <li class="c-list__item">2. Dapibus ac facilisis in</li>
      <li class="c-list__item">3. Morbi leo risus</li>
      <li class="c-list__item is-disabled">4. Disabled</li>
      <li class="c-list__item">5. Vestibulum at eros</li>
    </ul>
  </div>
  <div class="l-col-4@md">
    <ul class="c-list c-list--bordered c-list--lg">
      <li class="c-list__item">1. Active</li>
      <li class="c-list__item">2. Dapibus ac facilisis in</li>
      <li class="c-list__item">3. Morbi leo risus</li>
      <li class="c-list__item is-disabled">4. Disabled</li>
      <li class="c-list__item">5. Vestibulum at eros</li>
    </ul>
  </div>
</div>

```html
<ul class="c-list c-list--bordered c-list--sm">
  <li class="c-list__item">1. Active</li>
  <li class="c-list__item">2. Dapibus ac facilisis in</li>
  <li class="c-list__item">3. Morbi leo risus</li>
  <li class="c-list__item is-disabled">4. Disabled</li>
  <li class="c-list__item">5. Vestibulum at eros</li>
</ul>

<ul class="c-list c-list--bordered">
  <li class="c-list__item">1. Active</li>
  <li class="c-list__item">2. Dapibus ac facilisis in</li>
  <li class="c-list__item">3. Morbi leo risus</li>
  <li class="c-list__item is-disabled">4. Disabled</li>
  <li class="c-list__item">5. Vestibulum at eros</li>
</ul>

<ul class="c-list c-list--bordered c-list--lg">
  <li class="c-list__item">1. Active</li>
  <li class="c-list__item">2. Dapibus ac facilisis in</li>
  <li class="c-list__item">3. Morbi leo risus</li>
  <li class="c-list__item is-disabled">4. Disabled</li>
  <li class="c-list__item">5. Vestibulum at eros</li>
</ul>
```
