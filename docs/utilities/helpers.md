---
layout: default
title: "Helpers"
---

# Helpers

- [Colors](#colors)
- [Spaces](#spaces)
- [Text](#text)
- [Border](#border)
- [Display](#display)
- [Flexbox](#flexbox)

## Colors
Change text color or background color.

<table class="table table--bordered">
  <thead>
      <tr>
          <th>Class</th>
          <th>Example</th>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td><code>.u-color-primary</code></td>
          <td><span class="u-color-primary">Lorem ipsum dolor sit amet.</span></td>
      </tr>
      <tr>
          <td><code>.u-color-success</code></td>
          <td><span class="u-color-success">Lorem ipsum dolor sit amet.</span></td>
      </tr>
      <tr>
          <td><code>.u-color-info</code></td>
          <td><span class="u-color-info">Lorem ipsum dolor sit amet.</span></td>
      </tr>
      <tr>
          <td><code>.u-color-danger</code></td>
          <td><span class="u-color-danger">Lorem ipsum dolor sit amet.</span></td>
      </tr>
      <tr>
          <td><code>.u-color-warning</code></td>
          <td><span class="u-color-warning">Lorem ipsum dolor sit amet.</span></td>
      </tr>
      <tr>
          <td><code>.u-color-grey-darkest</code></td>
          <td><span class="u-color-grey-darkest">Lorem ipsum dolor sit amet.</span></td>
      </tr>
      <tr>
          <td><code>.u-color-grey-dark</code></td>
          <td><span class="u-color-grey-dark">Lorem ipsum dolor sit amet.</span></td>
      </tr>
      <tr>
          <td><code>.u-color-grey</code></td>
          <td><span class="u-color-grey">Lorem ipsum dolor sit amet.</span></td>
      </tr>
      <tr>
          <td><code>.u-color-grey-light</code></td>
          <td><span class="u-color-grey-light">Lorem ipsum dolor sit amet.</span></td>
      </tr>
      <tr>
          <td><code>.u-color-grey-lighter</code></td>
          <td><span class="u-color-grey-lighter">Lorem ipsum dolor sit amet.</span></td>
      </tr>
      <tr>
          <td><code>.u-color-grey-lightest</code></td>
          <td><span class="u-color-grey-lightest">Lorem ipsum dolor sit amet.</span></td>
      </tr>
      <tr>
          <td><code>.u-bg-primary</code></td>
          <td><span class="u-bg-primary u-pr-60 u-pb-5"></span></td>
      </tr>
      <tr>
          <td><code>.u-bg-success</code></td>
          <td><span class="u-bg-success u-pr-60 u-pb-5"></span></td>
      </tr>
      <tr>
          <td><code>.u-bg-info</code></td>
          <td><span class="u-bg-info u-pr-60 u-pb-5"></span></td>
      </tr>
      <tr>
          <td><code>.u-bg-danger</code></td>
          <td><span class="u-bg-danger u-pr-60 u-pb-5"></span></td>
      </tr>
      <tr>
          <td><code>.u-bg-warning</code></td>
          <td><span class="u-bg-warning u-pr-60 u-pb-5"></span></td>
      </tr>
      <tr>
          <td><code>.u-bg-grey-darkest</code></td>
          <td><span class="u-bg-grey-darkest u-pr-60 u-pb-5"></span></td>
      </tr>
      <tr>
          <td><code>.u-bg-grey-dark</code></td>
          <td><span class="u-bg-grey-dark u-pr-60 u-pb-5"></span></td>
      </tr>
      <tr>
          <td><code>.u-bg-grey</code></td>
          <td><span class="u-bg-grey u-pr-60 u-pb-5"></span></td>
      </tr>
      <tr>
          <td><code>.u-bg-grey-light</code></td>
          <td><span class="u-bg-grey-light u-pr-60 u-pb-5"></span></td>
      </tr>
      <tr>
          <td><code>.u-bg-grey-lighter</code></td>
          <td><span class="u-bg-grey-lighter u-pr-60 u-pb-5"></span></td>
      </tr>
      <tr>
          <td><code>.u-bg-grey-lightest</code></td>
          <td><span class="u-bg-grey-lightest u-pr-60 u-pb-5"></span></td>
      </tr>
  </tbody>
</table>

## Spaces
Space step is 5px, start from 0, end at 60px

<table class="table table--bordered">
  <thead>
      <tr>
          <th>Class</th>
          <th>Description</th>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td><code>.u-mt-*</code></td>
          <td>
              <code>.u-mt-0</code> is <code>margin-top: 0 !important;</code>
          </td>
      </tr>
      <tr>
          <td><code>.u-mb-*</code></td>
          <td>
              <code>.u-mb-5</code> is <code>margin-bottom: 5px !important;</code>
          </td>
      </tr>
      <tr>
          <td><code>.u-ml-*</code></td>
          <td>
              <code>.u-ml-10</code> is <code>margin-left: 10px !important;</code>
          </td>
      </tr>
      <tr>
          <td><code>.u-mr-*</code></td>
          <td>
              <code>.u-mr-15</code> is <code>margin-right: 15px !important;</code>
          </td>
      </tr>
      <tr>
          <td><code>.u-m-*</code></td>
          <td>
              <code>.u-m-20</code> is <code>margin: 20px !important;</code>
          </td>
      </tr>
      <tr>
          <td><code>.u-pt-*</code></td>
          <td>
              <code>.u-pt-0</code> is <code>padding-top: 0 !important;</code>
          </td>
      </tr>
      <tr>
          <td><code>.u-pb-*</code></td>
          <td>
              <code>.u-pb-5</code> is <code>padding-bottom: 5px !important;</code>
          </td>
      </tr>
      <tr>
          <td><code>.u-pl-*</code></td>
          <td>
              <code>.u-pl-10</code> is <code>padding-left: 10px !important;</code>
          </td>
      </tr>
      <tr>
          <td><code>.u-pr-*</code></td>
          <td>
              <code>.u-pr-15</code> is <code>padding-right: 15px !important;</code>
          </td>
      </tr>
      <tr>
          <td><code>.u-p-*</code></td>
          <td>
              <code>.u-p-20</code> is <code>padding: 20px !important;</code>
          </td>
      </tr>
  </tbody>
</table>

## Text
<table class="table table--bordered">
  <thead>
      <tr>
          <th>Class</th>
          <th>Example</th>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td><code>.u-bold</code></td>
          <td><span class="u-bold">Lorem ipsum dolor sit amet.</span></td>
      </tr>
      <tr>
          <td><code>.u-bolder</code></td>
          <td><span class="u-bolder">Lorem ipsum dolor sit amet.</span></td>
      </tr>
      <tr>
          <td><code>.u-text-muted</code></td>
          <td><span class="u-text-muted">Lorem ipsum dolor sit amet.</span></td>
      </tr>
      <tr>
          <td><code>.u-text-center</code></td>
          <td><div class="u-text-center">Lorem ipsum dolor sit amet.</div></td>
      </tr>
      <tr>
          <td><code>.u-text-right</code></td>
          <td><div class="u-text-right">Lorem ipsum dolor sit amet.</div></td>
      </tr>
      <tr>
          <td><code>.u-text-left</code></td>
          <td><div class="u-text-left">Lorem ipsum dolor sit amet.</div></td>
      </tr>
      <tr>
          <td><code>.u-text-truncated</code></td>
          <td><div class="u-text-truncated" style="width: 100px;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, velit?</div></td>
      </tr>
      <tr>
          <td><code>.u-text-break</code></td>
          <td><div class="u-text-break" style="width: 100px;">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, velit?</div></td>
      </tr>
      <tr>
          <td><code>.u-text-nowrap</code></td>
          <td><div class="u-text-nowrap" style="width: 100px;">Lorem ipsum dolor sit amet</div></td>
      </tr>
      <tr>
          <td><code>.u-h1</code></td>
          <td><span class="u-h1">Heading 1</span></td>
      </tr>
      <tr>
          <td><code>.u-h2</code></td>
          <td><span class="u-h2">Heading 2</span></td>
      </tr>
      <tr>
          <td><code>.u-h3</code></td>
          <td><span class="u-h3">Heading 3</span></td>
      </tr>
      <tr>
          <td><code>.u-h4</code></td>
          <td><span class="u-h4">Heading 4</span></td>
      </tr>
      <tr>
          <td><code>.u-h5</code></td>
          <td><span class="u-h5">Heading 5</span></td>
      </tr>
      <tr>
          <td><code>.u-h6</code></td>
          <td><span class="u-h6">Heading 6</span></td>
      </tr>
      <tr>
          <td><code>.u-fs-12</code></td>
          <td><span class="u-fs-12">Lorem ipsum</span></td>
      </tr>
      <tr>
          <td><code>.u-fs-14</code></td>
          <td><span class="u-fs-14">Lorem ipsum</span></td>
      </tr>
      <tr>
          <td><code>.u-fs-16</code></td>
          <td><span class="u-fs-16">Lorem ipsum</span></td>
      </tr>
      <tr>
          <td><code>.u-fs-18</code></td>
          <td><span class="u-fs-18">Lorem ipsum</span></td>
      </tr>
      <tr>
          <td><code>.u-fs-20</code></td>
          <td><span class="u-fs-20">Lorem ipsum</span></td>
      </tr>
      <tr>
          <td><code>.u-fs-24</code></td>
          <td><span class="u-fs-24">Lorem ipsum</span></td>
      </tr>
      <tr>
          <td><code>.u-fs-28</code></td>
          <td><span class="u-fs-28">Lorem ipsum</span></td>
      </tr>
      <tr>
          <td><code>.u-fs-32</code></td>
          <td><span class="u-fs-32">Lorem ipsum</span></td>
      </tr>
      <tr>
          <td><code>.u-fs-48</code></td>
          <td><span class="u-fs-48">Lorem ipsum</span></td>
      </tr>
      <tr>
          <td><code>.u-fs-64</code></td>
          <td><span class="u-fs-64">Lorem ipsum</span></td>
      </tr>
      <tr>
          <td><code>.u-fs-128</code></td>
          <td><span class="u-fs-128">Lorem ipsum</span></td>
      </tr>
  </tbody>
</table>

## Border
<table class="table table--bordered">
  <thead>
      <tr>
          <th>Class</th>
          <th>Description</th>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td><code>.u-border-(side)-(width)</code></td>
          <td>
            size: <code>t</code>: top, <code>l</code>: left, <code>b</code>: bottom, <code>r</code>: right, <code>all</code>
            <br />
            width: <code>0</code>: 0px, <code>1</code>: 1px, <code>2</code>: 2px, <code>4</code>: 4px, <code>8</code>: 8px
        </td>
      </tr>
      <tr>
          <td><code>u-rounded-sm</code></td>
          <td><code>border-radius: 2px !important;</code></td>
      </tr>
      <tr>
          <td><code>u-rounded</code></td>
          <td><code>border-radius: 3px !important;</code></td>
      </tr>
      <tr>
          <td><code>u-rounded-lg</code></td>
          <td><code>border-radius: 5px !important;</code></td>
      </tr>
      <tr>
          <td><code>u-circle</code></td>
          <td><code>border-radius: 9999px !important;</code></td>
      </tr>
      <tr>
          <td><code>u-sharp</code></td>
          <td><code>border-radius: 0 !important;</code></td>
      </tr>
  </tbody>
</table>

## Display
<table class="table table--bordered">
  <thead>
      <tr>
          <th>Class</th>
          <th>Description</th>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td><code>.u-block</code></td>
          <td><code>display: block !important;</code></td>
      </tr>
      <tr>
          <td><code>u-center-block</code></td>
          <td><code>display: block !important;</code>, <code>margin-left: auto !important;</code>, <code>margin-right: auto !important;</code></td>
      </tr>
      <tr>
          <td><code>.u-inline</code></td>
          <td><code>display: inline !important;</code></td>
      </tr>
      <tr>
          <td><code>.u-inline-block</code></td>
          <td><code>display: inline-block !important;</code></td>
      </tr>
      <tr>
          <td><code>.u-fl</code></td>
          <td>Float an element to the left</td>
      </tr>
      <tr>
          <td><code>.u-fr</code></td>
          <td>Float an element to the right</td>
      </tr>
      <tr>
          <td><code>.u-clearfix</code></td>
          <td>Clear floats</td>
      </tr>
      <tr>
          <td><code>.u-hidden</code></td>
          <td>Force an elment to be hidden</td>
      </tr>
      <tr>
          <td><code>.u-hidden-up@(sm, md, lg)</code></td>
          <td>Force an elment to be hidden at breakpoint up</td>
      </tr>
      <tr>
          <td><code>.u-hidden-down@(sm, md, lg)</code></td>
          <td>Force an elment to be hidden at breakpoint down</td>
      </tr>
  </tbody>
</table>

## Flexbox
<table class="table table--bordered">
    <thead>
        <tr>
            <th>Class</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>.u-flex</code></td>
            <td><code>display: flex !important;align-items: center;</code></td>
        </tr>
        <tr>
            <td><code>.u-inline-flex</code></td>
            <td><code>display: inline-flex !important;align-items: center;</code></td>
        </tr>
        <tr>
            <td><code>.u-flex-0</code></td>
            <td><code>flex: 0 0 auto !important;</code></td>
        </tr>
        <tr>
            <td><code>.u-flex-1</code></td>
            <td><code>flex: 1 1 auto !important;</code></td>
        </tr>
    </tbody>
</table>
