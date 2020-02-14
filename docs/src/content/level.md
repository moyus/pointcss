---
layout: master
title: "Level"
catalogue:
  - Basic
  - Evenly
  - Responsive
---

# Level
Horizontal layout with vertical center alignment.

## Basic

2-columns layout

<div class="level mb-6">
  <div class="level__start">
    <button class="level__item btn btn--success btn--loose">Add</button>
    <a role="button" class="level__item">All</a>
    <a role="button" class="level__item">Publish</a>
    <a role="button" class="level__item">Draft</a>
    <a role="button" class="level__item">Pending</a>
    <a role="button" class="level__item">Trash</a>
  </div>
  <div class="level__end">
    <div class="level__item">
      <form class="inline-flex items-center">
        <input type="text" class="form-input" placeholder="Search...">
        <button type="button" class="btn btn--primary flex-no-shrink ml-3">Submit</button>
      </form>
    </div>
  </div>
</div>

```html
<div class="level">
  <div class="level__start">
    <button class="level__item btn btn--success btn--loose">Add</button>
    <a href="#" class="level__item">All</a>
    <a href="#" class="level__item">Publish</a>
    <a href="#" class="level__item">Draft</a>
    <a href="#" class="level__item">Pending</a>
    <a href="#" class="level__item">Trash</a>
  </div>
  <div class="level__end">
    <div class="level__item">
      <form class="inline-flex items-center">
        <input type="text" class="form-input" placeholder="Search...">
        <button class="btn btn--primary flex-no-shrink ml-3">Submit</button>
      </form>
    </div>
  </div>
</div>
```

If you want to create 3-colums layout, you must place `.level__center` at first, so it can use `~` CSS selector to control siblings style

<div class="level mb-6">
  <div class="level__center">
    <div class="btn-group">
      <button class="btn">ALL PROJECTS</button>
      <button class="btn">SHARED</button>
      <button class="btn">MEDIA FILES</button>
    </div>
  </div>
  <div class="level__start">
    <div class="text-xl">All<span class="text-sm color-mute ml-3">34 projects</span></div>
  </div>
  <div class="level__end">
    <div class="level__item">
      <form>
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
      <button class="btn">ALL PROJECTS</button>
      <button class="btn">SHARED</button>
      <button class="btn">MEDIA FILES</button>
    </div>
  </div>
  <div class="level__start">
    <div class="text-xl">All<span class="text-sm color-mute ml-3">34 projects</span></div>
  </div>
  <div class="level__end">
    <div class="level__item">
      <form>
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

## Evenly

Direct place `.level__item` under `.level` container, will distribute spacing evenly

<div class="level mb-6">
  <div class="level__item">
    <span class="text-center">
      <span class="block text-meta-md color-mute line-compact">Message</span>
      <em class="block text-title-md color-dark">10</em>
    </span>
  </div>
  <div class="level__item">
    <span class="text-center">
      <span class="block text-meta-md color-mute line-compact">Visitors</span>
      <em class="block text-title-md color-dark">720</em>
    </span>
  </div>
  <div class="level__item">
    <span class="text-center">
      <span class="block text-meta-md color-mute line-compact">Users</span>
      <em class="block text-title-md color-dark">320</em>
    </span>
  </div>
</div>

```html
<div class="level">
  <div class="level__item">
    <span class="text-center">
      <span class="block text-meta-md color-mute line-compact">Message</span>
      <em class="block text-title-md color-dark">10</em>
    </span>
  </div>
  <div class="level__item">
    <span class="text-center">
      <span class="block text-meta-md color-mute line-compact">Visitors</span>
      <em class="block text-title-md color-dark">720</em>
    </span>
  </div>
  <div class="level__item">
    <span class="text-center">
      <span class="block text-meta-md color-mute line-compact">Users</span>
      <em class="block text-title-md color-dark">320</em>
    </span>
  </div>
</div>
```

## Responsive

By default, level will stay horizontal layout across all breakpoints, if you want to collapse it below a breakpoint, add the `.level@<breakpoint>` modifier on `.level` container

<div class="level level@md mb-6">
  <div class="level__start">
    <button class="level__item btn btn--success btn--loose">Add</button>
    <a role="button" class="level__item">All</a>
    <a role="button" class="level__item">Publish</a>
    <a role="button" class="level__item">Draft</a>
    <a role="button" class="level__item">Pending</a>
    <a role="button" class="level__item">Trash</a>
  </div>
  <div class="level__end">
    <div class="level__item">
      <form action="#" class="inline-flex items-center">
        <input type="text" class="form-input" placeholder="Search...">
        <button class="btn btn--primary flex-no-shrink ml-3">Submit</button>
      </form>
    </div>
  </div>
</div>

```html
<div class="level level@md">
  <div class="level__start">
    <button class="level__item btn btn--success btn--loose">Add</button>
    <a href="#" class="level__item">All</a>
    <a href="#" class="level__item">Publish</a>
    <a href="#" class="level__item">Draft</a>
    <a href="#" class="level__item">Pending</a>
    <a href="#" class="level__item">Trash</a>
  </div>
  <div class="level__end">
    <div class="level__item">
      <form class="inline-flex items-center">
        <input type="text" class="form-input" placeholder="Search...">
        <button class="btn btn--primary flex-no-shrink ml-3">Submit</button>
      </form>
    </div>
  </div>
</div>
```
