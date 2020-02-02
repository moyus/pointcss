---
layout: default
title: "Style Guide"
---

# Style Guide
In order to create a more transparent UI code, **pointcss** introduced some great design principles and code styles from the community.

## BEM
**pointcss** relies on [BEM](http://getbem.com/) to create structured class names.

```html
<div class="box box--info">
  <header class="box__header">Tip</header>
  <div class="box__body">
    // ...
  </div>
</div>
```

## Colors

## Spacing

## Responsive Suffixes
`*@<breakpoint>` tell us *'when at this breakpoint, use this class'*. Some examples:

- `.u-hidden-up@md`: a utility class to hide things when at `md` breakpoint and up.
- `.l-col-6@sm`: change column's size to half of it's parent when at `sm` breakpoint and up
