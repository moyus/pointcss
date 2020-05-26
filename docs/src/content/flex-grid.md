---
layout: master
title: "Flex Grid"
catalogue:
  - Basic
  - Responsive
  - Offset
  - Flex
  - Utility
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

Use `.col-*@<breakpoint>` column class to create responsive grid layout, etc: `.col-4@md`

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

### Breakpoints

<table class="table">
  <thead>
    <tr>
      <th>breakpoint</th>
      <th>value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>sm</code></td>
      <td>768px</td>
    </tr>
    <tr>
      <td><code>md</code></td>
      <td>1000px</td>
    </tr>
    <tr>
      <td><code>lg</code></td>
      <td>1200px</td>
    </tr>
  </tbody>
</table>

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

Grid is based on flexbox, besides features below, you can attach all flexbox utility classes on `.row` element to change its layout

### Remove gutter

Add `.no-gutters` on `.row` element to remove columns gutter

<div class="row no-gutters">
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
<div class="row no-gutters">
  ...
</div>
```

### Equal width

Add any number of `.col@{breakpoint}` to quickly create equal-width columns at certain breakpoint

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

### Specify width

Specify some column's width, leaving rest space to create equal-width columns

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

## Utility

For faster mobile-friendly development, use built-in responsive utility classes for showing and hiding content by device via media query.

<table class="table table--bordered u-mb-15">
  <thead>
    <tr>
      <th></th>
      <th>Small</th>
      <th>Medium</th>
      <th>Large</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>.hidden</code></td>
      <td>Hidden</td>
      <td>Hidden</td>
      <td>Hidden</td>
    </tr>
    <tr>
      <td><code>.hidden@sm</code></td>
      <td>Hidden</td>
      <td>Hidden</td>
      <td>Hidden</td>
    </tr>
    <tr>
      <td><code>.hidden@md</code></td>
      <td><span class="badge badge--primary">Visible</span></td>
      <td>Hidden</td>
      <td>Hidden</td>
    </tr>
    <tr>
      <td><code>.hidden@lg</code></td>
      <td><span class="badge badge--primary">Visible</span></td>
      <td><span class="badge badge--primary">Visible</span></td>
      <td>Hidden</td>
    </tr>
    <tr>
      <td><code>.shown</code></td>
      <td><span class="badge badge--primary">Visible</span></td>
      <td><span class="badge badge--primary">Visible</span></td>
      <td><span class="badge badge--primary">Visible</span></td>
    </tr>
    <tr>
      <td><code>.shown@sm</code></td>
      <td><span class="badge badge--primary">Visible</span></td>
      <td><span class="badge badge--primary">Visible</span></td>
      <td><span class="badge badge--primary">Visible</span></td>
    </tr>
    <tr>
      <td><code>.shown@md</code></td>
      <td>Hidden</td>
      <td><span class="badge badge--primary">Visible</span></td>
      <td><span class="badge badge--primary">Visible</span></td>
    </tr>
    <tr>
      <td><code>.shown@lg</code></td>
      <td>Hidden</td>
      <td>Hidden</td>
      <td><span class="badge badge--primary">Visible</span></td>
    </tr>
  </tbody>
</table>
