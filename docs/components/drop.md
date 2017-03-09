---
layout: default
title: "Drop"
---

# Drop

- [Basic](#basic)
- [Position](#position)

## Basic
The most use case of **Drop** is Drop Menu, it use stacked nav
component as it's content.

<div class="u-mb-15">
  <div class="c-drop">
    <button class="btn btn--primary c-drop__toggle">Click Me</button>
    <div class="c-drop__content c-drop__content--bottomStart">
      <ul class="c-nav c-nav--pills c-nav--stacked">
        <li class="c-nav__item">
            <a role="button" class="c-nav__link is-active">Profile</a>
        </li>
        <li class="c-nav__item">
            <a role="button" class="c-nav__link">Inbox</a>
        </li>
        <li class="c-nav__item">
            <a role="button" class="c-nav__link is-disabled">Task</a>
        </li>
        <li class="c-nav__divider"></li>
        <li class="c-nav__item">
            <a role="button" class="c-nav__link">Log out</a>
        </li>
      </ul>
    </div>
  </div>
</div>

```html
<div class="c-drop">
  <button class="btn btn--primary c-drop__toggle">Click Me</button>
  <div class="c-drop__content c-drop__content--bottomStart">
    <ul class="c-nav c-nav--pills c-nav--stacked">
      <li class="c-nav__item">
          <a role="button" class="c-nav__link is-active">Profile</a>
      </li>
      <li class="c-nav__item">
          <a role="button" class="c-nav__link">Inbox</a>
      </li>
      <li class="c-nav__item">
          <a role="button" class="c-nav__link is-disabled">Task</a>
      </li>
      <li class="c-nav__divider"></li>
      <li class="c-nav__item">
          <a role="button" class="c-nav__link">Log out</a>
      </li>
    </ul>
  </div>
</div>
```

<div class="c-note c-note--warning u-mt-40">
Point only use pure css trick `.c-drop__toggle:active` to simulate click and show drop content. And Point does <strong>not</strong> include any JavaScript interaction with <strong>Drop</strong>. You need to implement the class toggle yourself.
</div>

## Position
The default position of **Drop Content** is bottomStart.
You can change the position by adding modifier classes below
on `.c-drop__content` container element.

- `.c-drop-topStart`
- `.c-drop-top`
- `.c-drop-topEnd`
- `.c-drop-rightStart`
- `.c-drop-right`
- `.c-drop-rightEnd`
- `.c-drop-bottomStart`
- `.c-drop-bottom`
- `.c-drop-bottomEnd`
- `.c-drop-leftStart`
- `.c-drop-left`
- `.c-drop-leftEnd`

<div class="u-mb-15">
  <div class="c-drop">
    <button class="btn btn--primary c-drop__toggle">Click Me</button>
    <div class="c-drop__content c-drop__content--topStart">
      <form action="#" class="form-inline u-p-10">
        <div class="form-group">
            <input type="text" class="form-input" value="Edit Me">
        </div>
        <div class="form-group">
            <button type="button" class="btn btn--info">Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>

```html
<div class="c-drop">
  <button class="btn btn--primary c-drop__toggle">Click Me</button>
  <div class="c-drop__content c-drop__content--topStart">
    <form action="#" class="form-inline u-p-10">
      <div class="form-group">
          <input type="text" class="form-input" value="Edit Me">
      </div>
      <div class="form-group">
          <button type="button" class="btn btn--info">Submit</button>
      </div>
    </form>
  </div>
</div>
```
