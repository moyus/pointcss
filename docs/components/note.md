---
layout: default
title: "Note"
---

# Note
- [Basic](#basic)
- [Types](#types)

## Basic
Note component provide prompt messages in a page for users to take notice.

<div class="note has-close">
  <a role="button" class="note__close">
    <i class="i-remove"></i>
  </a>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque praesentium velit eius, repudiandae voluptatum, non provident modi dolor accusamus sunt inventore omnis saepe repellat, officia veritatis fugiat quo tempore placeat.
  </p>
</div>

```html
<div class="note">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque praesentium velit eius, repudiandae voluptatum, non provident modi dolor accusamus sunt inventore omnis saepe repellat, officia veritatis fugiat quo tempore placeat.
  </p>
</div>
```

## Types
By adding the following modifier classes on `.note` container to quick create different styled **Note***:
- `note--info`
- `note--danger`
- `note--success`
- `note--warning`

<div class="note note--info">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque praesentium velit eius, repudiandae voluptatum, non provident modi dolor accusamus sunt inventore omnis saepe repellat, officia veritatis fugiat quo tempore placeat.
  </p>
</div>
<div class="note note--danger">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque praesentium velit eius, repudiandae voluptatum, non provident modi dolor accusamus sunt inventore omnis saepe repellat, officia veritatis fugiat quo tempore placeat.
  </p>
</div>
<div class="note note--success">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque praesentium velit eius, repudiandae voluptatum, non provident modi dolor accusamus sunt inventore omnis saepe repellat, officia veritatis fugiat quo tempore placeat.
  </p>
</div>
<div class="note note--warning">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque praesentium velit eius, repudiandae voluptatum, non provident modi dolor accusamus sunt inventore omnis saepe repellat, officia veritatis fugiat quo tempore placeat.
  </p>
</div>

```html
<div class="note note--info">
  // ...
</div>
<div class="note note--danger">
  // ...
</div>
<div class="note note--success">
  // ...
</div>
<div class="note note--warning">
  // ...
</div>
```
