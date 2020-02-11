---
layout: master
title: "Pagination"
catalogue:
  - Basic
  - Bordered
  - Sizing
---

# Pagination
A reuseable and flexible navigation that lets users access pages of content.

## Basic

<div class="mb-6">
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

## Bordered

By adding `.pagination--bordered` modifier class on `.pagination` container to quick create bordered style pagination

<div class="mb-6">
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

## Sizing

Add `.pagination--sm` or `.pagination--lg` modifier class to quickly create different size pagination

<div class="mb-6">
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

<div class="mb-6">
  <nav class="pagination pagination--bordered">
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

<div class="mb-6">
  <nav class="pagination pagination--bordered pagination--lg">
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
<nav class="pagination pagination--bordered pagination--sm">
  ...
</nav>

<nav class="pagination pagination--bordered">
  ...
</nav>

<nav class="pagination pagination--bordered pagination--lg">
  ...
</nav>
```
