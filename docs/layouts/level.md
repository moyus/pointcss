---
layout: default
title: "Level"
---

# Level
- [Basic](#basic)
- [Shrink](#shrink)

## Basic
Use flexbox to align items vertically.

<div class="l-level u-mb-15">
  <div class="l-level__left">
    <a href="#" class="l-level__item btn btn--success btn--smart">Add</a>
    <a href="#" class="l-level__item">All</a>
    <a href="#" class="l-level__item">Publish</a>
    <a href="#" class="l-level__item">Draft</a>
    <a href="#" class="l-level__item">Pending</a>
    <a href="#" class="l-level__item">Trash</a>
  </div>
  <div class="l-level__right is-shrink">
    <div class="l-level__item">
      <form action="#" class="form-inline">
        <div class="form-flex">
          <input type="text" class="form-input" placeholder="Search...">
          <button class="form-addon btn btn--primary">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>

```html
<div class="l-level">
  <div class="l-level__left">
    <a href="#" class="l-level__item btn btn--success btn--smart">Add</a>
    <a href="#" class="l-level__item">All</a>
    <a href="#" class="l-level__item">Publish</a>
    <a href="#" class="l-level__item">Draft</a>
    <a href="#" class="l-level__item">Pending</a>
    <a href="#" class="l-level__item">Trash</a>
  </div>
  <div class="l-level__right">
    <div class="l-level__item">
      <form action="#" class="form-inline">
        <div class="form-flex">
          <input type="text" class="form-input" placeholder="Search...">
          <button class="form-addon btn btn--primary">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>
```

***

<div class="l-level u-mb-15">
  <div class="l-level__left">
    <div class="u-fs-20">All <span class="u-fs-14 u-textMuted">34 projects</span></div>
  </div>
  <div class="l-level__center">
    <div class="btnGroup">
      <button class="btn btn--primary btn--outline">ALL PROJECTS</button>
      <button class="btn btn--primary btn--outline">SHARED</button>
      <button class="btn btn--primary btn--outline">MEDIA FILES</button>
    </div>
  </div>
  <div class="l-level__right">
    <div class="l-level__item">
      <form action="#" class="form-inline">
        <div class="form-group">
          <select class="form-select">
            <option value="2016-01-25" selected="selected">Jul 25, 16</option>
            <option value="2016-01-26">Jul 26, 16</option>
            <option value="2016-01-27">Jul 27, 16</option>
            <option value="2016-01-28">Jul 28, 16</option>
          </select>
        </div>
      </form>
    </div>
  </div>
</div>

```html
<div class="l-level">
  <div class="l-level__left">
    <div class="u-fs-20">All <span class="u-fs-14 u-textMuted">34 projects</span></div>
  </div>
  <div class="l-level__center">
    <div class="btnGroup">
      <button class="btn btn--primary btn--outline">ALL PROJECTS</button>
      <button class="btn btn--primary btn--outline">SHARED</button>
      <button class="btn btn--primary btn--outline">MEDIA FILES</button>
    </div>
  </div>
  <div class="l-level__right">
    <div class="l-level__item">
      <form action="#" class="form-inline">
        <div class="form-group">
          <select class="form-select">
            <option value="2016-01-25" selected="selected">Jul 25, 16</option>
            <option value="2016-01-26">Jul 26, 16</option>
            <option value="2016-01-27">Jul 27, 16</option>
            <option value="2016-01-28">Jul 28, 16</option>
          </select>
        </div>
      </form>
    </div>
  </div>
</div>
```

## Shrink
If there are only `.l-level__left`, `.l-level__right` block and you are resizing
the window, you can specify which block should have flex width use `.is-auto`
and another block has fixed width use `.is-fixed`. *(resize your window to see the effect)*

<div class="l-level u-mb-15">
  <div class="l-level__left is-auto">
    <div class="l-level__item u-textTruncated">
      If you resize your width, you can see the effect!
    </div>
  </div>
  <div class="l-level__right is-fixed">
    <div class="l-level__item">
      <button class="btn btn--primary">I will remain my width</button>
    </div>
  </div>
</div>

```html
<div class="l-level u-mb-15">
  <div class="l-level__left">
    <div class="l-level__item">
      <div class="u-fs-20">Dashboard</div>
      <ol class="c-breadcrumb">
        <li class="c-breadcrumb__item">
          <a href="#" class="c-breadcrumb__link">Home</a>
        </li>
        <li class="c-breadcrumb__item">
          <a href="#" class="c-breadcrumb__link">Library</a>
        </li>
        <li class="c-breadcrumb__item">
          Book
        </li>
      </ol>
    </div>
  </div>
  <div class="l-level__right">
    <div class="l-level__item">
      <form action="#" class="form-inline">
        <div class="form-group">
          <input type="text" class="form-input" placeholder="Search...">
        </div>
        <button class="btn btn--success">New Post</button>
      </form>
    </div>
  </div>
</div>
```
