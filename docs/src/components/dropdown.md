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
  <div class="dropdown__content p-0">
    <nav class="list list--inset m-0">
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
  <div class="dropdown__content p-0">
    <nav class="list list--inset m-0">
      <a role="button" class="list__link">Item #1</a>
      <a role="button" class="list__link">Item #2</a>
      <a role="button" class="list__link">Item #3</a>
      <a role="button" class="list__link">Item #4</a>
    </nav>
  </div>
</details>
```

## Position

Use modifier classes below on `.dropdown` container to change content position

- `.dropdown--tl`
- `.dropdown--tr`
- `.dropdown--rt`
- `.dropdown--rb`
- `.dropdown--bl`
- `.dropdown--br`
- `.dropdown--lt`
- `.dropdown--lb`
