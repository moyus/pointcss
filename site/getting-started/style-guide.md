---
layout: default
title: "Style Guide"
---

# Style Guide
In order to create a more transparent UI code, **Point** introduced some great code styles from the community.

## BEM
**Point** relies on [BEM](http://getbem.com/) to create structured class names.

```html
<div class="box box--info">
  <header class="box__header">Tip</header>
  <div class="box__body">
    // ...
  </div>
</div>
```

## Namespaces
By prefixing some classes with a certain string can explain what kind of job it does.

<table class="table table--bordered">
  <thead>
    <tr>
      <th>Prefix</th>
      <th>Description</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>.l-*</code></td>
      <td>Layout</td>
      <td><code>.l-row</code>, <code>.l-col</code></td>
    </tr>
    <tr>
      <td><code>.is-*</code>, <code>.has-*</code></td>
      <td>State</td>
      <td><code>.is-active</code>, <code>.has-children</code></td>
    </tr>
    <tr>
      <td><code>.js-*</code></td>
      <td>JavaScript hooks</td>
      <td><code>.js-nav</code></td>
    </tr>
    <tr>
      <td><code>.form-*</code></td>
      <td>Form related element</td>
      <td><code>.form-input</code></td>
    </tr>
    <tr>
      <td><code>.u-*</code></td>
      <td>Utilities</td>
      <td><code>.u-color-primary</code></td>
    </tr>
  </tbody>
</table>

## Responsive Suffixes
`*@<breakpoint>` tell us *'when at this breakpoint, use this class'*. Some examples:

- `.u-hidden-up@md`: a utility class to hide things when at `md` breakpoint and up.
- `.l-col-6@sm`: change column's size to half of it's parent when at `sm` breakpoint and up
