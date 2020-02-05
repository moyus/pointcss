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

<button class="btn js-modal-trigger mb-5" data-target="exampleModal">Open Modal</button>

<div id="exampleModal" class="modal-wrapper hidden">
  <section class="modal">
    <header class="modal__header">
      <h4 class="modal__title">Modal Title</h4>
      <a role="button" class="modal__close js-modal-close">
        <span aria-hidden="true">&times;</span>
      </a>
    </header>
    <div class="modal__body">
        "You have your way. I have my way. As for the right way, the correct way, and the only way, it does not exist."
    </div>
    <footer class="modal__footer">
        <button type="button" class="btn js-modal-close">Close</button>
        <button type="button" class="btn btn--primary">Ok</button>
    </footer>
  </section>
</div>

```html
<body>
  <div id="exampleModal" class="modal-wrapper">
    <section class="modal">
      <header class="modal__header">
        <h4 class="modal__title">Modal Title</h4>
        <a role="button" class="modal__close js-modal-close">
          <span aria-hidden="true">&times;</span>
        </a>
      </header>
      <div class="modal__body">
          "You have your way. I have my way. As for the right way, the correct way, and the only way, it does not exist."
      </div>
      <footer class="modal__footer">
          <button type="button" class="btn js-modal-close">Close</button>
          <button type="button" class="btn btn--primary">Ok</button>
      </footer>
    </section>
  </div>

  <div class="mask"></div>
</div>
```

<div class="note note--warning my-5">
  <p>
    pointcss does <strong>not</strong> include any JavaScript interaction with <strong>Modal</strong>. You need to implement the class toggle by yourself.
  </p>
</div>

## Sizing

Add `.modal--sm` or `.modal--lg` modifier class on `.modal` element to quickly change the size of modal content

<div class="mb-5">
  <button class="btn js-modal-trigger" data-target="smModal">Small Modal</button>
  <button class="btn js-modal-trigger" data-target="lgModal">Large Modal</button>
</div>

<div id="smModal" class="modal-wrapper hidden">
  <section class="modal modal--sm">
    <header class="modal__header">
      <h4 class="modal__title">Large Modal</h4>
      <a role="button" class="modal__close js-modal-close">
        <span aria-hidden="true">&times;</span>
      </a>
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
        <button type="button" class="btn js-modal-close">Close</button>
        <button type="button" class="btn btn--primary">Ok</button>
    </footer>
  </section>
</div>

<div id="lgModal" class="modal-wrapper hidden">
  <section class="modal modal--lg">
    <header class="modal__header">
      <h4 class="modal__title">Large Modal</h4>
      <a role="button" class="modal__close js-modal-close">
        <span aria-hidden="true">&times;</span>
      </a>
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
        <button type="button" class="btn js-modal-close">Close</button>
        <button type="button" class="btn btn--primary">Ok</button>
    </footer>
  </section>
</div>

```html
<div id="smModal" class="modal-wrapper">
  <section class="modal modal--sm">
    ...
  </section>
</div>

<div id="lgModal" class="modal-wrapper">
  <section class="modal modal--lg">
    ...
  </section>
</div>
```
