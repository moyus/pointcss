---
layout: default
title: "Hint"
---

# Hint
- [Basic](#basic)
- [Sizes](#sizes)
- [Position](#position)

## Basic
Hint is built with pure css code. It can be apply on any elements who's
`overflow` is not hidden and `position` is not undefined.

<div class="u-mb-15 u-textCenter">
  <button class="btn btn--info hint u-mb-15" data-label="I'm always here!">Hover Me</button>
</div>

```html
<button class="btn btn--info hint" data-label="I'm always here!">Hover Me</button>
```

## Sizes
By default, Hint will always remain single-line. you can change this behavior by
adding `.hint--sm`, `.hint--md` or `.hint--lg` modifier class.

<div class="l-row u-textCenter">
    <div class="l-col-4@md">
        <button class="btn btn--info hint hint--sm u-mb-15" data-label="Lorem ipsum dolor sit amet.">Small Hint</button>
    </div>
    <div class="l-col-4@md">
        <button class="btn btn--info hint hint--md u-mb-15" data-label="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, ratione!">Medium Hint</button>
    </div>
    <div class="l-col-4@md">
        <button class="btn btn--info hint hint--lg u-mb-15" data-label="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem architecto, illo recusandae dolorem magni odit.">Large Hint</button>
    </div>
</div>

```html
<button class="btn btn--info hint hint--sm" data-label="Lorem ipsum dolor sit amet.">Small Hint</button>
<button class="btn btn--info hint hint--md" data-label="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, ratione!">Medium Hint</button>
<button class="btn btn--info hint hint--lg" data-label="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem architecto, illo recusandae dolorem magni odit.">Large Hint</button>
```

## Position

Hint use top as default position. By adding `.hint--right`, `.hint--bottom` or
`.hint--left` modifier class to change hint position.

<div class="l-row u-textCenter">
  <div class="l-col-6@sm l-col-3@md">
      <button class="btn btn--info hint u-mb-15" data-label="Hello, There!">Hover me!</button>
  </div>
  <div class="l-col-6@sm l-col-3@md">
      <button class="btn btn--info hint hint--right u-mb-15" data-label="Hello, There!">Hover me!</button>
  </div>
  <div class="l-col-6@sm l-col-3@md">
      <button class="btn btn--info hint hint--bottom u-mb-15" data-label="Hello, There!">Hover me!</button>
  </div>
  <div class="l-col-6@sm l-col-3@md">
      <button class="btn btn--info hint hint--left u-mb-15" data-label="Hello, There!">Hover me!</button>
  </div>
</div>

```html
<button class="btn btn--info hint" data-label="Hello, There!">Hover me!</button>
<button class="btn btn--info hint hint--right" data-label="Hello, There!">Hover me!</button>
<button class="btn btn--info hint hint--bottom" data-label="Hello, There!">Hover me!</button>
<button class="btn btn--info hint hint--left" data-label="Hello, There!">Hover me!</button>
```
