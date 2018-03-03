---
layout: default
title: "Progress"
---

# Progress
- [Types](#types)
- [Sizes](#sizes)
- [State](#state)

## Types

<div class="u-mb-15">
  <div class="progress">
    <div class="progress__bar" style="width: 50%;"></div>
  </div>
  <div class="progress progress--primary" value="0.3">
    <div class="progress__bar" style="width: 30%;"></div>
  </div>
  <div class="progress progress--info" value="0.45">
    <div class="progress__bar" style="width: 45%;"></div>
  </div>
  <div class="progress progress--danger" value="0.6">
    <div class="progress__bar" style="width: 60%;"></div>
  </div>
  <div class="progress progress--warning" value="0.8">
    <div class="progress__bar" style="width: 80%;"></div>
  </div>
</div>

```html
<div class="progress">
  <div class="progress__bar" style="width: 50%;"></div>
</div>
<div class="progress progress--primary" value="0.3">
  <div class="progress__bar" style="width: 30%;"></div>
</div>
<div class="progress progress--info" value="0.45">
  <div class="progress__bar" style="width: 45%;"></div>
</div>
<div class="progress progress--danger" value="0.6">
  <div class="progress__bar" style="width: 60%;"></div>
</div>
<div class="progress progress--warning" value="0.8">
  <div class="progress__bar" style="width: 80%;"></div>
</div>
```

## Sizes
Fancy smaller or larger progress? Add `.progress--sm` or `.progress--lg` modifier
class for additional sizes.

<div class="u-mb-15">
  <div class="progress progress--sm">
    <div class="progress__bar" style="width: 15%;"></div>
  </div>
  <div class="progress">
    <div class="progress__bar" style="width: 30%;"></div>
  </div>
  <div class="progress progress--lg">
    <div class="progress__bar" style="width: 60%;"></div>
  </div>
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

<div class="progress is-active">
  <div class="progress__bar" style="width: 60%;"></div>
</div>
