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
    <progress class="progress" value="15" max="100"></progress>
    <progress class="progress progress--primary" value="30" max="100"></progress>
    <progress class="progress progress--info" value="45" max="100"></progress>
    <progress class="progress progress--danger" value="60" max="100"></progress>
    <progress class="progress progress--warning" value="80" max="100"></progress>
</div>

```html
<progress class="progress" value="15" max="100"></progress>
<progress class="progress progress--primary" value="30" max="100"></progress>
<progress class="progress progress--info" value="45" max="100"></progress>
<progress class="progress progress--danger" value="60" max="100"></progress>
<progress class="progress progress--warning" value="80" max="100"></progress>
```

## Sizes
Fancy smaller or larger progress? Add `.progress--sm` or `.progress--lg` modifier
class for additional sizes.

<div class="u-mb-15">
  <progress class="progress progress--sm" value="15" max="100"></progress>
  <progress class="progress" value="30" max="100"></progress>
  <progress class="progress progress--lg" value="60" max="100"></progress>
</div>

```html
<progress class="progress progress--sm" value="15" max="100"></progress>
<progress class="progress" value="30" max="100"></progress>
<progress class="progress progress--lg" value="60" max="100"></progress>
```

## Striped
By adding `.progress--striped` modifier class to create striped progress.

<progress class="progress progress--striped" value="50" max="100"></progress>