---
layout: default
title: "Flex Grid"
---

# Flex Grid

- [Basic](#basic)
- [Responsive](#responsive)
- [Offset](#offset)
- [Flex](#flex)

## Basic

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

## Responsive
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

## Offset

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

## Flex
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
