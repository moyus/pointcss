---
layout: master
title: Pagination
path:
  - Components
  - Pagination
catalogue:
  - Basic
  - Bordered
  - Sizing
---

# Pagination
A reuseable and flexible navigation that lets users access pages of content.

## Basic

<section class="snippet">
  <div class="snippet__preview">
    <nav class="pagination" role="navigation">
      <div class="pagination__item">
        <span class="pagination__link is-disabled">Previous</span>
      </div>
      <ul class="pagination__list">
        <li class="pagination__item">
          <em class="pagination__link is-active">1</em>
        </li>
        <li class="pagination__item">
          <a href="#" class="pagination__link">2</a>
        </li>
        <li class="pagination__item">
          <a href="#" class="pagination__link">3</a>
        </li>
        <li class="pagination__item">
          <a href="#" class="pagination__link">4</a>
        </li>
        <li class="pagination__item">
          <a href="#" class="pagination__link">5</a>
        </li>
        <li class="pagination__item">
          <span class="pagination__gap">...</span>
        </li>
        <li class="pagination__item">
          <a href="#" class="pagination__link">99</a>
        </li>
        <li class="pagination__item">
          <a href="#" class="pagination__link">100</a>
        </li>
      </ul>
      <div class="pagination__item">
        <a href="#" class="pagination__link">Next</a>
      </div>
    </nav>
  </div>
  <div class="snippet__source">

```html
<nav class="pagination" role="navigation">
  <div class="pagination__item">
    <span class="pagination__link is-disabled">Previous</span>
  </div>
  <ul class="pagination__list">
    <li class="pagination__item">
      <em class="pagination__link is-active">1</em>
    </li>
    <li class="pagination__item">
      <a href="#" class="pagination__link">2</a>
    </li>
    <li class="pagination__item">
      <a href="#" class="pagination__link">3</a>
    </li>
    <li class="pagination__item">
      <a href="#" class="pagination__link">4</a>
    </li>
    <li class="pagination__item">
      <a href="#" class="pagination__link">5</a>
    </li>
    <li class="pagination__item">
      <span class="pagination__gap">...</span>
    </li>
    <li class="pagination__item">
      <a href="#" class="pagination__link">99</a>
    </li>
    <li class="pagination__item">
      <a href="#" class="pagination__link">100</a>
    </li>
  </ul>
  <div class="pagination__item">
    <a href="#" class="pagination__link">Next</a>
  </div>
</nav>
```

  </div>
</section>

## Bordered

By adding `.pagination--bordered` modifier class on `.pagination` container to quick create bordered style pagination

<section class="snippet">
  <div class="snippet__preview">
    <nav class="pagination pagination--bordered">
      <ul class="pagination__list">
        <li class="pagination__item">
          <em class="pagination__link is-active">1</em>
        </li>
        <li class="pagination__item">
          <a href="#" class="pagination__link">2</a>
        </li>
        <li class="pagination__item">
          <a href="#" class="pagination__link">3</a>
        </li>
        <li class="pagination__item">
          <a href="#" class="pagination__link">4</a>
        </li>
        <li class="pagination__item">
          <a href="#" class="pagination__link">5</a>
        </li>
        <li class="pagination__item">
          <span class="pagination__gap">...</span>
        </li>
        <li class="pagination__item">
          <a href="#" class="pagination__link">99</a>
        </li>
        <li class="pagination__item">
          <a href="#" class="pagination__link">100</a>
        </li>
      </ul>
      <div class="pagination__item">
        <span class="pagination__link is-disabled">Previous</span>
      </div>
      <div class="pagination__item">
        <a href="#" class="pagination__link">Next</a>
      </div>
    </nav>
  </div>
  <div class="snippet__source">

```html
<nav class="pagination pagination--bordered">
  ...
</nav>
```

  </div>
</section>

## Sizing

You can get a small size of pagination by adding `.pagination--sm` modifier class on `.pagination` container.

<section class="snippet">
  <div class="snippet__preview">
    <nav class="pagination pagination--bordered pagination--sm">
      <div class="pagination__item">
        <a href="#" class="pagination__link">Previous</a>
      </div>
      <div class="pagination__item">
        <a href="#" class="pagination__link">Next</a>
      </div>
      <ul class="pagination__list">
        <li class="pagination__item">
          <em class="pagination__link is-active">1</em>
        </li>
        <li class="pagination__item">
          <a href="#" class="pagination__link">2</a>
        </li>
        <li class="pagination__item">
          <a href="#" class="pagination__link">3</a>
        </li>
        <li class="pagination__item">
          <a href="#" class="pagination__link">4</a>
        </li>
        <li class="pagination__item">
          <a href="#" class="pagination__link">5</a>
        </li>
        <li class="pagination__item">
          <span class="pagination__gap">...</span>
        </li>
        <li class="pagination__item">
          <a href="#" class="pagination__link">99</a>
        </li>
        <li class="pagination__item">
          <a href="#" class="pagination__link">100</a>
        </li>
      </ul>
    </nav>
  </div>
  <div class="snippet__source">

```html
<nav class="pagination pagination--bordered pagination--sm">
  ...
</nav>
```

  </div>
</section>
