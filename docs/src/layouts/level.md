---
layout: master
title: "Level"
catalogue:
  - Basic
  - Response
---

# Level
horizontal layout with vertical center alignment.

## Basic

2-columns layout

<div class="level level-collapse@md">
  <div class="level__start">
    <a href="#" class="level__item btn btn--success btn--loose">Add</a>
    <a href="#" class="level__item">All</a>
    <a href="#" class="level__item">Publish</a>
    <a href="#" class="level__item">Draft</a>
    <a href="#" class="level__item">Pending</a>
    <a href="#" class="level__item">Trash</a>
  </div>
  <div class="level__end">
    <div class="level__item">
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
<div class="level">
  <div class="level__start">
    <a href="#" class="level__item btn btn--success btn--loose">Add</a>
    <a href="#" class="level__item">All</a>
    <a href="#" class="level__item">Publish</a>
    <a href="#" class="level__item">Draft</a>
    <a href="#" class="level__item">Pending</a>
    <a href="#" class="level__item">Trash</a>
  </div>
  <div class="level__end">
    <div class="level__item">
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

If you want to create 3-colums layout, you must place `.level__center` in
first, so it can use `~` CSS selector to control siblings style.

<div class="level level-collapse@md">
  <div class="level__center">
    <div class="btn-group">
      <button class="btn btn--primary btn--outline">ALL PROJECTS</button>
      <button class="btn btn--primary btn--outline">SHARED</button>
      <button class="btn btn--primary btn--outline">MEDIA FILES</button>
    </div>
  </div>
  <div class="level__start">
    <div class="u-fs-20">All <span class="u-fs-14 u-text-muted">34 projects</span></div>
  </div>
  <div class="level__end">
    <div class="level__item">
      <form action="#" class="form-inline">
        <select class="form-select">
          <option value="2016-01-25" selected="selected">Jul 25, 16</option>
          <option value="2016-01-26">Jul 26, 16</option>
          <option value="2016-01-27">Jul 27, 16</option>
          <option value="2016-01-28">Jul 28, 16</option>
        </select>
      </form>
    </div>
  </div>
</div>

```html
<div class="level">
  <div class="level__center">
    <div class="btn-group">
      <button class="btn btn--primary btn--outline">ALL PROJECTS</button>
      <button class="btn btn--primary btn--outline">SHARED</button>
      <button class="btn btn--primary btn--outline">MEDIA FILES</button>
    </div>
  </div>
  <div class="level__start">
    <div class="u-fs-20">All <span class="u-fs-14 u-text-muted">34 projects</span></div>
  </div>
  <div class="level__end">
    <div class="level__item">
      <form action="#" class="form-inline">
        <select class="form-select">
          <option value="2016-01-25" selected="selected">Jul 25, 16</option>
          <option value="2016-01-26">Jul 26, 16</option>
          <option value="2016-01-27">Jul 27, 16</option>
          <option value="2016-01-28">Jul 28, 16</option>
        </select>
      </form>
    </div>
  </div>
</div>
```

## Response
When screen size can not wrap level component, you can manually collapse it by using `.level-collapse@<breakpoint>` modifier

<div class="level level-collapse@md">
  <div class="level__start">
    <a href="#" class="level__item btn btn--success btn--loose">Add</a>
    <a href="#" class="level__item">All</a>
    <a href="#" class="level__item">Publish</a>
    <a href="#" class="level__item">Draft</a>
    <a href="#" class="level__item">Pending</a>
    <a href="#" class="level__item">Trash</a>
  </div>
  <div class="level__end">
    <div class="level__item">
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
<div class="level level-collapse@md">
  <div class="level__start">
    <a href="#" class="level__item btn btn--success btn--loose">Add</a>
    <a href="#" class="level__item">All</a>
    <a href="#" class="level__item">Publish</a>
    <a href="#" class="level__item">Draft</a>
    <a href="#" class="level__item">Pending</a>
    <a href="#" class="level__item">Trash</a>
  </div>
  <div class="level__end">
    <div class="level__item">
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
