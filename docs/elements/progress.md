---
layout: default
title: "Progress"
---

# Progress
- [Types](#types)
- [Sizes](#sizes)
- [Striped](#striped)

## Types
Native HTML `progress` bar with five predefined styles.

<div class="u-mb-15">
    <progress class="progress" value="0.5"></progress>
    <progress class="progress progress--primary" value="0.3"></progress>
    <progress class="progress progress--info" value="0.45"></progress>
    <progress class="progress progress--danger" value="0.6"></progress>
    <progress class="progress progress--warning" value="0.8"></progress>
</div>

```html
<progress class="progress" value="0.5"></progress>
<progress class="progress progress--primary" value="0.3"></progress>
<progress class="progress progress--info" value="0.45"></progress>
<progress class="progress progress--danger" value="0.6"></progress>
<progress class="progress progress--warning" value="0.8"></progress>
```

## Sizes
Fancy smaller or larger progress? Add `.progress--sm` or `.progress--lg` modifier
class for additional sizes.

<div class="u-mb-15">
  <progress class="progress progress--sm" value="0.15"></progress>
  <progress class="progress" value="0.3"></progress>
  <progress class="progress progress--lg" value="0.6"></progress>
</div>

```html
<progress class="progress progress--sm" value="0.15"></progress>
<progress class="progress" value="0.3"></progress>
<progress class="progress progress--lg" value="0.6"></progress>
```

## Striped
By adding `.progress--striped` modifier class to create striped progress.

<progress class="progress progress--striped" value="0.5"></progress>