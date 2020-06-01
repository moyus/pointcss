---
layout: master
title: Media
path:
  - Content
  - Media
catalogue:
  - Image
  - Video
---

# Media

Provide decent styles for images and videos.

## Image

Fluid image is made with `.img-fluid` class. `max-width: 100%;` and `height: auto;` style are applied to the image so that it scales with the parent element

<section class="snippet">
  <div class="snippet__preview">
    <img src="https://holder.moyu.io/1000/400" class="img-fluid">
  </div>
  <div class="snippet__source">

```html
<img src="..." class="img-fluid" />
```

  </div>
</section>

## Video

By placing `iframe`, `embed`, `video`, `object` into `.embed-fluid` container to quickly create 16x9 fluid embeds.

<section class="snippet">
  <div class="snippet__preview">
    <div class="embed-fluid">
      <iframe src="https://player.vimeo.com/video/160704576" width="640" height="427" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    </div>
  </div>
  <div class="snippet__source">

```html
<div class="embed-fluid">
  <iframe src="https://player.vimeo.com/video/160704576"></iframe>
</div>
```

  </div>
</section>
