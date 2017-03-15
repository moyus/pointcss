---
layout: default
title: "Tables"
---

# Tables
- [Basic](#basic)
- [Striped](#striped)
- [Hover](#hover)
- [Bordered](#bordered)
- [Responsive](#responsive)

## Basic
Applying `.table` class on `table` element to quick create a styled table.

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

## Striped
By adding `.table--striped` modifier class on `.table` element to quick create a striped table.

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
## Hover
By adding `.table--hover` modifier class on `.table` element to quick create a table with hover effect.

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

## Bordered
By adding `.table--bordered` modifier class on `.table` element to quick create a table with border.

<table class="table table--striped table--bordered">
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

```html
<table class="table table--striped table--bordered">
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

## Responsive
The responsive table below is made with pure css code.

- First, add `.table--responsive` on <code>.table</code> element
- Then, add `data-label="column label"` on each `td` element with every `tr` table row.

<table class="table table--responsive">
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

```html
<table class="table table--responsive">
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
