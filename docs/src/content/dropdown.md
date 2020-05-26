---
layout: master
title: "Dropdown"
catalogue:
  - Basic
  - Position
---

# Dropdown

Pure CSS interactive component for discoverable content.

## Basic

<details class="dropdown">
  <summary class="btn dropdown__trigger">Click Me</summary>
  <div class="dropdown__content">
    <nav class="list list--inset list--borderless m-0">
      <a role="button" class="list__link">Item #1</a>
      <a role="button" class="list__link">Item #2</a>
      <a role="button" class="list__link">Item #3</a>
      <a role="button" class="list__link">Item #4</a>
    </nav>
  </div>
</details>

```html
<details class="dropdown">
  <summary class="btn dropdown__trigger">Click Me</summary>
  <div class="dropdown__content">
    <nav class="list list--inset list--borderless m-0">
      <a role="button" class="list__link">Item #1</a>
      <a role="button" class="list__link">Item #2</a>
      <a role="button" class="list__link">Item #3</a>
      <a role="button" class="list__link">Item #4</a>
    </nav>
  </div>
</details>
```

## Position

Use modifier classes below on `.dropdown` container to change the content position

- `.dropdown--tl`
- `.dropdown--tr`
- `.dropdown--rt`
- `.dropdown--rb`
- `.dropdown--bl`
- `.dropdown--br`
- `.dropdown--lt`
- `.dropdown--lb`

<div class="level level@md">
  <div class="level__item">
    <details class="dropdown dropdown--tl">
      <summary class="btn dropdown__trigger">Click Me</summary>
      <div class="dropdown__content">
        <nav class="list list--inset list--borderless m-0">
          <a role="button" class="list__link">Item #1</a>
          <a role="button" class="list__link">Item #2</a>
          <a role="button" class="list__link">Item #3</a>
          <a role="button" class="list__link">Item #4</a>
        </nav>
      </div>
    </details>
  </div>
  <div class="level__item">
    <details class="dropdown dropdown--rt">
      <summary class="btn dropdown__trigger">Click Me</summary>
      <div class="dropdown__content">
        <nav class="list list--inset list--borderless m-0">
          <a role="button" class="list__link">Item #1</a>
          <a role="button" class="list__link">Item #2</a>
          <a role="button" class="list__link">Item #3</a>
          <a role="button" class="list__link">Item #4</a>
        </nav>
      </div>
    </details>
  </div>
  <div class="level__item">
    <details class="dropdown dropdown--bl">
      <summary class="btn dropdown__trigger">Click Me</summary>
      <div class="dropdown__content">
        <nav class="list list--inset list--borderless m-0">
          <a role="button" class="list__link">Item #1</a>
          <a role="button" class="list__link">Item #2</a>
          <a role="button" class="list__link">Item #3</a>
          <a role="button" class="list__link">Item #4</a>
        </nav>
      </div>
    </details>
  </div>
  <div class="level__item">
    <details class="dropdown dropdown--lt">
      <summary class="btn dropdown__trigger">Click Me</summary>
      <div class="dropdown__content">
        <nav class="list list--inset list--borderless m-0">
          <a role="button" class="list__link">Item #1</a>
          <a role="button" class="list__link">Item #2</a>
          <a role="button" class="list__link">Item #3</a>
          <a role="button" class="list__link">Item #4</a>
        </nav>
      </div>
    </details>
  </div>
</div>
