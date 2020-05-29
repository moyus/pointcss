---
layout: master
title: "Table"
catalogue:
  - Basic
  - Striped
  - Hover
  - Bordered
  - Sizing
  - Responsive
---

# Table

## Basic

Applying `.table` class on `<table>` element to quick create a styled table.

<section class="snippet">
  <div class="snippet__preview">
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Task</th>
          <th>Completed</th>
          <th>User</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Lorem ipsum dolor sit amet.</td>
          <td><code>Yes</code></td>
          <td>Jan Don</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Ipsum dolor sit amet, consectetur.</td>
          <td><code>Yes</code></td>
          <td>Leticia Lynn</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Dolor sit amet, consectetur adipisicing elit. Corporis, veniam!</td>
          <td><code>Yes</code></td>
          <td>Steele Le</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Consectetur adipisicing elit. Cupiditate, maxime!</td>
          <td><code>No</code></td>
          <td>Imelda Clarke</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Dicta expedita cum in. Aspernatur quasi, enim.</td>
          <td><code>Yes</code></td>
          <td>Eugenia Orr</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Voluptates natus, et, nisi facere at.</td>
          <td><code>No</code></td>
          <td>Ellis Brown</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="snippet__source">

```html
<table class="table">
  <thead>
    <tr>
      <th>ID</th>
      <th>Task</th>
      <th>Completed</th>
      <th>User</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Lorem ipsum dolor sit amet.</td>
      <td><code>Yes</code></td>
      <td>Jan Don</td>
    </tr>
    ...
  </tbody>
</table>
```

  </div>
</section>

## Striped

By adding `.table--striped` modifier class on `<table class="table">` element to quick create a striped table.

<section class="snippet">
  <div class="snippet__preview">
    <table class="table table--striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Company</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Boyle Monroe</td>
          <td>29</td>
          <td>male</td>
          <td>QUANTALIA</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Leticia Lynn</td>
          <td>30</td>
          <td>female</td>
          <td>UTARA</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Steele Le</td>
          <td>24</td>
          <td>male</td>
          <td>TERSANKI</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Imelda Clarke</td>
          <td>32</td>
          <td>female</td>
          <td>TALENDULA</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Eugenia Orr</td>
          <td>30</td>
          <td>female</td>
          <td>OMNIGOG</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Ellis Brown</td>
          <td>40</td>
          <td>male</td>
          <td>KANGLE</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="snippet__source">

```html
<table class="table table--striped">
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Age</th>
      <th>Gender</th>
      <th>Company</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Boyle Monroe</td>
      <td>29</td>
      <td>male</td>
      <td>QUANTALIA</td>
    </tr>
    ...
  </tbody>
</table>
```

  </div>
</section>

## Hover

By adding `.table--hover` modifier class on `<table class="table">` element to quick create a table with hover effect.

<section class="snippet">
  <div class="snippet__preview">
    <table class="table table--hover">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Company</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Boyle Monroe</td>
          <td>29</td>
          <td>male</td>
          <td>QUANTALIA</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Leticia Lynn</td>
          <td>30</td>
          <td>female</td>
          <td>UTARA</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Steele Le</td>
          <td>24</td>
          <td>male</td>
          <td>TERSANKI</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Imelda Clarke</td>
          <td>32</td>
          <td>female</td>
          <td>TALENDULA</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Eugenia Orr</td>
          <td>30</td>
          <td>female</td>
          <td>OMNIGOG</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Ellis Brown</td>
          <td>40</td>
          <td>male</td>
          <td>KANGLE</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="snippet__source">

```html
<table class="table table--hover">
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Age</th>
      <th>Gender</th>
      <th>Company</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Boyle Monroe</td>
      <td>29</td>
      <td>male</td>
      <td>QUANTALIA</td>
    </tr>
    ...
  </tbody>
</table>
```

  </div>
</section>

## Bordered

By adding `.table--bordered` modifier class on `<table class="table">` element to quick create a table with border.

<section class="snippet">
  <div class="snippet__preview">
    <table class="table table--bordered">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Company</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Boyle Monroe</td>
          <td>29</td>
          <td>male</td>
          <td>QUANTALIA</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Leticia Lynn</td>
          <td>30</td>
          <td>female</td>
          <td>UTARA</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Steele Le</td>
          <td>24</td>
          <td>male</td>
          <td>TERSANKI</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Imelda Clarke</td>
          <td>32</td>
          <td>female</td>
          <td>TALENDULA</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Eugenia Orr</td>
          <td>30</td>
          <td>female</td>
          <td>OMNIGOG</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Ellis Brown</td>
          <td>40</td>
          <td>male</td>
          <td>KANGLE</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="snippet__source">

```html
<table class="table table--bordered">
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Age</th>
      <th>Gender</th>
      <th>Company</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Boyle Monroe</td>
      <td>29</td>
      <td>male</td>
      <td>QUANTALIA</td>
    </tr>
    ...
  </tbody>
</table>
```

  </div>
</section>

## Sizing

