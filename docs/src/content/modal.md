---
layout: master
title: "Modal"
catalogue:
  - Basic
  - Sizing
---

# Modal

A floating layer to get user's feedback or display information.

## Basic

<section class="snippet">
  <div class="snippet__preview">
    <button class="btn" data-toggle="modal" data-target="example-modal">Open Modal</button>
  </div>
  <div class="snippet__source">

```html
<body class="is-masking">
  <div id="example-modal" class="modal modal--mask" tabindex="-1" role="dialog">
    <div class="modal__content" role="document">
      <header class="modal__header">
        <h4 class="modal__title">Modal Title</h4>
        <button type="button" class="modal__close">
          <span aria-hidden="true">&times;</span>
        </button>
      </header>
      <div class="modal__body">
          "You have your way. I have my way. As for the right way, the correct way, and the only way, it does not exist."
      </div>
      <footer class="modal__footer">
          <button type="button" class="btn">Close</button>
          <button type="button" class="btn btn--primary">Ok</button>
      </footer>
    </div>
  </div>
</div>
```

  </div>
</section>

<div id="example-modal" class="modal modal--mask hidden" tabindex="-1" role="dialog">
  <div class="modal__content" role="document">
    <header class="modal__header">
      <h4 class="modal__title">Modal Title</h4>
      <button type="button" class="modal__close" data-leave="modal" data-target="example-modal">
        <span aria-hidden="true">&times;</span>
      </button>
    </header>
    <div class="modal__body">
        "You have your way. I have my way. As for the right way, the correct way, and the only way, it does not exist."
    </div>
    <footer class="modal__footer">
        <button type="button" class="btn" data-leave="modal" data-target="example-modal">Close</button>
        <button type="button" class="btn btn--primary">Ok</button>
    </footer>
  </div>
</div>

<div class="note note--warning my-5">
  <p>
    pointcss does <strong>not</strong> include any JavaScript interaction with <strong>Modal</strong>. You need to implement the class toggle by yourself.
  </p>
</div>

## Sizing

Add `.modal--sm` or `.modal--lg` modifier class on `.modal` element to quickly change the size of modal content

<section class="snippet">
  <div class="snippet__preview">
    <button class="btn js-modal-trigger" data-toggle="modal" data-target="sm-modal">Small Modal</button>
    <button class="btn js-modal-trigger" data-toggle="modal" data-target="lg-modal">Large Modal</button>
  </div>
  <div class="snippet__source">


```html
<div id="sm-modal" class="modal modal--mask modal--sm" tabindex="-1" role="dialog">
  <div class="modal__content" role="document">
    ...
  </div>
</div>

<div id="lg-modal" class="modal modal--mask modal--lg" tabindex="-1" role="dialog">
  <div class="modal__content" role="document">
    ...
  </div>
</div>
```

  </div>
</section>

<div id="sm-modal" class="modal modal--mask modal--sm hidden" tabindex="-1" role="dialog">
  <div class="modal__content" role="document">
    <header class="modal__header">
      <h4 class="modal__title">Large Modal</h4>
      <button type="button" class="modal__close" data-leave="modal" data-target="sm-modal">
        <span aria-hidden="true">&times;</span>
      </button>
    </header>
    <div class="modal__body">
      Nullam id dolor id nibh ultricies vehicula ut id elit. Duis mollis, est
      non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem
      nec elit. Sed posuere consectetur est at lobortis. Aenean lacinia
      bibendum nulla sed consectetur. Integer posuere erat a ante venenatis
      dapibus posuere velit aliquet. Aenean lacinia bibendum nulla sed
      consectetur.
    </div>
    <footer class="modal__footer">
        <button type="button" class="btn" data-leave="modal" data-target="sm-modal">Close</button>
        <button type="button" class="btn btn--primary">Ok</button>
    </footer>
  </div>
</div>

<div id="lg-modal" class="modal modal--mask modal--lg hidden" tabindex="-1" role="dialog">
  <div class="modal__content" role="document">
    <header class="modal__header">
      <h4 class="modal__title">Large Modal</h4>
      <button type="button" class="modal__close" data-leave="modal" data-target="lg-modal">
        <span aria-hidden="true">&times;</span>
      </button>
    </header>
    <div class="modal__body">
      Nullam id dolor id nibh ultricies vehicula ut id elit. Duis mollis, est
      non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem
      nec elit. Sed posuere consectetur est at lobortis. Aenean lacinia
      bibendum nulla sed consectetur. Integer posuere erat a ante venenatis
      dapibus posuere velit aliquet. Aenean lacinia bibendum nulla sed
      consectetur.
    </div>
    <footer class="modal__footer">
      <button type="button" class="btn" data-leave="modal" data-target="lg-modal">Close</button>
      <button type="button" class="btn btn--primary">Ok</button>
    </footer>
  </div>
</div>
