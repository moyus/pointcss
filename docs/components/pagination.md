---
layout: default
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
  <nav class="c-pagination">
    <span class="c-pagination__item is-disabled">Previous</span>
    <em class="c-pagination__item is-active">1</em>
    <a href="#" class="c-pagination__item">2</a>
    <a href="#" class="c-pagination__item">3</a>
    <a href="#" class="c-pagination__item">4</a>
    <a href="#" class="c-pagination__item">5</a>
    <span class="c-pagination__item is-disabled">...</span>
    <a href="#" class="c-pagination__item">99</a>
    <a href="#" class="c-pagination__item">100</a>
    <a href="#" class="c-pagination__item">Next</a>
  </nav>
</div>

```html
<nav class="c-pagination">
  <span class="c-pagination__item is-disabled">Previous</span>
  <em class="c-pagination__item is-active">1</em>
  <a href="#" class="c-pagination__item">2</a>
  <a href="#" class="c-pagination__item">3</a>
  <a href="#" class="c-pagination__item">4</a>
  <a href="#" class="c-pagination__item">5</a>
  <span class="c-pagination__item is-disabled">...</span>
  <a href="#" class="c-pagination__item">99</a>
  <a href="#" class="c-pagination__item">100</a>
  <a href="#" class="c-pagination__item">Next</a>
</nav>
```

## Bordered Pagination
By adding `.c-pagination--bordered` modifier class on `.c-pagination`
container to quick create bordered style pagination.

<div class="u-mb-15">
  <nav class="c-pagination c-pagination--bordered">
    <span class="c-pagination__item is-disabled">Previous</span>
    <em class="c-pagination__item is-active">1</em>
    <a href="#" class="c-pagination__item">2</a>
    <a href="#" class="c-pagination__item">3</a>
    <a href="#" class="c-pagination__item">4</a>
    <a href="#" class="c-pagination__item">5</a>
    <span class="c-pagination__item is-disabled">...</span>
    <a href="#" class="c-pagination__item">99</a>
    <a href="#" class="c-pagination__item">100</a>
    <a href="#" class="c-pagination__item">Next</a>
  </nav>
</div>

```html
<nav class="c-pagination c-pagination--bordered">
  <span class="c-pagination__item is-disabled">Previous</span>
  <em class="c-pagination__item is-active">1</em>
  <a href="#" class="c-pagination__item">2</a>
  <a href="#" class="c-pagination__item">3</a>
  <a href="#" class="c-pagination__item">4</a>
  <a href="#" class="c-pagination__item">5</a>
  <span class="c-pagination__item is-disabled">...</span>
  <a href="#" class="c-pagination__item">99</a>
  <a href="#" class="c-pagination__item">100</a>
  <a href="#" class="c-pagination__item">Next</a>
</nav>
```

## Sizes
Add `.c-pagination--sm` modifier class to quickly create small pagination.

<div class="u-mb-15">
  <nav class="c-pagination c-pagination--bordered c-pagination--sm">
    <a href="#" class="c-pagination__item">Previous</a>
    <em class="c-pagination__item is-active">1</em>
    <a href="#" class="c-pagination__item">2</a>
    <a href="#" class="c-pagination__item">3</a>
    <a href="#" class="c-pagination__item">4</a>
    <a href="#" class="c-pagination__item">5</a>
    <span class="c-pagination__item is-disabled">...</span>
    <a href="#" class="c-pagination__item">99</a>
    <a href="#" class="c-pagination__item">100</a>
    <a href="#" class="c-pagination__item">Next</a>
  </nav>
</div>

```html
<nav class="c-pagination c-pagination--bordered c-pagination--sm">
  <a href="#" class="c-pagination__item">Previous</a>
  <em class="c-pagination__item is-active">1</em>
  <a href="#" class="c-pagination__item">2</a>
  <a href="#" class="c-pagination__item">3</a>
  <a href="#" class="c-pagination__item">4</a>
  <a href="#" class="c-pagination__item">5</a>
  <span class="c-pagination__item is-disabled">...</span>
  <a href="#" class="c-pagination__item">99</a>
  <a href="#" class="c-pagination__item">100</a>
  <a href="#" class="c-pagination__item">Next</a>
</nav>
```