Use `.table--sm` or `.table--lg` modifier classes on `.table` container to change cell spacing

<section class="snippet">
  <div class="snippet__preview">
    <table class="table table--bordered table--sm">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Company</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Boyle Monroe</td>
          <td>29</td>
          <td>male</td>
          <td>QUANTALIA</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Leticia Lynn</td>
          <td>30</td>
          <td>female</td>
          <td>UTARA</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Steele Le</td>
          <td>24</td>
          <td>male</td>
          <td>TERSANKI</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Imelda Clarke</td>
          <td>32</td>
          <td>female</td>
          <td>TALENDULA</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Eugenia Orr</td>
          <td>30</td>
          <td>female</td>
          <td>OMNIGOG</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Ellis Brown</td>
          <td>40</td>
          <td>male</td>
          <td>KANGLE</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="snippet__source">

```html
<table class="table table--bordered table--sm">
  <thead>
    ...
  </thead>
  <tbody>
    ...
  </tbody>
</table>
```

  </div>
</section>

<section class="snippet">
  <div class="snippet__preview">
    <table class="table table--bordered table--lg">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Company</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Boyle Monroe</td>
          <td>29</td>
          <td>male</td>
          <td>QUANTALIA</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Leticia Lynn</td>
          <td>30</td>
          <td>female</td>
          <td>UTARA</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Steele Le</td>
          <td>24</td>
          <td>male</td>
          <td>TERSANKI</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Imelda Clarke</td>
          <td>32</td>
          <td>female</td>
          <td>TALENDULA</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Eugenia Orr</td>
          <td>30</td>
          <td>female</td>
          <td>OMNIGOG</td>
        </tr>
        <tr>
          <td>6</td>
          <td>Ellis Brown</td>
          <td>40</td>
          <td>male</td>
          <td>KANGLE</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="snippet__source">

```html
<table class="table table--bordered table--lg">
  <thead>
    ...
  </thead>
  <tbody>
    ...
  </tbody>
</table>
```

  </div>
</section>

## Responsive

By default, table will stay it layout across all breakpoints, if you want to collapse it below a breakpoint

- First, add the `.table@<breakpoint>` modifier on `.table` container
- Then, add `data-label="column label"` on each `<td>` element with every `<tr>` table row

<section class="snippet">
  <div class="snippet__preview">
    <table class="table table@md">
      <thead>
        <tr>
          <th>#</th>
          <th>Project</th>
          <th>Status</th>
          <th>Author</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th data-label="#">1</th>
          <td data-label="Activity">tortor sollicitudin mi sit amet</td>
          <td data-label="Status">
            <span class="tag tag--info">Publish</span>
          </td>
          <td data-label="Author">Amanda Pena</td>
          <td data-label="Date">2016-09-22</td>
        </tr>
        <tr>
          <th data-label="#">2</th>
          <td data-label="Activity">platea dictumst maecenas ut massa</td>
          <td data-label="Status">
            <span class="tag tag--info">Publish</span>
          </td>
          <td data-label="Author">Juliette Mayo</td>
          <td data-label="Date">2016-09-20</td>
        </tr>
        <tr>
          <th data-label="#">3</th>
          <td data-label="Activity">proin leo odio porttitor id consequat in</td>
          <td data-label="Status">
            <span class="tag tag--default">Draft</span>
          </td>
          <td data-label="Author">Juliette Mayo</td>
          <td data-label="Date">2016-09-19</td>
        </tr>
        <tr>
          <th data-label="#">4</th>
          <td data-label="Activity">etiam justo etiam pretium</td>
          <td data-label="Status">
            <span class="tag tag--warning">Pendding</span>
          </td>
          <td data-label="Author">Audra Moody</td>
          <td data-label="Date">2016-09-15</td>
        </tr>
        <tr>
          <th data-label="#">5</th>
          <td data-label="Activity">nulla mollis molestie lorem quisque ut erat</td>
          <td data-label="Status">
            <span class="tag tag--info">Publish</span>
          </td>
          <td data-label="Author">	Esmeralda Malone</td>
          <td data-label="Date">2016-09-10</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="snippet__source">

```html
<table class="table table@md">
  <thead>
    <tr>
      <th>#</th>
      <th>Project</th>
      <th>Status</th>
      <th>Author</th>
      <th>Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th data-label="#">1</th>
      <td data-label="Activity">tortor sollicitudin mi sit amet</td>
      <td data-label="Status">
        <span class="tag tag--info">Publish</span>
      </td>
      <td data-label="Author">Amanda Pena</td>
      <td data-label="Date">2016-09-22</td>
    </tr>
    <tr>
      <th data-label="#">2</th>
      <td data-label="Activity">platea dictumst maecenas ut massa</td>
      <td data-label="Status">
        <span class="tag tag--info">Publish</span>
      </td>
      <td data-label="Author">Juliette Mayo</td>
      <td data-label="Date">2016-09-20</td>
    </tr>
    ...
  </tbody>
</table>
```

  </div>
</section>
