---
layout: default
title: "Badges"
---

# Badges
- [Types](#types)
- [Cross component](#cross-component)

## Types
<div class="u-mb-15">
    <span class="badge u-mb-5">Badge label</span>
    <span class="badge badge--primary u-mb-5">Primary</span>
    <span class="badge badge--info u-mb-5">Info</span>
    <span class="badge badge--success u-mb-5">Success</span>
    <span class="badge badge--danger u-mb-5">Danger</span>
    <span class="badge badge--warning u-mb-5">Warning</span>
</div>

<div>Empty badges:</div>
<div class="u-mb-15">
    <span class="badge"></span>
    <span class="badge badge--primary"></span>
    <span class="badge badge--info"></span>
    <span class="badge badge--success"></span>
    <span class="badge badge--danger"></span>
    <span class="badge badge--warning"></span>
</div>

```html
<span class="badge">Badge label</span>
<span class="badge badge--primary">Primary</span>
<span class="badge badge--info">Info</span>
<span class="badge badge--success">Success</span>
<span class="badge badge--danger">Danger</span>
<span class="badge badge--warning">Warning</span>
```

## Cross component
By adding `.badge-floatTL`, `.badge--floatTR`, `.badge--floatBL` or `.badge--floatBR` modifier class to make badge float over the parent element.

<div class="u-mb-15">
  <button class="btn btn--default u-mb-5">
    Inbox<span class="badge badge--danger badge--floatTR"></span>
  </button>
  <button class="btn btn--default has-badge u-mb-5">
    Message<span class="badge badge--danger badge--floatTR">241</span>
  </button>
  <button class="btn btn--default has-badge u-mb-5">
    Task<span class="badge badge--warning badge--floatTR">5</span>
  </button>
</div>

```html
<button class="btn btn--default">
  Inbox<span class="badge badge--danger badge--floatTR"></span>
</button>
<button class="btn btn--default has-badge">
  Message<span class="badge badge--danger badge--floatTR">241</span>
</button>
<button class="btn btn--default has-badge">
  Task<span class="badge badge--warning badge--floatTR">5</span>
</button>
```
