---
layout: default
title: "Level"
---

# Level
- [Basic](#basic)
- [Shrink](#shrink)

## Basic
Use flexbox to align items vertically.

<div class="l-level l-level--break@md u-mb-15">
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
        <div class="form-group">
          <input type="text" class="form-input" placeholder="Search...">
          <button class="form-addon btn btn--primary">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>

```html
<div class="l-level l-level--break@md">
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
        <div class="form-group">
          <input type="text" class="form-input" placeholder="Search...">
          <button class="form-addon btn btn--primary">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>
```

***

If you want to create 3-colums level, you must place `.l-level__center` in
first, so it can use `~` CSS selector to control siblings style.

<div class="l-level l-level--break@md u-mb-15">
  <div class="l-level__center">
    <div class="btn-group">
      <button class="btn btn--primary btn--outline">ALL PROJECTS</button>
      <button class="btn btn--primary btn--outline">SHARED</button>
      <button class="btn btn--primary btn--outline">MEDIA FILES</button>
    </div>
  </div>
  <div class="l-level__left">
    <div class="u-fs-20">All <span class="u-fs-14 u-text-muted">34 projects</span></div>
  </div>
  <div class="l-level__right">
    <div class="l-level__item">
      <form action="#" class="form-inline">
        <div class="form-field">
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
<div class="l-level l-level--break@md">
  <div class="l-level__center">
    <div class="btn-group">
      <button class="btn btn--primary btn--outline">ALL PROJECTS</button>
      <button class="btn btn--primary btn--outline">SHARED</button>
      <button class="btn btn--primary btn--outline">MEDIA FILES</button>
    </div>
  </div>
  <div class="l-level__left">
    <div class="u-fs-20">All <span class="u-fs-14 u-text-muted">34 projects</span></div>
  </div>
  <div class="l-level__right">
    <div class="l-level__item">
      <form action="#" class="form-inline">
        <div class="form-field">
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
