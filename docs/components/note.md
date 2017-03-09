---
layout: default
title: "Note"
---

# Note
- [Basic](#basic)
- [Types](#types)

## Basic
Note component provide prompt messages in a page for users to take note.

<div class="c-note has-close">
  <a role="button" class="c-note__close">
    <i class="i-remove"></i>
  </a>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque praesentium velit eius, repudiandae voluptatum, non provident modi dolor accusamus sunt inventore omnis saepe repellat, officia veritatis fugiat quo tempore placeat.
  </p>
</div>

```html
<div class="c-note">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque praesentium velit eius, repudiandae voluptatum, non provident modi dolor accusamus sunt inventore omnis saepe repellat, officia veritatis fugiat quo tempore placeat.
  </p>
</div>
```

## Types
By adding the following modifier classes on `.c-note` container to quick create different styled **Note***:

- `c-note--info`
- `c-note--danger`
- `c-note--success`
- `c-note--warning`

<div class="c-note c-note--info">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque praesentium velit eius, repudiandae voluptatum, non provident modi dolor accusamus sunt inventore omnis saepe repellat, officia veritatis fugiat quo tempore placeat.
  </p>
</div>
<div class="c-note c-note--danger">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque praesentium velit eius, repudiandae voluptatum, non provident modi dolor accusamus sunt inventore omnis saepe repellat, officia veritatis fugiat quo tempore placeat.
  </p>
</div>
<div class="c-note c-note--success">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque praesentium velit eius, repudiandae voluptatum, non provident modi dolor accusamus sunt inventore omnis saepe repellat, officia veritatis fugiat quo tempore placeat.
  </p>
</div>
<div class="c-note c-note--warning">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque praesentium velit eius, repudiandae voluptatum, non provident modi dolor accusamus sunt inventore omnis saepe repellat, officia veritatis fugiat quo tempore placeat.
  </p>
</div>

```html
<div class="c-note c-note--info">
  // ...
</div>
<div class="c-note c-note--danger">
  // ...
</div>
<div class="c-note c-note--success">
  // ...
</div>
<div class="c-note c-note--warning">
  // ...
</div>
```
