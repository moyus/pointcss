---
layout: master
title: "Media"
catalogue:
  - Image
  - Video
---

# Media

Provide decent styles for images and videos.

## Image

Fluid image is made with `.img-fluid` class. `max-width: 100%;` and `height: auto;` style are applied to the image so that it scales with the parent element

<img src="https://holder.moyu.io/1000/400" class="img-fluid mb-6">

```html
<img src="..." class="img-fluid" />
```

## Video

By placing `iframe`, `embed`, `video`, `object` into `.embed-fluid` container to quickly create 16x9 fluid embeds.

<div class="embed-fluid mb-6">
  <iframe src="https://player.vimeo.com/video/160704576" width="640" height="427" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
</div>

```html
<div class="embed-fluid">
  <iframe src="https://player.vimeo.com/video/160704576"></iframe>
</div>
```
