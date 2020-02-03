---
layout: master
title: "Pagination"
---

# Pagination

- [Basic](#basic)
- [Bordered](#bordered)
- [Sizes](#sizes)

## Basic
Pagination component provide a reuseable and flexible navigation that lets
users access pages of content.

<div class="u-mb-15">
  <nav class="pagination">
    <span class="pagination__item is-disabled">Previous</span>
    <em class="pagination__item is-active">1</em>
    <a href="#" class="pagination__item">2</a>
    <a href="#" class="pagination__item">3</a>
    <a href="#" class="pagination__item">4</a>
    <a href="#" class="pagination__item">5</a>
    <span class="pagination__item">...</span>
    <a href="#" class="pagination__item">99</a>
    <a href="#" class="pagination__item">100</a>
    <a href="#" class="pagination__item">Next</a>
  </nav>
</div>

```html
<nav class="pagination">
  <span class="pagination__item is-disabled">Previous</span>
  <em class="pagination__item is-active">1</em>
  <a href="#" class="pagination__item">2</a>
  <a href="#" class="pagination__item">3</a>
  <a href="#" class="pagination__item">4</a>
  <a href="#" class="pagination__item">5</a>
  <span class="pagination__item">...</span>
  <a href="#" class="pagination__item">99</a>
  <a href="#" class="pagination__item">100</a>
  <a href="#" class="pagination__item">Next</a>
</nav>
```

## Bordered Pagination
By adding `.pagination--bordered` modifier class on `.pagination`
container to quick create bordered style pagination.

<div class="u-mb-15">
  <nav class="pagination pagination--bordered">
    <span class="pagination__item is-disabled">Previous</span>
    <em class="pagination__item is-active">1</em>
    <a href="#" class="pagination__item">2</a>
    <a href="#" class="pagination__item">3</a>
    <a href="#" class="pagination__item">4</a>
    <a href="#" class="pagination__item">5</a>
    <span class="pagination__item is-disabled">...</span>
    <a href="#" class="pagination__item">99</a>
    <a href="#" class="pagination__item">100</a>
    <a href="#" class="pagination__item">Next</a>
  </nav>
</div>

```html
<nav class="pagination pagination--bordered">
  <span class="pagination__item is-disabled">Previous</span>
  <em class="pagination__item is-active">1</em>
  <a href="#" class="pagination__item">2</a>
  <a href="#" class="pagination__item">3</a>
  <a href="#" class="pagination__item">4</a>
  <a href="#" class="pagination__item">5</a>
  <span class="pagination__item is-disabled">...</span>
  <a href="#" class="pagination__item">99</a>
  <a href="#" class="pagination__item">100</a>
  <a href="#" class="pagination__item">Next</a>
</nav>
```

## Sizes
Add `.pagination--sm` modifier class to quickly create small pagination.

<div class="u-mb-15">
  <nav class="pagination pagination--sm">
    <a href="#" class="pagination__item">Previous</a>
    <em class="pagination__item is-active">1</em>
    <a href="#" class="pagination__item">2</a>
    <a href="#" class="pagination__item">3</a>
    <a href="#" class="pagination__item">4</a>
    <a href="#" class="pagination__item">5</a>
    <span class="pagination__item">...</span>
    <a href="#" class="pagination__item">99</a>
    <a href="#" class="pagination__item">100</a>
    <a href="#" class="pagination__item">Next</a>
  </nav>
</div>

<div class="u-mb-15">
  <nav class="pagination pagination--bordered pagination--sm">
    <a href="#" class="pagination__item">Previous</a>
    <em class="pagination__item is-active">1</em>
    <a href="#" class="pagination__item">2</a>
    <a href="#" class="pagination__item">3</a>
    <a href="#" class="pagination__item">4</a>
    <a href="#" class="pagination__item">5</a>
    <span class="pagination__item">...</span>
    <a href="#" class="pagination__item">99</a>
    <a href="#" class="pagination__item">100</a>
    <a href="#" class="pagination__item">Next</a>
  </nav>
</div>

```html
<nav class="pagination pagination--sm">
  ...
</nav>

<nav class="pagination pagination--bordered pagination--sm">
  ...
</nav>
```
