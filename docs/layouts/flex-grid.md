---
layout: default
title: "Flex Grid"
---

# Flex Grid

- [Model](#model)
- [Basic example](#basic-example)
- [Responsive example](#responsive-example)
- [Offset example](#offset-example)
- [Flex example](#flex-example)

## Model

Point uses flexbox and wrappers for its 12 column grid system. Assign `.l-row` and modifiers for parent container. Assign `.l-col` variations for children.
<table class="table table--bordered">
  <thead>
      <tr>
          <th>Parent class</th>
          <th>Description</th>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td><code>.l-row</code></td>
          <td>Required. Enables display: flex</td>
      </tr>
      <tr>
          <td><code>.is-col</code></td>
          <td>Main axis vertical direction</td>
      </tr>
      <tr>
          <td><code>.is-reverse</code></td>
          <td>Main axis reverse order</td>
      </tr>
      <tr>
          <td><code>.no-gutters</code></td>
          <td>Remove gaps between children</td>
      </tr>
      <tr>
          <td><code>.is-start</code></td>
          <td>justify-content: flex-start</td>
      </tr>
      <tr>
          <td><code>.is-center</code></td>
          <td>justify-content: center</td>
      </tr>
      <tr>
          <td><code>.is-end</code></td>
          <td>justify-content: flex-end</td>
      </tr>
      <tr>
          <td><code>.is-around</code></td>
          <td>justify-content: space-around</td>
      </tr>
      <tr>
          <td><code>.is-between</code></td>
          <td>justify-content: space-between</td>
      </tr>
      <tr>
          <td><code>.is-top</code></td>
          <td>align-items: flex-start</td>
      </tr>
      <tr>
          <td><code>.is-middle</code></td>
          <td>align-items: center</td>
      </tr>
      <tr>
          <td><code>.is-bottom</code></td>
          <td>align-items: flex-end</td>
      </tr>
  </tbody>
  <thead>
      <tr>
          <th>Children class</th>
          <th>Description</th>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td><code>.l-col</code></td>
          <td>Grow 1, shrink 1, basis 0%</td>
      </tr>
      <tr>
          <td><code>.l-col-fixed</code></td>
          <td>Grow 0, shrink 0, basis auto</td>
      </tr>
      <tr>
          <td><code>.l-col-1</code></td>
          <td>Grow 0, shrink 0, basis ~ 1/12 of parent</td>
      </tr>
      <tr>
          <td><code>.l-col-`N`</code></td>
          <td>Grow 0, shrink 0, basis ~ `N`/12 of parent</td>
      </tr>
      <tr>
          <td><code>.l-col-12</code></td>
          <td>Grow 0, shrink 0, basis 100%</td>
      </tr>
      <tr>
          <td><code>.l-col-offset-1</code></td>
          <td>Offset 1 column</td>
      </tr>
      <tr>
          <td><code>.l-col-offset-`N`</code></td>
          <td>Offset `N` columns</td>
      </tr>
      <tr>
          <td><code>.l-col-offset-11</code></td>
          <td>Offset 11 columns</td>
      </tr>
      <tr>
          <td><code>.l-col\@sm</code></td>
          <td>Column for sm breakpoint</td>
      </tr>
      <tr>
          <td><code>.l-col-fixed\@sm</code></td>
          <td>Fixed column for sm breakpoint</td>
      </tr>
      <tr>
          <td><code>.l-col-`N`\@sm</code></td>
          <td>Column for sm breakpoint `N`/12 width</td>
      </tr>
      <tr>
          <td><code>.l-col-offset-`N`\@sm</code></td>
          <td>Offset `N` columns for sm breakpoint</td>
      </tr>
      <tr>
          <td><code>.l-col\@md</code></td>
          <td>Column for md breakpoint</td>
      </tr>
      <tr>
          <td><code>.l-col-fixed\@md</code></td>
          <td>Fixed column for md breakpoint</td>
      </tr>
      <tr>
          <td><code>.l-col-`N`\@md</code></td>
          <td>Column for md breakpoint `N`/12 width</td>
      </tr>
      <tr>
          <td><code>.l-col-offset-`N`\@md</code></td>
          <td>Offset `N` columns for md breakpoint</td>
      </tr>
      <tr>
          <td><code>.l-col\@lg</code></td>
          <td>Column for lg breakpoint</td>
      </tr>
      <tr>
          <td><code>.l-col-fixed\@lg</code></td>
          <td>Fixed column for lg breakpoint</td>
      </tr>
      <tr>
          <td><code>.l-col-`N`\@lg</code></td>
          <td>Column for lg breakpoint `N`/12 width</td>
      </tr>
      <tr>
          <td><code>.l-col-offset-`N`\@lg</code></td>
          <td>Offset `N` columns for lg breakpoint</td>
      </tr>
  </tbody>
</table>


## Basic example

Structure:
- `.l-row`: the main container
  - `.l-col-*@<breakpoint>`: column class, etc: `.l-col-4@md`

<div class="l-row">
  <div class="l-col-6">
    <div class="shadow-box">.l-col-6</div>
  </div>
  <div class="l-col-6">
    <div class="shadow-box">.l-col-6</div>
  </div>
</div>

<div class="l-row">
  <div class="l-col-2@md">
    <div class="shadow-box">.l-col-2@md</div>
  </div>
  <div class="l-col-2@md">
    <div class="shadow-box">.l-col-2@md</div>
  </div>
  <div class="l-col-2@md">
    <div class="shadow-box">.l-col-2@md</div>
  </div>
  <div class="l-col-2@md">
    <div class="shadow-box">.l-col-2@md</div>
  </div>
  <div class="l-col-2@md">
    <div class="shadow-box">.l-col-2@md</div>
  </div>
  <div class="l-col-2@md">
    <div class="shadow-box">.l-col-2@md</div>
  </div>
</div>

<div class="l-row">
  <div class="l-col-8@md">
    <div class="shadow-box">.l-col-8@md</div>
  </div>
  <div class="l-col-4@md">
    <div class="shadow-box">.l-col-4@md</div>
  </div>
</div>

<div class="l-row">
  <div class="l-col-4@md">
    <div class="shadow-box">.l-col-4@md</div>
  </div>
  <div class="l-col-4@md">
    <div class="shadow-box">.l-col-4@md</div>
  </div>
  <div class="l-col-4@md">
    <div class="shadow-box">.l-col-4@md</div>
  </div>
</div>

```html
<div class="l-row">
  <div class="l-col-6">
    <div class="shadow-box">.l-col-6</div>
  </div>
  <div class="l-col-6">
    <div class="shadow-box">.l-col-6</div>
  </div>
</div>

<div class="l-row">
  <div class="l-col-2@md">
    <div class="shadow-box">.l-col-2@md</div>
  </div>
  <div class="l-col-2@md">
    <div class="shadow-box">.l-col-2@md</div>
  </div>
  <div class="l-col-2@md">
    <div class="shadow-box">.l-col-2@md</div>
  </div>
  <div class="l-col-2@md">
    <div class="shadow-box">.l-col-2@md</div>
  </div>
  <div class="l-col-2@md">
    <div class="shadow-box">.l-col-2@md</div>
  </div>
  <div class="l-col-2@md">
    <div class="shadow-box">.l-col-2@md</div>
  </div>
</div>

<div class="l-row">
  <div class="l-col-8@md">
    <div class="shadow-box">.l-col-8@md</div>
  </div>
  <div class="l-col-4@md">
    <div class="shadow-box">.l-col-4@md</div>
  </div>
</div>

<div class="l-row">
  <div class="l-col-4@md">
    <div class="shadow-box">.l-col-4@md</div>
  </div>
  <div class="l-col-4@md">
    <div class="shadow-box">.l-col-4@md</div>
  </div>
  <div class="l-col-4@md">
    <div class="shadow-box">.l-col-4@md</div>
  </div>
</div>
```

## Responsive example
<div class="l-row">
  <div class="l-col-6@sm l-col-7@md l-col-8@lg">
    <div class="shadow-box">.l-col-6@sm .l-col-7@md .l-col-8@lg</div>
  </div>
  <div class="l-col-6@sm l-col-5@md l-col-4@lg">
    <div class="shadow-box">.l-col-6@sm .l-col-5@md .l-col-4@lg</div>
  </div>
</div>
<div class="l-row">
  <div class="l-col-12 l-col-6@sm l-col-4@md">
    <div class="shadow-box">.l-col-12 .l-col-6@sm .l-col-4@md</div>
  </div>
  <div class="l-col-12 l-col-6@sm l-col-4@md">
    <div class="shadow-box">.l-col-12 .l-col-6@sm .l-col-4@md</div>
  </div>
  <div class="l-col-12 l-col-6@sm l-col-4@md">
    <div class="shadow-box">.l-col-12 .l-col-6@sm .l-col-4@md</div>
  </div>
</div>
<div class="l-row">
  <div class="l-col-12 l-col-6@sm">
    <div class="shadow-box">.l-col-12 .l-col-6@sm</div>
  </div>
  <div class="l-col-12 l-col-6@sm">
    <div class="shadow-box">.l-col-12 .l-col-6@sm</div>
  </div>
</div>

```html
<div class="l-row">
  <div class="l-col-6@sm l-col-7@md l-col-8@lg">
    // ...
  </div>
  <div class="l-col-6@sm l-col-5@md l-col-4@lg">
    // ...
  </div>
</div>
```

## Offset example

<div class="l-row">
  <div class="l-col-6@sm l-col-4@md">
    <div class="shadow-box">.l-col-6@sm .l-col-4@md</div>
  </div>
  <div class="l-col-6@sm l-col-4@md l-col-offset-4@md">
    <div class="shadow-box">.l-col-6@sm .l-col-4@md .l-col-offset-4@md</div>
  </div>
</div>
<div class="l-row">
  <div class="l-col-3@sm l-col-offset-3@sm">
    <div class="shadow-box">.l-col-3@sm .l-col-offset-3@sm</div>
  </div>
  <div class="l-col-3@sm l-col-offset-3@sm">
    <div class="shadow-box">.l-col-3@sm .l-col-offset-3@sm</div>
  </div>
</div>
<div class="l-row">
  <div class="l-col-4@sm l-col-offset-3@sm">
    <div class="shadow-box">.l-col-4@sm .l-col-offset-3@sm</div>
  </div>
  <div class="l-col-2@sm">
    <div class="shadow-box">.l-col-2@sm</div>
  </div>
</div>

```html
<div class="l-row">
  <div class="l-col-6@sm l-col-4@md">
    // ...
  </div>
  <div class="l-col-6@sm l-col-4@md l-col-offset-4@md">
    // ...
  </div>
</div>

<div class="l-row">
  <div class="l-col-3@sm l-col-offset-3@sm">
    // ...
  </div>
  <div class="l-col-3@sm l-col-offset-3@sm">
    // ...
  </div>
</div>

<div class="l-row">
  <div class="l-col-4@sm l-col-offset-3@sm">
    // ...
  </div>
  <div class="l-col-2@sm">
    // ...
  </div>
</div>
```

## Flex example
Add any number of `.l-col@{breakpoint}` to quickly create
equal-width columns at certain breakpoint.

<div class="l-row">
    <div class="l-col@md">
        <div class="shadow-box">.l-col@md</div>
    </div>
    <div class="l-col@md">
        <div class="shadow-box">.l-col@md</div>
    </div>
    <div class="l-col@md">
        <div class="shadow-box">.l-col@md</div>
    </div>
</div>

```html
<div class="l-row">
  <div class="l-col@md">
    // ...
  </div>
  <div class="l-col@md">
    // ...
  </div>
  <div class="l-col@md">
    // ...
  </div>
</div>
```

***

Or specify some column's width, leaving rest space to create equal-width columns.

<div class="l-row">
    <div class="l-col@sm">
        <div class="shadow-box">.l-col@sm</div>
    </div>
    <div class="l-col@sm">
        <div class="shadow-box">.l-col@sm</div>
    </div>
    <div class="l-col-4@sm">
        <div class="shadow-box">.l-col-4@sm</div>
    </div>
    <div class="l-col@sm">
        <div class="shadow-box">.l-col@sm</div>
    </div>
    <div class="l-col@sm">
        <div class="shadow-box">.l-col@sm</div>
    </div>
</div>

```html
<div class="l-row">
    <div class="l-col@sm">
        // ...
    </div>
    <div class="l-col@sm">
        // ...
    </div>
    <div class="l-col-4@sm">
        // ...
    </div>
    <div class="l-col@sm">
        // ...
    </div>
    <div class="l-col@sm">
        // ...
    </div>
</div>
```
