---
layout: master
title: Hint
path:
  - Components
  - Hint
catalogue:
  - Basic
  - Sizing
  - Position
---

# Hint

Hint is built with pure css code. It can be apply on any elements who's `overflow` is not hidden and `position` is not undefined.

## Basic

<section class="snippet">
  <div class="snippet__preview">
    <button class="btn hint" data-hint="I'm always here!">Hover Me</button>
  </div>
  <div class="snippet__source">

```html
<button class="btn hint" data-hint="I'm always here!">Hover Me</button>
```

  </div>
</section>

## Sizing

By default, Hint will always remain single-line. you can change this behavior by adding `.hint--sm` or `.hint--lg` modifier class.

<section class="snippet">
  <div class="snippet__preview">
    <div class="row text-center">
      <div class="col-4@md">
        <button class="btn hint hint--sm mb-6" data-hint="Lorem ipsum dolor sit amet.">Small sizing</button>
      </div>
      <div class="col-4@md">
        <button class="btn hint mb-6" data-hint="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, ratione!">Normal sizing</button>
      </div>
      <div class="col-4@md">
        <button class="btn hint hint--lg mb-6" data-hint="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem architecto, illo recusandae dolorem magni odit.">Large sizing</button>
      </div>
    </div>
  </div>
  <div class="snippet__source">

```html
<button class="btn hint hint--sm" data-hint="Lorem ipsum dolor sit amet.">Small sizing</button>
<button class="btn hint" data-hint="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, ratione!">Normal sizing</button>
<button class="btn hint hint--lg" data-hint="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem architecto, illo recusandae dolorem magni odit.">Large sizing</button>
```

  </div>
</section>

## Position

Hint use top as default position. By adding `.hint--right`, `.hint--bottom` or `.hint--left` modifier class to change hint position.

<section class="snippet">
  <div class="snippet__preview">
    <div class="row text-center">
      <div class="col-6@sm col-3@md">
        <button class="btn hint mb-6" data-hint="Hello, There!">Hover me!</button>
      </div>
      <div class="col-6@sm col-3@md">
        <button class="btn hint hint--right mb-6" data-hint="Hello, There!">Hover me!</button>
      </div>
      <div class="col-6@sm col-3@md">
        <button class="btn hint hint--bottom mb-6" data-hint="Hello, There!">Hover me!</button>
      </div>
      <div class="col-6@sm col-3@md">
        <button class="btn hint hint--left mb-6" data-hint="Hello, There!">Hover me!</button>
      </div>
    </div>
  </div>
  <div class="snippet__source">

```html
<button class="btn hint" data-hint="Hello, There!">Hover me!</button>
<button class="btn hint hint--right" data-hint="Hello, There!">Hover me!</button>
<button class="btn hint hint--bottom" data-hint="Hello, There!">Hover me!</button>
<button class="btn hint hint--left" data-hint="Hello, There!">Hover me!</button>
```

  </div>
</section>
