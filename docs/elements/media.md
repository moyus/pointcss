---
layout: default
title: "Media"
---

# Media
- [Fluid image](#fluid-image)
- [Rounded image](#rounded-image)
- [Circle Image](#circle-image)
- [Fluid embeds](#fluid-embeds)

## Fluid image
Fluid image is made with `.img-fluid` class. `max-width: 100%;`, `height: auto;`
area applied to the image so that it scales with the parent element.

<img data-src="holder.js/1000x400" class="img-fluid u-mb-15">

```html
<img src="..." class="img-fluid" />
```

## Rounded image
By add `.img-rounded` class to apply 3px border radius on image.

<img data-src="holder.js/200x200" class="img-rounded u-mb-15 u-centerBlock">

```html
<img src="..." class="img-rounded" />
```

## Circle Image
Change image shape into circle by adding `.img-circle` class.

<img data-src="holder.js/200x200" class="img-circle u-mb-15 u-centerBlock">

```html
<img src="..." class="img-circle" />
```

## Fluid embeds
By placing `iframe`, `embed`, `video`, `object` into `.embed-fluid`
container to quickly create 16x9 fluid embeds.

<div class="embed-fluid u-mb-15">
    <iframe src="https://player.vimeo.com/video/160704576" width="640" height="427" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>

```html
<div class="embed-fluid">
   <iframe src="https://player.vimeo.com/video/160704576"></iframe>
</div>
```
