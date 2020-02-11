---
layout: master
title: "Style Guide"
catalogue:
  - BEM
  - Colors
  - Spacing
  - Text
---

# Style Guide

In order to create a more transparent UI code, we introduced some great design principles and code styles from the community.

## BEM

Use [BEM](http://getbem.com/) to create structured class names.

```html
<div class="box box--info">
  <header class="box__header">Tip</header>
  <div class="box__body">
    // ...
  </div>
</div>
```

## Colors

### Theme Colors

<table class="table table--loose">
  <thead>
    <tr>
      <th>Color</th>
      <th>Name</th>
      <th>Hex</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <span class="circle is-2x shadow-lg bg-primary"></span>
      </td>
      <td>
        <span class="text-lg">Primary</span>
      </td>
      <td>#636AFF</td>
      <td>
        Brand color
      </td>
    </tr>
    <tr>
      <td>
        <span class="circle is-2x shadow-lg bg-info"></span>
      </td>
      <td>
        <span class="text-lg">Info</span>
      </td>
      <td>#0069FF</td>
      <td>
        Accent color
      </td>
    </tr>
    <tr>
      <td>
        <span class="circle is-2x shadow-lg bg-success"></span>
      </td>
      <td>
        <span class="text-lg">Success</span>
      </td>
      <td>#15CD72</td>
      <td>
        Positive color
      </td>
    </tr>
    <tr>
      <td>
        <span class="circle is-2x shadow-lg bg-danger"></span>
      </td>
      <td>
        <span class="text-lg">Danger</span>
      </td>
      <td>#FF2D20</td>
      <td>
        Negative color
      </td>
    </tr>
    <tr>
      <td>
        <span class="circle is-2x shadow-lg bg-warning"></span>
      </td>
      <td>
        <span class="text-lg">Warning</span>
      </td>
      <td>#ED6E33</td>
      <td>
        Warning color
      </td>
    </tr>
  </tbody>
</table>

### Grey Colors

<table class="table table--loose">
  <thead>
    <tr>
      <th>Color</th>
      <th>Name</th>
      <th>Hex</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <span class="circle is-2x shadow-lg bg-black"></span>
      </td>
      <td>
        <span class="text-lg">Black</span>
      </td>
      <td>#000000</td>
      <td>
        Use Black to shade colors or add shadows with transparency
      </td>
    </tr>
    <tr>
      <td>
        <span class="circle is-2x shadow-lg bg-dark"></span>
      </td>
      <td>
        <span class="text-lg">Dark</span>
      </td>
      <td>#212121</td>
      <td>
        Primary color for heading, body text
      </td>
    </tr>
    <tr>
      <td>
        <span class="circle is-2x shadow-lg bg-mute"></span>
      </td>
      <td>
        <span class="text-lg">Mute</span>
      </td>
      <td>#616161</td>
      <td>
        Secondary color for text, meta info, icons
      </td>
    </tr>
    <tr>
      <td>
        <span class="circle is-2x shadow-lg bg-thin"></span>
      </td>
      <td>
        <span class="text-lg">Thin</span>
      </td>
      <td>#DBDBDB</td>
      <td>
        Color for borders, form controls, icons
      </td>
    </tr>
    <tr>
      <td>
        <span class="circle is-2x shadow-lg bg-weak"></span>
      </td>
      <td>
        <span class="text-lg">Weak</span>
      </td>
      <td>#E5E5E5</td>
      <td>
        Color for lines, cards
      </td>
    </tr>
    <tr>
      <td>
        <span class="circle is-2x shadow-lg bg-shade"></span>
      </td>
      <td>
        <span class="text-lg">Shade</span>
      </td>
      <td>#EEEEEE</td>
      <td>
        Color for disabled state
      </td>
    </tr>
    <tr>
      <td>
        <span class="circle is-2x shadow-lg bg-light"></span>
      </td>
      <td>
        <span class="text-lg">Light</span>
      </td>
      <td>#F7F7F7</td>
      <td>
        Color for backgrounds
      </td>
    </tr>
    <tr>
      <td>
        <span class="circle is-2x shadow-lg bg-white"></span>
      </td>
      <td>
        <span class="text-lg">White</span>
      </td>
      <td>#FFFFFF</td>
      <td>
        Use White to tint colors, white text on dark backgrounds
      </td>
    </tr>
  </tbody>
</table>

## Spacing

Use spacing to create layouts that feels comfortable

<table class="table table--loose">
  <thead>
    <tr>
      <th>Type</th>
      <th>Properties</th>
      <th>Exammple</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="7">
        <div class="text-title-xs font-medium">Stack</div>
        <div class="text-meta-md color-mute">Spacing for horizontal or vertical stack layouts</div>
      </td>
      <td>xxs: 2px</td>
      <td class="text-right">
        <span class="inline-flex bg-danger p-1"></span>
      </td>
    </tr>
    <tr>
      <td>xs: 4px</td>
      <td class="text-right">
        <span class="inline-flex bg-danger p-2"></span>
      </td>
    </tr>
    <tr>
      <td>sm: 8px</td>
      <td class="text-right">
        <span class="inline-flex bg-danger p-4"></span>
      </td>
    </tr>
    <tr>
      <td>md: 16px</td>
      <td class="text-right">
        <span class="inline-flex bg-danger p-6"></span>
      </td>
    </tr>
    <tr>
      <td>lg: 24px</td>
      <td class="text-right">
        <span class="inline-flex bg-danger p-7"></span>
      </td>
    </tr>
    <tr>
      <td>xl: 32px</td>
      <td class="text-right">
        <span class="inline-flex bg-danger p-8"></span>
      </td>
    </tr>
    <tr>
      <td>xxl: 64px</td>
      <td class="text-right">
        <span class="inline-flex bg-danger p-9"></span>
      </td>
    </tr>
    <tr>
      <td rowspan="5">
        <div class="text-title-xs font-medium">Square</div>
        <div class="text-meta-md color-mute">Spacing for square inset box layouts</div>
      </td>
      <td>xs: 4px</td>
      <td class="text-right">
        <span class="inline-flex bg-danger p-2"><span class="rect"></span></span>
      </td>
    </tr>
    <tr>
      <td>sm: 8px</td>
      <td class="text-right">
        <span class="inline-flex bg-danger p-4"><span class="rect"></span></span>
      </td>
    </tr>
    <tr>
      <td>md: 16px</td>
      <td class="text-right">
        <span class="inline-flex bg-danger p-6"><span class="rect"></span></span>
      </td>
    </tr>
    <tr>
      <td>lg: 32px</td>
      <td class="text-right">
        <span class="inline-flex bg-danger p-8"><span class="rect"></span></span>
      </td>
    </tr>
    <tr>
      <td>xl: 64px</td>
      <td class="text-right">
        <span class="inline-flex bg-danger p-9"><span class="rect"></span></span>
      </td>
    </tr>
    <tr>
      <td rowspan="6">
        <div class="text-title-xs font-medium">Squish</div>
        <div class="text-meta-md color-mute">Spacing for squish inset box layouts</div>
      </td>
    </tr>
    <tr>
      <td>xs: 4px, 8px</td>
      <td class="text-right">
        <span class="inline-flex bg-danger py-2 px-4"><span class="rect"></span></span>
      </td>
    </tr>
    <tr>
      <td>sm: 6, 12px</td>
      <td class="text-right">
        <span class="inline-flex bg-danger py-3 px-5"><span class="rect"></span></span>
      </td>
    </tr>
    <tr>
      <td>md: 8px, 16px</td>
      <td class="text-right">
        <span class="inline-flex bg-danger py-4 px-6"><span class="rect"></span></span>
      </td>
    </tr>
    <tr>
      <td>lg: 12px, 24px</td>
      <td class="text-right">
        <span class="inline-flex bg-danger py-5 px-7"><span class="rect"></span></span>
      </td>
    </tr>
    <tr>
      <td>xl: 16px, 32px</td>
      <td class="text-right">
        <span class="inline-flex bg-danger py-6 px-8"><span class="rect"></span></span>
      </td>
    </tr>
  </tbody>
</table>

## Text

<table class="table table--loose">
  <thead>
    <tr>
      <th>Type</th>
      <th>Properties</th>
      <th class="text-right">Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="3">Display</th>
      <td>lg: 64px</td>
      <td class="text-right"><span class="text-display-lg line-relaxed">Lorem</span></td>
    </tr>
    <tr>
      <td>md: 48px</td>
      <td class="text-right"><span class="text-display-md line-relaxed">Lorem</span></td>
    </tr>
    <tr>
      <td>sm: 36px</td>
      <td class="text-right"><span class="text-display-sm line-relaxed">Lorem</span></td>
    </tr>
    <tr>
      <th rowspan="5">Title</th>
      <td>xl: 32px</td>
      <td class="text-right"><span class="text-title-xl line-relaxed">Lorem</span></td>
    </tr>
    <tr>
      <td>lg: 28px</td>
      <td class="text-right"><span class="text-title-lg line-relaxed">Lorem</span></td>
    </tr>
    <tr>
      <td>md: 24px</td>
      <td class="text-right"><span class="text-title-md line-relaxed">Lorem</span></td>
    </tr>
    <tr>
      <td>sm: 20px</td>
      <td class="text-right"><span class="text-title-sm line-relaxed">Lorem</span></td>
    </tr>
    <tr>
      <td>xs: 18px</td>
      <td class="text-right"><span class="text-title-xs line-relaxed">Lorem</span></td>
    </tr>
    <tr>
      <th rowspan="3">Base</th>
      <td>lg: 18px</td>
      <td class="text-right"><span class="text-lg line-relaxed">Lorem</span></td>
    </tr>
    <tr>
      <td>md: 16px</td>
      <td class="text-right"><span class="text-md line-relaxed">Lorem</span></td>
    </tr>
    <tr>
      <td>sm: 14px</td>
      <td class="text-right"><span class="text-sm line-relaxed">Lorem</span></td>
    </tr>
    <tr>
      <th rowspan="3">Meta</th>
      <td>lg: 16px</td>
      <td class="text-right"><span class="text-meta-lg line-relaxed">Lorem</span></td>
    </tr>
    <tr>
      <td>md: 14px</td>
      <td class="text-right"><span class="text-meta-sm line-relaxed">Lorem</span></td>
    </tr>
    <tr>
      <td>sm: 12px</td>
      <td class="text-right"><span class="text-meta-xs line-relaxed">Lorem</span></td>
    </tr>
  </tbody>
</table>
