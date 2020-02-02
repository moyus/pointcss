---
layout: default
title: "Box"
---

# Box
- [Basic](#basic)
- [Types](#types)

## Basic
Sometimes you have groups of content and need to put them in boxes. In those
situations, try the Box component.

<div class="box">
  <header class="box__header">Box Title</header>
  <div class="box__body">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque praesentium velit eius, repudiandae voluptatum, non provident modi dolor accusamus sunt inventore omnis saepe repellat, officia veritatis fugiat quo tempore placeat.
    </p>
  </div>
</div>

```html
<div class="box">
  <header class="box__header">Box Title</header>
  <div class="box__body">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque praesentium velit eius, repudiandae voluptatum, non provident modi dolor accusamus sunt inventore omnis saepe repellat, officia veritatis fugiat quo tempore placeat.
    </p>
  </div>
</div>
```

## Types
By adding the following modifier classes on <code>.box</code> container to quick create different styled Box

- `box--info`
- `box--danger`
- `box--success`
- `box--warning`

<div class="box box--info">
  <header class="box__header">Info Box</header>
  <div class="box__body">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque praesentium velit eius, repudiandae voluptatum, non provident modi dolor accusamus sunt inventore omnis saepe repellat, officia veritatis fugiat quo tempore placeat.
    </p>
  </div>
</div>
<!-- END .box -->
<div class="box box--danger">
  <header class="box__header">Danger Box</header>
  <div class="box__body">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque praesentium velit eius, repudiandae voluptatum, non provident modi dolor accusamus sunt inventore omnis saepe repellat, officia veritatis fugiat quo tempore placeat.
    </p>
  </div>
</div>
<!-- END .box -->
<div class="box box--success">
  <header class="box__header">Success Box</header>
  <div class="box__body">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque praesentium velit eius, repudiandae voluptatum, non provident modi dolor accusamus sunt inventore omnis saepe repellat, officia veritatis fugiat quo tempore placeat.
    </p>
  </div>
</div>
<!-- END .box -->
<div class="box box--warning">
  <header class="box__header">Warning Box</header>
  <div class="box__body">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque praesentium velit eius, repudiandae voluptatum, non provident modi dolor accusamus sunt inventore omnis saepe repellat, officia veritatis fugiat quo tempore placeat.
    </p>
  </div>
</div>
<!-- END .box -->

```html
<div class="box box--info">
  <header class="box__header">Info Box</header>
  <div class="box__body">
    // ...
  </div>
</div>
<!-- END .box -->
<div class="box box--danger">
  <header class="box__header">Danger Box</header>
  <div class="box__body">
    // ...
  </div>
</div>
<!-- END .box -->
<div class="box box--success">
  <header class="box__header">Success Box</header>
  <div class="box__body">
    // ...
  </div>
</div>
<!-- END .box -->
<div class="box box--warning">
  <header class="box__header">Warning Box</header>
  <div class="box__body">
    // ...
  </div>
</div>
<!-- END .box -->
```
