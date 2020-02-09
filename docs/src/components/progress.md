---
layout: master
title: "Progress"
catalogue:
  - Basic
  - Variants
  - Sizing
  - State
---

# Progress

## Basic

<div class="progress mb-6">
  <div class="progress__bar" style="width: 50%;"></div>
</div>

```html
<div class="progress">
  <div class="progress__bar" style="width: 50%;"></div>
</div>
```

## Variants

<div class="progress progress--primary mb-6">
  <div class="progress__bar" style="width: 20%;"></div>
</div>
<div class="progress progress--info mb-6">
  <div class="progress__bar" style="width: 30%;"></div>
</div>
<div class="progress mb-6">
  <div class="progress__bar" style="width: 40%;"></div>
</div>
<div class="progress progress--danger mb-6">
  <div class="progress__bar" style="width: 50%;"></div>
</div>
<div class="progress progress--success mb-6">
  <div class="progress__bar" style="width: 60%;"></div>
</div>
<div class="progress progress--warning mb-6">
  <div class="progress__bar" style="width: 70%;"></div>
</div>

```html
<div class="progress">
  <div class="progress__bar" style="width: 50%;"></div>
</div>
<div class="progress progress--primary" >
  <div class="progress__bar" style="width: 20%;"></div>
</div>
<div class="progress progress--info">
  <div class="progress__bar" style="width: 40%;"></div>
</div>
<div class="progress progress--danger">
  <div class="progress__bar" style="width: 55%;"></div>
</div>
<div class="progress progress--success">
    <div class="progress__bar" style="width: 70%;"></div>
  </div>
<div class="progress progress--warning">
  <div class="progress__bar" style="width: 80%;"></div>
</div>
```

## Sizing
Fancy smaller or larger progress? Add `.progress--sm` or `.progress--lg` modifier class for additional sizes.

<div class="progress progress--sm mb-6">
  <div class="progress__bar" style="width: 15%;"></div>
</div>
<div class="progress mb-6">
  <div class="progress__bar" style="width: 30%;"></div>
</div>
<div class="progress progress--lg mb-6">
  <div class="progress__bar" style="width: 60%;"></div>
</div>

```html
<div class="progress progress--sm">
  <div class="progress__bar" style="width: 15%;"></div>
</div>
<div class="progress">
  <div class="progress__bar" style="width: 30%;"></div>
</div>
<div class="progress progress--lg">
  <div class="progress__bar" style="width: 60%;"></div>
</div>
```

## State
By adding `.is-active` modifier class to create animated progress.

<div class="progress mb-6 is-active">
  <div class="progress__bar" style="width: 60%;"></div>
</div>
