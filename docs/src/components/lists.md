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
    <ul class="list">
      <li class="list__item">1. Active</li>
      <li class="list__item">2. Dapibus ac facilisis in</li>
      <li class="list__item">3. Morbi leo risus</li>
      <li class="list__item is-disabled">4. Disabled</li>
      <li class="list__item">5. Vestibulum at eros</li>
    </ul>
  </div>
</div>

```html
<ul class="list">
  <li class="list__item">1. Active</li>
  <li class="list__item">2. Dapibus ac facilisis in</li>
  <li class="list__item">3. Morbi leo risus</li>
  <li class="list__item is-disabled">4. Disabled</li>
  <li class="list__item">5. Vestibulum at eros</li>
</ul>
```

## Inset List
By adding the `.list--inset` modifier class on `.list`
container to create a inset list, so you can use it as inner content of other components.

<div class="l-row">
  <div class="l-col-6@md">
    <ul class="list list--inset">
      <li class="list__item">1. Active</li>
      <li class="list__item">2. Dapibus ac facilisis in</li>
      <li class="list__item">3. Morbi leo risus</li>
      <li class="list__item is-disabled">4. Disabled</li>
      <li class="list__item">5. Vestibulum at eros</li>
    </ul>
  </div>
  <div class="l-col-6@md">
    <div class="box">
      <header class="box__header">List in Box</header>
      <div class="box__body u-p-0">
        <ul class="list list--inset">
          <li class="list__item">1. Active</li>
          <li class="list__item">2. Dapibus ac facilisis in</li>
          <li class="list__item">3. Morbi leo risus</li>
          <li class="list__item is-disabled">4. Disabled</li>
          <li class="list__item">5. Vestibulum at eros</li>
        </ul>
      </div>
    </div>
  </div>
</div>

```html
<ul class="list list--inset">
  <li class="list__item">1. Active</li>
  <li class="list__item">2. Dapibus ac facilisis in</li>
  <li class="list__item">3. Morbi leo risus</li>
  <li class="list__item is-disabled">4. Disabled</li>
  <li class="list__item">5. Vestibulum at eros</li>
</ul>

<div class="box">
  <header class="box__header">List in Box</header>
  <div class="box__body u-p-0">
    <ul class="list list--inset">
      <li class="list__item">1. Active</li>
      <li class="list__item">2. Dapibus ac facilisis in</li>
      <li class="list__item">3. Morbi leo risus</li>
      <li class="list__item is-disabled">4. Disabled</li>
      <li class="list__item">5. Vestibulum at eros</li>
    </ul>
  </div>
</div>
```

## Bordered List
By adding the `.list--bordered` modifier class on `.list`
container, you can easily create a borderd list style.

<div class="l-row">
  <div class="l-col-6@md">
    <ul class="list list--bordered">
      <li class="list__item">1. Active</li>
      <li class="list__item">2. Dapibus ac facilisis in</li>
      <li class="list__item">3. Morbi leo risus</li>
      <li class="list__item is-disabled">4. Disabled</li>
      <li class="list__item">5. Vestibulum at eros</li>
    </ul>
  </div>
</div>

```html
<ul class="list list--bordered">
  <li class="list__item">1. Active</li>
  <li class="list__item">2. Dapibus ac facilisis in</li>
  <li class="list__item">3. Morbi leo risus</li>
  <li class="list__item is-disabled">4. Disabled</li>
  <li class="list__item">5. Vestibulum at eros</li>
</ul>
```

## Linked List
To quick create linkify list by using `<a>` tag and child `.list__link` class.

<div class="l-row">
  <div class="l-col-6@md">
    <div class="list list--bordered list--lg">
      <a class="list__link">1. Dapibus ac facilisis in</a>
      <a class="list__link is-active">2. Active</a>
      <a class="list__link">3. Morbi leo risus</a>
      <a class="list__link is-disabled">4. Disabled</a>
      <a class="list__link">5. Vestibulum at eros</a>
    </div>
  </div>
</div>

```html
<div class="list list--bordered list--lg">
  <a class="list__link">1. Dapibus ac facilisis in</a>
  <a class="list__link is-active">2. Active</a>
  <a class="list__link">3. Morbi leo risus</a>
  <a class="list__link is-disabled">4. Disabled</a>
  <a class="list__link">5. Vestibulum at eros</a>
</div>
```

## Sizes
List has a default size, but you can use `.list--sm`, `.list--lg`
modifier classes on `.list` container to change list size.

<div class="l-row">
  <div class="l-col-4@md">
    <ul class="list list--bordered list--sm">
      <li class="list__item">1. Active</li>
      <li class="list__item">2. Dapibus ac facilisis in</li>
      <li class="list__item">3. Morbi leo risus</li>
      <li class="list__item is-disabled">4. Disabled</li>
      <li class="list__item">5. Vestibulum at eros</li>
    </ul>
  </div>
  <div class="l-col-4@md">
    <ul class="list list--bordered">
      <li class="list__item">1. Active</li>
      <li class="list__item">2. Dapibus ac facilisis in</li>
      <li class="list__item">3. Morbi leo risus</li>
      <li class="list__item is-disabled">4. Disabled</li>
      <li class="list__item">5. Vestibulum at eros</li>
    </ul>
  </div>
  <div class="l-col-4@md">
    <ul class="list list--bordered list--lg">
      <li class="list__item">1. Active</li>
      <li class="list__item">2. Dapibus ac facilisis in</li>
      <li class="list__item">3. Morbi leo risus</li>
      <li class="list__item is-disabled">4. Disabled</li>
      <li class="list__item">5. Vestibulum at eros</li>
    </ul>
  </div>
</div>

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
  <li class="list__item is-disabled">4. Disabled</li>
  <li class="list__item">5. Vestibulum at eros</li>
</ul>

<ul class="list list--bordered list--lg">
  <li class="list__item">1. Active</li>
  <li class="list__item">2. Dapibus ac facilisis in</li>
  <li class="list__item">3. Morbi leo risus</li>
  <li class="list__item is-disabled">4. Disabled</li>
  <li class="list__item">5. Vestibulum at eros</li>
</ul>
```
