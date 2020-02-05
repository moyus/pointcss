---
layout: master
title: "Flex Grid"
catalogue:
  - Basic
  - Responsive
  - Offset
  - Flex
---

# Flex Grid
12 column grid system based on flexbox.

## Basic

Structure:
- `.row`: the main container
  - `.col-*@<breakpoint>`: column class, etc: `.col-4@md`

<div class="row">
  <div class="col-6">
    <div class="rect-box">.col-6</div>
  </div>
  <div class="col-6">
    <div class="rect-box">.col-6</div>
  </div>
</div>

<div class="row">
  <div class="col-2@md">
    <div class="rect-box">.col-2@md</div>
  </div>
  <div class="col-2@md">
    <div class="rect-box">.col-2@md</div>
  </div>
  <div class="col-2@md">
    <div class="rect-box">.col-2@md</div>
  </div>
  <div class="col-2@md">
    <div class="rect-box">.col-2@md</div>
  </div>
  <div class="col-2@md">
    <div class="rect-box">.col-2@md</div>
  </div>
  <div class="col-2@md">
    <div class="rect-box">.col-2@md</div>
  </div>
</div>

<div class="row">
  <div class="col-8@md">
    <div class="rect-box">.col-8@md</div>
  </div>
  <div class="col-4@md">
    <div class="rect-box">.col-4@md</div>
  </div>
</div>

<div class="row">
  <div class="col-4@md">
    <div class="rect-box">.col-4@md</div>
  </div>
  <div class="col-4@md">
    <div class="rect-box">.col-4@md</div>
  </div>
  <div class="col-4@md">
    <div class="rect-box">.col-4@md</div>
  </div>
</div>

```html
<div class="row">
  <div class="col-6">
    <div class="rect-box">.col-6</div>
  </div>
  <div class="col-6">
    <div class="rect-box">.col-6</div>
  </div>
</div>

<div class="row">
  <div class="col-2@md">
    <div class="rect-box">.col-2@md</div>
  </div>
  <div class="col-2@md">
    <div class="rect-box">.col-2@md</div>
  </div>
  <div class="col-2@md">
    <div class="rect-box">.col-2@md</div>
  </div>
  <div class="col-2@md">
    <div class="rect-box">.col-2@md</div>
  </div>
  <div class="col-2@md">
    <div class="rect-box">.col-2@md</div>
  </div>
  <div class="col-2@md">
    <div class="rect-box">.col-2@md</div>
  </div>
</div>

<div class="row">
  <div class="col-8@md">
    <div class="rect-box">.col-8@md</div>
  </div>
  <div class="col-4@md">
    <div class="rect-box">.col-4@md</div>
  </div>
</div>

<div class="row">
  <div class="col-4@md">
    <div class="rect-box">.col-4@md</div>
  </div>
  <div class="col-4@md">
    <div class="rect-box">.col-4@md</div>
  </div>
  <div class="col-4@md">
    <div class="rect-box">.col-4@md</div>
  </div>
</div>
```

## Responsive
<div class="row">
  <div class="col-6@sm col-7@md col-8@lg">
    <div class="rect-box">.col-6@sm .col-7@md .col-8@lg</div>
  </div>
  <div class="col-6@sm col-5@md col-4@lg">
    <div class="rect-box">.col-6@sm .col-5@md .col-4@lg</div>
  </div>
</div>
<div class="row">
  <div class="col-12 col-6@sm col-4@md">
    <div class="rect-box">.col-12 .col-6@sm .col-4@md</div>
  </div>
  <div class="col-12 col-6@sm col-4@md">
    <div class="rect-box">.col-12 .col-6@sm .col-4@md</div>
  </div>
  <div class="col-12 col-6@sm col-4@md">
    <div class="rect-box">.col-12 .col-6@sm .col-4@md</div>
  </div>
</div>
<div class="row">
  <div class="col-12 col-6@sm">
    <div class="rect-box">.col-12 .col-6@sm</div>
  </div>
  <div class="col-12 col-6@sm">
    <div class="rect-box">.col-12 .col-6@sm</div>
  </div>
</div>

```html
<div class="row">
  <div class="col-6@sm col-7@md col-8@lg">
    // ...
  </div>
  <div class="col-6@sm col-5@md col-4@lg">
    // ...
  </div>
</div>
```

## Offset

<div class="row">
  <div class="col-6@sm col-4@md">
    <div class="rect-box">.col-6@sm .col-4@md</div>
  </div>
  <div class="col-6@sm col-4@md col-offset-4@md">
    <div class="rect-box">.col-6@sm .col-4@md .col-offset-4@md</div>
  </div>
</div>
<div class="row">
  <div class="col-3@sm col-offset-3@sm">
    <div class="rect-box">.col-3@sm .col-offset-3@sm</div>
  </div>
  <div class="col-3@sm col-offset-3@sm">
    <div class="rect-box">.col-3@sm .col-offset-3@sm</div>
  </div>
</div>
<div class="row">
  <div class="col-4@sm col-offset-3@sm">
    <div class="rect-box">.col-4@sm .col-offset-3@sm</div>
  </div>
  <div class="col-2@sm">
    <div class="rect-box">.col-2@sm</div>
  </div>
</div>

```html
<div class="row">
  <div class="col-6@sm col-4@md">
    // ...
  </div>
  <div class="col-6@sm col-4@md col-offset-4@md">
    // ...
  </div>
</div>

<div class="row">
  <div class="col-3@sm col-offset-3@sm">
    // ...
  </div>
  <div class="col-3@sm col-offset-3@sm">
    // ...
  </div>
</div>

<div class="row">
  <div class="col-4@sm col-offset-3@sm">
    // ...
  </div>
  <div class="col-2@sm">
    // ...
  </div>
</div>
```

## Flex
Add any number of `.col@{breakpoint}` to quickly create
equal-width columns at certain breakpoint

<div class="row">
    <div class="col@md">
        <div class="rect-box">.col@md</div>
    </div>
    <div class="col@md">
        <div class="rect-box">.col@md</div>
    </div>
    <div class="col@md">
        <div class="rect-box">.col@md</div>
    </div>
</div>

```html
<div class="row">
  <div class="col@md">
    // ...
  </div>
  <div class="col@md">
    // ...
  </div>
  <div class="col@md">
    // ...
  </div>
</div>
```

Or specify some column's width, leaving rest space to create equal-width columns

<div class="row">
    <div class="col@sm">
        <div class="rect-box">.col@sm</div>
    </div>
    <div class="col@sm">
        <div class="rect-box">.col@sm</div>
    </div>
    <div class="col-4@sm">
        <div class="rect-box">.col-4@sm</div>
    </div>
    <div class="col@sm">
        <div class="rect-box">.col@sm</div>
    </div>
    <div class="col@sm">
        <div class="rect-box">.col@sm</div>
    </div>
</div>

```html
<div class="row">
    <div class="col@sm">
        // ...
    </div>
    <div class="col@sm">
        // ...
    </div>
    <div class="col-4@sm">
        // ...
    </div>
    <div class="col@sm">
        // ...
    </div>
    <div class="col@sm">
        // ...
    </div>
</div>
```
