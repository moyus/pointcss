---
layout: default
title: "Modal"
---

# Modal
- [Basic](#basic)
- [Sizes](#sizes)

## Basic
To **active** the modal, just add the `.is-active` state class on the `.c-modal` container.

<button class="btn btn--primary js-modal-trigger u-mb-15" data-target="exampleModal">Launch modal</button>

<div id="exampleModal" class="c-modal" style="background-color: rgba(0,0,0,0.65)">
  <div class="c-modal__content">
    <div class="c-modalCard">
      <header class="c-modalCard__header">
        <h4 class="c-modalCard__title">Modal Title</h4>
        <a role="button" class="c-modalCard__close js-modal-close">
          <i class="i-remove"></i>
        </a>
      </header>
      <div class="c-modalCard__body">
          "You have your way. I have my way. As for the right way, the correct way, and the only way, it does not exist."
      </div>
      <footer class="c-modalCard__footer">
          <button type="button" class="btn js-modal-close">Close</button>
          <button type="button" class="btn btn--primary">Ok</button>
      </footer>
    </div>
  </div>
</div>

```html
<div id="exampleModal" class="c-modal" style="background-color: rgba(0,0,0,0.65)">
  <div class="c-modal__content">
    <div class="c-modalCard">
      <header class="c-modalCard__header">
        <h4 class="c-modalCard__title">Modal Title</h4>
        <a role="button" class="c-modalCard__close">
          <i class="i-remove"></i>
        </a>
      </header>
      <div class="c-modalCard__body">
          "You have your way. I have my way. As for the right way, the correct way, and the only way, it does not exist."
      </div>
      <footer class="c-modalCard__footer">
          <button type="button" class="btn">Close</button>
          <button type="button" class="btn btn--primary">Ok</button>
      </footer>
    </div>
  </div>
</div>
```

<div class="c-note c-note--warning u-mt-40">
Point does <strong>not</strong> include any JavaScript interaction with <strong>Modal</strong>. You need to implement the class toggle yourself.
</div>

## Sizes
Add `.c-modalCard--sm` or `.c-modalCard--lg` modifier class on `.c-modalCard` container to quickly change the size of modalCard.

<div class="u-mb-15">
  <button class="u-mb-5 btn btn--primary js-modal-trigger" data-target="smModal">Small Modal</button>
  <button class="u-mb-5 btn btn--primary js-modal-trigger" data-target="lgModal">Large Modal</button>
</div>

<div id="smModal" class="c-modal" style="background-color: rgba(0,0,0,0.65)">
  <div class="c-modal__content">
    <div class="c-modalCard c-modalCard--sm">
      <header class="c-modalCard__header">
        <h4 class="c-modalCard__title">Large Modal</h4>
        <a role="button" class="c-modalCard__close js-modal-close">
          <i class="i-remove"></i>
        </a>
      </header>
      <div class="c-modalCard__body">
        Nullam id dolor id nibh ultricies vehicula ut id elit. Duis mollis, est
        non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem
        nec elit. Sed posuere consectetur est at lobortis. Aenean lacinia
        bibendum nulla sed consectetur. Integer posuere erat a ante venenatis
        dapibus posuere velit aliquet. Aenean lacinia bibendum nulla sed
        consectetur.
      </div>
      <footer class="c-modalCard__footer">
          <button type="button" class="btn js-modal-close">Close</button>
          <button type="button" class="btn btn--primary">Ok</button>
      </footer>
    </div>
  </div>
</div>

<div id="lgModal" class="c-modal" style="background-color: rgba(0,0,0,0.65)">
  <div class="c-modal__content">
    <div class="c-modalCard c-modalCard--lg">
      <header class="c-modalCard__header">
        <h4 class="c-modalCard__title">Large Modal</h4>
        <a role="button" class="c-modalCard__close js-modal-close">
          <i class="i-remove"></i>
        </a>
      </header>
      <div class="c-modalCard__body">
        Nullam id dolor id nibh ultricies vehicula ut id elit. Duis mollis, est
        non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem
        nec elit. Sed posuere consectetur est at lobortis. Aenean lacinia
        bibendum nulla sed consectetur. Integer posuere erat a ante venenatis
        dapibus posuere velit aliquet. Aenean lacinia bibendum nulla sed
        consectetur.
      </div>
      <footer class="c-modalCard__footer">
          <button type="button" class="btn js-modal-close">Close</button>
          <button type="button" class="btn btn--primary">Ok</button>
      </footer>
    </div>
  </div>
</div>

```html
<div id="smModal" class="c-modal" style="background-color: rgba(0,0,0,0.65)">
  <div class="c-modal__content">
    <div class="c-modalCard c-modalCard--sm">
      ...
    </div>
  </div>
</div>

<div id="lgModal" class="c-modal" style="background-color: rgba(0,0,0,0.65)">
  <div class="c-modal__content">
    <div class="c-modalCard c-modalCard--lg">
      ...
    </div>
  </div>
</div>
```
