---
layout: master
title: "Dropmenu"
---

# Dropmenu

- [Basic](#basic)
- [Toggle](#toggle)

## Basic
Dropmenus are list of links, it's very useful for user actions.

<div class="u-mb-15">
  <ul class="dropmenu">
    <li class="dropmenu__item">
      <a role="button" class="dropmenu__link is-active">Profile</a>
    </li>
    <li class="dropmenu__item">
      <a role="button" class="dropmenu__link">Inbox</a>
    </li>
    <li class="dropmenu__item">
      <a role="button" class="dropmenu__link">Task</a>
    </li>
    <li class="dropmenu__divider"></li>
    <li class="dropmenu__item">
      <a role="button" class="dropmenu__link">Log out</a>
    </li>
  </ul>
</div>

```html
<ul class="dropmenu">
  <li class="dropmenu__item">
    <a role="button" class="dropmenu__link is-active">Profile</a>
  </li>
  <li class="dropmenu__item">
    <a role="button" class="dropmenu__link">Inbox</a>
  </li>
  <li class="dropmenu__item">
    <a role="button" class="dropmenu__link">Task</a>
  </li>
  <li class="dropmenu__divider"></li>
  <li class="dropmenu__item">
    <a role="button" class="dropmenu__link">Log out</a>
  </li>
</ul>
```

<hr class="u-mt-60" />

## Toggle
<div class="note note--warning u-mt-40">
Point only use pure css trick `tabindex="0"` and `.dropdown__toggle:focus` to simulate click and show drop content. And Point does <strong>not</strong> include any JavaScript interaction with <strong>Dropmenu</strong>. You need to implement the class toggle yourself.
</div>

<div class="u-mb-15">
  <div class="dropdown u-inline-block">
    <div class="btn-group">
      <button class="btn btn--primary">dropdown</button>
      <button class="btn btn--primary dropdown__toggle" tabindex="0">
        <i class="i-caret i-caret--light"></i>
      </button>
      <ul class="dropmenu">
        <li class="dropmenu__item">
          <a role="button" class="dropmenu__link is-active">Profile</a>
        </li>
        <li class="dropmenu__item">
          <a role="button" class="dropmenu__link">Inbox</a>
        </li>
        <li class="dropmenu__item">
          <a role="button" class="dropmenu__link is-disabled">Task</a>
        </li>
        <li class="dropmenu__divider"></li>
        <li class="dropmenu__item">
          <a role="button" class="dropmenu__link">Log out</a>
        </li>
      </ul>
    </div>
  </div>

  <div class="dropdown dropdown--up  u-inline-block u-ml-15">
    <div class="btn-group">
      <button class="btn btn--primary">dropup</button>
      <button class="btn btn--primary dropdown__toggle" tabindex="0">
        <i class="i-arrow-up i-arrow-up--light"></i>
      </button>
      <ul class="dropmenu">
        <li class="dropmenu__item">
          <a role="button" class="dropmenu__link is-active">Profile</a>
        </li>
        <li class="dropmenu__item">
          <a role="button" class="dropmenu__link">Inbox</a>
        </li>
        <li class="dropmenu__item">
          <a role="button" class="dropmenu__link is-disabled">Task</a>
        </li>
        <li class="dropmenu__divider"></li>
        <li class="dropmenu__item">
          <a role="button" class="dropmenu__link">Log out</a>
        </li>
      </ul>
    </div>
  </div>
</div>

```html
<div class="dropdown">
  <div class="btn-group">
    <button class="btn btn--primary">dropdown</button>
    <button class="btn btn--primary dropdown__toggle" tabindex="0">
      <i class="i-caret i-caret--light"></i>
    </button>
    <ul class="dropmenu">
      ...
    </ul>
  </div>
</div>

<div class="dropdown dropdown--up">
  <div class="btn-group">
    <button class="btn btn--primary">dropdown</button>
    <button class="btn btn--primary dropdown__toggle" tabindex="0">
      <i class="i-caret i-caret--light"></i>
    </button>
    <ul class="dropmenu">
      ...
    </ul>
  </div>
</div>
```

