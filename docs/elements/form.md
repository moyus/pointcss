---
layout: default
title: "Form"
---

# Form
- [Types](#types)
  - [Inputs](#inputs)
  - [Checkbox & Radio](#checkbox-radio)
  - [Textarea](#textarea)
  - [Select](#select)
- [States](#states)
- [Sizes](#sizes)
- [Icons](#icons)
- [Group](#group)
- [Flex](#flex)

## Types
There are six basic types of form element: `.form-input`, `.form-select`,
`.form-checkbox`, `.form-radio`, `.form-switch`, `.form-textarea`

### Inputs
<div class="form-group">
    <label class="form-label">Text</label>
    <input type="text" class="form-input">
</div>
<div class="form-group">
    <label class="form-label">Password</label>
    <div class="form-control">
        <input type="password" class="form-input">
    </div>
</div>
<div class="form-group">
    <label class="form-label">Number</label>
    <div class="form-control">
        <input type="number" class="form-input">
    </div>
</div>
<div class="form-group">
    <label class="form-label">Date</label>
    <div class="form-control">
        <input type="date" class="form-input">
    </div>
</div>
<div class="form-group">
    <label class="form-label">Input with placeholder</label>
    <div class="form-control">
        <input type="text" class="form-input" placeholder="Enter the magic word...">
    </div>
</div>

```html
<input type="text" class="form-input">
<input type="password" class="form-input">
<input type="number" class="form-input">
<input type="date" class="form-input">
```

### Checkbox & Radio

<div class="l-level">
  <div class="l-level__item form-group">
      <label class="form-label">Radio</label>
      <div class="form-control">
          <input type="radio" class="form-radio">
      </div>
  </div>
  <div class="l-level__item form-group">
      <label class="form-label">Checkbox</label>
      <div class="form-control">
          <input type="checkbox" class="form-checkbox">
      </div>
  </div>
  <div class="l-level__item form-group">
      <label class="form-label">Switch</label>
      <div class="form-control">
          <input type="checkbox" class="form-switch">
      </div>
  </div>
</div>
<div class="l-level">
  <div class="l-level__item form-group">
      <label class="form-radio">
          <input type="radio" name="r2"> Male
      </label>
      <label class="form-radio">
          <input type="radio" name="r2"> Female
      </label>
  </div>
  <div class="l-level__item form-group">
      <label class="form-checkbox">
          <input type="checkbox"> Remember Me?
      </label>
  </div>
</div>

```html
<input type="radio" class="form-radio">
<input type="checkbox" class="form-checkbox">
<input type="checkbox" class="form-switch">

<label class="form-radio">
  <input type="radio" name="r2"> Male
</label>
<label class="form-checkbox">
  <input type="checkbox"> Remember Me?
</label>
```

### Textarea

<div class="form-group">
  <div class="form-control">
      <textarea class="form-textarea" rows="4"></textarea>
  </div>
</div>

```html
<textarea class="form-textarea" rows="4"></textarea>
```

### Select

<div class="form-group">
  <div class="form-control">
      <select class="form-select">
          <option value="0" selected>Beijing</option>
          <option value="1">Washington</option>
          <option value="2">Tokyo</option>
          <option value="3">London</option>
          <option value="4">Paris</option>
      </select>
  </div>
</div>

<div class="form-group">
    <label class="form-label">Multiple select</label>
    <div class="form-control">
        <select class="form-select" multiple>
            <option value="0">Beijing</option>
            <option value="1">Washington</option>
            <option value="2" selected>Tokyo</option>
            <option value="3">London</option>
            <option value="4">Paris</option>
        </select>
    </div>
</div>

```html
<select class="form-select">
  <option value="0" selected>Beijing</option>
  <option value="1">Washington</option>
  <option value="2">Tokyo</option>
</select>

<select class="form-select" multiple>
  <option value="0">Beijing</option>
  <option value="1">Washington</option>
  <option value="2" selected>Tokyo</option>
</select>
```

## States
<div class="form-group">
    <label class="form-label">Read only field</label>
    <div class="form-control">
        <input type="text" class="form-input" value="23423" readonly>
    </div>
</div>
<div class="form-group">
    <label class="form-label">Disabled field</label>
    <div class="form-control">
        <input type="text" class="form-input" value="you can't change me" disabled>
    </div>
</div>
<div class="form-group">
    <label class="form-label">Success</label>
    <input type="text" class="form-input is-success">
</div>
<div class="form-group">
    <label class="form-label">Danger</label>
    <input type="text" class="form-input is-danger">
    <small class="form-help u-color-danger">you enter the wrong text！</small>
</div>
<div class="form-group">
    <label class="form-label">Warning</label>
    <input type="text" class="form-input is-warning">
</div>

```html
<input type="text" class="form-input" value="23423" readonly>
<input type="text" class="form-input" value="you can't change me" disabled>
<input type="text" class="form-input is-success">
<input type="text" class="form-input is-danger">
<input type="text" class="form-input is-warning">
```

## Sizes
By adding `.form-input--sm` or `.form-input--lg` to `.form-input` element and `.form-select--sm` or `.form-select--lg` to `.form-select` element to change default sizes.

<div class="l-row">
    <div class="l-col-6@sm">
        <div class="form-group">
            <label class="form-label">Small input</label>
            <input type="text" class="form-input form-input--sm">
        </div>
    </div>
    <div class="l-col-6@sm">
        <div class="form-group">
            <label class="form-label">Small select</label>
            <select class="form-select form-select--sm">
                <option value="0" selected>Beijing</option>
                <option value="1">Washington</option>
                <option value="2">Tokyo</option>
                <option value="3">London</option>
                <option value="4">Paris</option>
            </select>
        </div>
    </div>
</div>
<div class="l-row">
    <div class="l-col-6@sm">
        <div class="form-group">
            <label class="form-label">Default input</label>
            <input type="text" class="form-input">
        </div>
    </div>
    <div class="l-col-6@sm">
        <div class="form-group">
            <label class="form-label">Default select</label>
            <select class="form-select">
                <option value="0" selected>Beijing</option>
                <option value="1">Washington</option>
                <option value="2">Tokyo</option>
                <option value="3">London</option>
                <option value="4">Paris</option>
            </select>
        </div>
    </div>
</div>
<div class="l-row">
    <div class="l-col-6@sm">
        <div class="form-group">
            <label class="form-label">Large input</label>
            <input type="text" class="form-input form-input--lg">
        </div>
    </div>
    <div class="l-col-6@sm">
        <div class="form-group">
            <label class="form-label">Large select</label>
            <select class="form-select form-select--lg">
                <option value="0" selected>Beijing</option>
                <option value="1">Washington</option>
                <option value="2">Tokyo</option>
                <option value="3">London</option>
                <option value="4">Paris</option>
            </select>
        </div>
    </div>
</div>

```html
<input type="text" class="form-input form-input--sm">
<input type="text" class="form-input">
<input type="text" class="form-input form-input--lg">

<select class="form-select form-select--sm"></select>
<select class="form-select"></select>
<select class="form-select form-select--lg"></select>
```

## Icons
By adding `.has-icon` or `.has-iconRight` class on `.form-control` element to indicate it has float icon.

<div class="form-group">
    <div class="form-control has-icon">
        <i class="fa fa-lock form-icon"></i>
        <input type="text" class="form-input">
    </div>
</div>
<div class="form-group">
    <div class="form-control has-iconRight">
        <input type="text" class="form-input">
        <i class="fa fa-check form-iconRight"></i>
    </div>
</div>
<div class="form-group">
    <div class="form-control has-icon has-iconRight">
        <i class="fa fa-lock form-icon"></i>
        <input type="text" class="form-input">
        <i class="fa fa-check form-iconRight"></i>
    </div>
</div>

```html
<div class="form-control has-icon">
  <i class="fa fa-lock form-icon"></i>
  <input type="text" class="form-input">
</div>

<div class="form-control has-iconRight">
  <input type="text" class="form-input">
  <i class="fa fa-check form-iconRight"></i>
</div>

<div class="form-control has-icon has-iconRight">
  <i class="fa fa-lock form-icon"></i>
  <input type="text" class="form-input">
  <i class="fa fa-check form-iconRight"></i>
</div>
```

## Group
In addation to basic form inputs, there are some other form elements can be grouped together.

- `.form-group`
  - `.form-label`
  - `.form-control`
    - basic form input elements
  - `.form-help`

<div class="form-group">
    <label class="form-label">Label text</label>
    <div class="form-control">
        <input type="text" class="form-input" placeholder="form input">
    </div>
    <small class="form-help">Input description text...</small>
</div>

```html
<div class="form-group">
    <label class="form-label">Label text</label>
    <div class="form-control">
        <input type="text" class="form-input" placeholder="form input">
    </div>
    <small class="form-help">Input description text...</small>
</div>
```

## Flex
Use flexbox to create input group.
<div class="form-group">
    <div class="form-flex">
        <span class="form-addon">http://example.com/users/</span>
        <input type="text" class="form-input">
    </div>
</div>
<!-- END .form-group -->
<div class="form-group">
    <div class="form-flex">
        <input type="text" class="form-input">
        <span class="form-addon">@example.com</span>
    </div>
</div>
<!-- END .form-group -->
<div class="form-group">
    <div class="form-flex">
        <span class="form-addon">$</span>
        <input type="text" class="form-input">
        <span class="form-addon">.0.0</span>
    </div>
</div>
<!-- END .form-group -->
<div class="form-group">
    <div class="form-flex">
        <span class="form-addon">From</span>
        <input type="text" class="form-input">
        <span class="form-addon">To</span>
        <input type="text" class="form-input">
    </div>
</div>
<!-- END .form-group -->
<div class="form-group">
    <div class="form-flex">
        <span class="form-addon">
          <input type="radio">
        </span>
        <input type="text" class="form-input">
    </div>
    <!-- END .form-flex -->
</div>
<!-- END .form-group -->
<div class="form-group">
    <div class="form-flex">
        <input type="text" class="form-input">
        <span class="form-addon">
            <input type="checkbox">
        </span>
    </div>
    <!-- END .form-flex -->
</div>
<!-- END .form-group -->

```html
<div class="form-group">
    <div class="form-flex">
        <span class="form-addon">http://example.com/users/</span>
        <input type="text" class="form-input">
    </div>
</div>
<!-- END .form-group -->
<div class="form-group">
    <div class="form-flex">
        <input type="text" class="form-input">
        <span class="form-addon">@example.com</span>
    </div>
</div>
<!-- END .form-group -->
<div class="form-group">
    <div class="form-flex">
        <span class="form-addon">$</span>
        <input type="text" class="form-input">
        <span class="form-addon">.0.0</span>
    </div>
</div>
<!-- END .form-group -->
<div class="form-group">
    <div class="form-flex">
        <span class="form-addon">From</span>
        <input type="text" class="form-input">
        <span class="form-addon">To</span>
        <input type="text" class="form-input">
    </div>
</div>
<!-- END .form-group -->
<div class="form-group">
    <div class="form-flex">
        <span class="form-addon">
          <input type="radio">
        </span>
        <input type="text" class="form-input">
    </div>
    <!-- END .form-flex -->
</div>
<!-- END .form-group -->
<div class="form-group">
    <div class="form-flex">
        <input type="text" class="form-input">
        <span class="form-addon">
            <input type="checkbox">
        </span>
    </div>
    <!-- END .form-flex -->
</div>
<!-- END .form-group -->
```
