---
layout: master
title: "Box"
catalogue:
  - Basic
  - Variant
  - Accordion
---

# Box
Group structured content into box.

## Basic

<section class="snippet">
  <div class="snippet__preview">
    <section class="box">
      <header class="box__header">Box Title</header>
      <div class="box__body">
        <div class="box__inner">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque praesentium velit eius, repudiandae voluptatum, non provident modi dolor accusamus sunt inventore omnis saepe repellat, officia veritatis fugiat quo tempore placeat.
          </p>
        </div>
      </div>
    </section>
  </div>
  <div class="snippet__source">

```html
<section class="box">
  <header class="box__header">Box Title</header>
  <div class="box__body">
    <div class="box__inner">
      ...
    </div>
  </div>
</section>
```

  </div>
</section>

## Variant

By adding the following theme modifier classes on <code>.box</code> container to quick create different styled Box

- `.box--info`
- `.box--danger`
- `.box--success`
- `.box--warning`

<section class="snippet">
  <div class="snippet__preview">
    <section class="box box--info">
      <header class="box__header">Info Box</header>
      <div class="box__body">
        <div class="box__inner">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque praesentium velit eius, repudiandae voluptatum, non provident modi dolor accusamus sunt inventore omnis saepe repellat, officia veritatis fugiat quo tempore placeat.
          </p>
        </div>
      </div>
    </section>
    <!-- END .box -->
  </div>
  <div class="snippet__source">

```html
<section class="box box--info">
  ...
</section>
```

  </div>
</section>

<section class="snippet">
  <div class="snippet__preview">
    <section class="box box--danger">
      <header class="box__header">Danger Box</header>
      <div class="box__body">
        <div class="box__inner">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque praesentium velit eius, repudiandae voluptatum, non provident modi dolor accusamus sunt inventore omnis saepe repellat, officia veritatis fugiat quo tempore placeat.
          </p>
        </div>
      </div>
    </section>
    <!-- END .box -->
  </div>
  <div class="snippet__source">

```html
<section class="box box--danger">
  ...
</section>
```

  </div>
</section>

<section class="snippet">
  <div class="snippet__preview">
    <section class="box box--success">
      <header class="box__header">Success Box</header>
      <div class="box__body">
        <div class="box__inner">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque praesentium velit eius, repudiandae voluptatum, non provident modi dolor accusamus sunt inventore omnis saepe repellat, officia veritatis fugiat quo tempore placeat.
          </p>
        </div>
      </div>
    </section>
    <!-- END .box -->
  </div>
  <div class="snippet__source">

```html
<section class="box box--success">
  ...
</section>
```

  </div>
</section>

<section class="snippet">
  <div class="snippet__preview">
    <section class="box box--warning">
      <header class="box__header">Warning Box</header>
      <div class="box__body">
        <div class="box__inner">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque praesentium velit eius, repudiandae voluptatum, non provident modi dolor accusamus sunt inventore omnis saepe repellat, officia veritatis fugiat quo tempore placeat.
          </p>
        </div>
      </div>
    </section>
    <!-- END .box -->
  </div>
  <div class="snippet__source">

```html
<section class="box box--warning">
  ...
</section>
```

  </div>
</section>

## Accordion

Pure HTML&CSS accordion component without any JavaScript code

<section class="snippet">
  <div class="snippet__preview">
    <details class="box">
      <summary class="box__header">Accordion Box #1</summary>
      <div class="box__body">
        <div class="box__inner">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque praesentium velit eius, repudiandae voluptatum, non provident modi dolor accusamus sunt inventore omnis saepe repellat, officia veritatis fugiat quo tempore placeat.
          </p>
        </div>
      </div>
    </details>
  </div>
  <div class="snippet__source">

```html
<details class="box">
  <summary class="box__header">Click Me</summary>
  <div class="box__body">
    <div class="box__inner">
      ...
    </div>
  </div>
</details>
```

  </div>
</section>
