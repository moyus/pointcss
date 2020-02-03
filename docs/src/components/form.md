---
layout: master
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
- [Field](#field)
- [Flex](#flex)
- [Inline](#inline)
- [Horizontal](#horizontal)

## Types
There are six basic types of form element: `.form-input`, `.form-select`,
`.form-checkbox`, `.form-radio`, `.form-switch`, `.form-textarea`

### Input types
<form class="form-horizontal">
  <div class="form-field l-row">
    <label class="form-label l-col-2@md">Text</label>
    <div class="l-col-10@md">
      <input type="text" class="form-input" placeholder="Enter your name">
    </div>
  </div>
  <div class="form-field l-row">
    <label class="form-label l-col-2@md">Password</label>
    <div class="l-col-10@md">
      <input type="password" class="form-input" value="123456">
    </div>
  </div>
  <div class="form-field l-row">
    <label class="form-label l-col-2@md">Email</label>
    <div class="l-col-10@md">
      <input type="email" class="form-input" value="moyuboy@gmail.com">
    </div>
  </div>
  <div class="form-field l-row">
    <label class="form-label l-col-2@md">Url</label>
    <div class="l-col-10@md">
      <input type="url" class="form-input" value="https://github.com/moyus/point">
    </div>
  </div>
  <div class="form-field l-row">
    <label class="form-label l-col-2@md">Tel</label>
    <div class="l-col-10@md">
      <input type="tel" class="form-input" value="010-123456">
    </div>
  </div>
  <div class="form-field l-row">
    <label class="form-label l-col-2@md">Number</label>
    <div class="l-col-10@md">
      <input type="number" class="form-input" value="666">
    </div>
  </div>
  <div class="form-field l-row">
    <label class="form-label l-col-2@md">Color</label>
    <div class="l-col-10@md">
      <input type="color" class="form-input">
    </div>
  </div>
  <div class="form-field l-row">
    <label class="form-label l-col-2@md">Date</label>
    <div class="l-col-10@md">
      <input type="date" class="form-input">
    </div>
  </div>
  <div class="form-field l-row">
    <label class="form-label l-col-2@md">File</label>
    <div class="l-col-10@md">
      <input type="file" class="form-input">
    </div>
  </div>
</form>

```html
<input type="text" class="form-input" placeholder="Enter your name">
<input type="password" class="form-input" value="123456">
<input type="email" class="form-input" value="moyuboy@gmail.com">
<input type="url" class="form-input" value="https://github.com/moyus/point">
<input type="tel" class="form-input" value="010-123456">
<input type="number" class="form-input" value="666">
<input type="color" class="form-input">
<input type="date" class="form-input">
<input type="file" class="form-input">
```

### Checkbox & Radio

<div class="form-field">
  <label class="form-label">Gender</label>
  <label class="form-radio">
    <input type="radio" name="gender">
    <span class="form-radio__indicator"></span>
    Male
  </label>
  <label class="form-radio">
    <input type="radio" name="gender">
    <span class="form-radio__indicator"></span>
    Female
  </label>
</div>

```html
<div class="form-field">
  <label class="form-label">Gender</label>
  <label class="form-radio">
    <input type="radio" name="gender">
    <span class="form-radio__indicator"></span>
    Male
  </label>
  <label class="form-radio">
    <input type="radio" name="gender">
    <span class="form-radio__indicator"></span>
    Female
  </label>
</div>
```

<div class="form-field">
  <label class="form-checkbox">
    <input type="checkbox" name="remember" />
    <span class="form-checkbox__indicator"></span>
    Remember Me?
  </label>
</div>

```html
<div class="form-field">
  <label class="form-checkbox">
    <input type="checkbox" name="remember" />
    <span class="form-checkbox__indicator"></span>
    Remember Me?
  </label>
</div>
```

<div class="form-field">
  <label class="form-switch">
    <input type="checkbox" name="light">
    <span class="form-switch__indicator"></span>
    Turn the light on
  </label>
</div>

```html
<div class="form-field">
  <label class="form-switch">
    <input type="checkbox" name="light">
    <span class="form-switch__indicator"></span>
    Turn the light on
  </label>
</div>
```

### Textarea

<div class="form-field">
  <textarea class="form-textarea" rows="4"></textarea>
</div>

```html
<textarea class="form-textarea" rows="4"></textarea>
```

### Select

<div class="form-field">
  <select class="form-select">
    <option value="0" selected>Beijing</option>
    <option value="1">Washington</option>
    <option value="2">Tokyo</option>
    <option value="3">London</option>
    <option value="4">Paris</option>
  </select>
</div>

<div class="form-field">
  <label class="form-label">Multiple select</label>
  <select class="form-select" multiple>
    <option value="0">Beijing</option>
    <option value="1">Washington</option>
    <option value="2" selected>Tokyo</option>
    <option value="3">London</option>
    <option value="4">Paris</option>
  </select>
</div>

```html
<div class="form-field">
  <select class="form-select">
    <option value="0" selected>Beijing</option>
    <option value="1">Washington</option>
    <option value="2">Tokyo</option>
    <option value="3">London</option>
    <option value="4">Paris</option>
  </select>
</div>

<div class="form-field">
  <label class="form-label">Multiple select</label>
  <select class="form-select" multiple>
    <option value="0">Beijing</option>
    <option value="1">Washington</option>
    <option value="2" selected>Tokyo</option>
    <option value="3">London</option>
    <option value="4">Paris</option>
  </select>
</div>
```

## States
<div class="form-field">
    <label class="form-label">Read only field</label>
    <input type="text" class="form-input" value="23423" readonly>
</div>
<div class="form-field">
    <label class="form-label">Disabled field</label>
    <input type="text" class="form-input" value="you can't change me" disabled>
</div>
<div class="form-field">
    <label class="form-label">Success</label>
    <input type="text" class="form-input is-success">
</div>
<div class="form-field">
    <label class="form-label">Danger</label>
    <input type="text" class="form-input is-danger">
    <small class="form-help u-color-danger">you enter the wrong text！</small>
</div>
<div class="form-field">
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
    <div class="form-field">
      <label class="form-label">Small input</label>
      <input type="text" class="form-input form-input--sm" />
    </div>
  </div>
  <div class="l-col-6@sm">
    <div class="form-field">
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
    <div class="form-field">
      <label class="form-label">Default input</label>
      <input type="text" class="form-input">
    </div>
  </div>
  <div class="l-col-6@sm">
    <div class="form-field">
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
    <div class="form-field">
      <label class="form-label">Large input</label>
      <input type="text" class="form-input form-input--lg">
    </div>
  </div>
  <div class="l-col-6@sm">
    <div class="form-field">
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

## Field
In addation to basic form inputs, there are some other form elements can be grouped together.

- `.form-field`
  - `.form-label`
  - `.form-group`
    - form elements
  - `.form-help`

<div class="form-field">
  <label class="form-label">Label text</label>
  <input type="text" class="form-input" placeholder="form input">
  <small class="form-help">Input description text...</small>
</div>

```html
<div class="form-field">
  <label class="form-label">Label text</label>
  <input type="text" class="form-input" placeholder="form input">
  <small class="form-help">Input description text...</small>
</div>
```

## Group
Use flexbox to create input group.

<div class="form-field">
  <div class="form-group">
    <span class="form-addon">http://example.com/users/</span>
    <input type="text" class="form-input">
  </div>
</div>

<div class="form-field">
  <div class="form-group">
    <input type="text" class="form-input">
    <span class="form-addon">@example.com</span>
  </div>
</div>

<div class="form-field">
  <div class="form-group">
    <span class="form-addon">$</span>
    <input type="text" class="form-input">
    <span class="form-addon">.00</span>
  </div>
</div>

<div class="form-field">
  <div class="form-group">
    <span class="form-addon">From</span>
    <input type="text" class="form-input">
    <span class="form-addon">To</span>
    <input type="text" class="form-input">
  </div>
</div>

<div class="form-field">
  <div class="form-group">
    <span class="form-addon">
      <input type="radio">
    </span>
    <input type="text" class="form-input">
  </div>
</div>

<div class="form-field">
  <div class="form-group">
    <input type="text" class="form-input">
    <span class="form-addon">
      <input type="checkbox">
    </span>
  </div>
</div>

```html
<div class="form-field">
  <div class="form-group">
    <span class="form-addon">http://example.com/users/</span>
    <input type="text" class="form-input">
  </div>
</div>

<div class="form-field">
  <div class="form-group">
    <input type="text" class="form-input">
    <span class="form-addon">@example.com</span>
  </div>
</div>

<div class="form-field">
  <div class="form-group">
    <span class="form-addon">$</span>
    <input type="text" class="form-input">
    <span class="form-addon">.00</span>
  </div>
</div>

<div class="form-field">
  <div class="form-group">
    <span class="form-addon">From</span>
    <input type="text" class="form-input">
    <span class="form-addon">To</span>
    <input type="text" class="form-input">
  </div>
</div>

<div class="form-field">
  <div class="form-group">
    <span class="form-addon">
      <input type="radio">
    </span>
    <input type="text" class="form-input">
  </div>
</div>

<div class="form-field">
  <div class="form-group">
    <input type="text" class="form-input">
    <span class="form-addon">
      <input type="checkbox">
    </span>
  </div>
</div>
```

## Inline
Use the `.form-inline` class to display a series of group elements on a single horizontal row.

<form class="form-inline u-mb-15">
  <div class="form-field">
    <label class="form-label">Username</label>
    <input type="text" class="form-input">
  </div>
  <div class="form-field">
    <label class="form-label">Password</label>
    <input type="password" class="form-input">
  </div>
  <div class="form-field">
    <label class="form-checkbox">
      <input type="checkbox">
      <span class="form-checkbox__indicator"></span>
      Remember me?
    </label>
  </div>
  <div class="form-field">
    <button type="button" class="btn btn--primary btn--outline">Login</button>
  </div>
</form>

```html
<form class="form-inline u-mb-15">
  <div class="form-field">
    <label class="form-label">Username</label>
    <input type="text" class="form-input">
  </div>
  <div class="form-field">
    <label class="form-label">Password</label>
    <input type="password" class="form-input">
  </div>
  <div class="form-field">
    <label class="form-checkbox">
      <input type="checkbox">
      <span class="form-checkbox__indicator"></span>
      Remember me?
    </label>
  </div>
  <div class="form-field">
    <button type="button" class="btn btn--primary btn--outline">Login</button>
  </div>
</form>
```

## Horizontal
Use Grid System and `.form-horizontal` to create horizontal forms.

<form class="form-horizontal u-mb-15">
  <div class="form-field l-row">
    <label class="form-label l-col-3@md">Username</label>
    <div class="l-col-12 l-col-9@md">
      <input type="text" class="form-input">
    </div>
  </div>
  <div class="form-field l-row">
    <label class="form-label l-col-3@md">Password</label>
    <div class="l-col-12 l-col-9@md">
      <input type="password" class="form-input">
    </div>
  </div>
  <div class="form-field l-row">
    <div class="l-col-9@md l-col-offset-3@md">
      <label class="form-checkbox">
        <input type="checkbox">
        <span class="form-checkbox__indicator"></span>
        Remember me?
      </label>
    </div>
  </div>
  <div class="form-field l-row">
    <div class="l-col-9@md l-col-offset-3@md">
      <button type="button" class="btn btn--primary">Login</button>
    </div>
  </div>
</form>

```html
<form class="form-horizontal u-mb-15">
  <div class="form-field l-row">
    <label class="form-label l-col-3@md">Username</label>
    <div class="l-col-12 l-col-9@md">
      <input type="text" class="form-input">
    </div>
  </div>
  <div class="form-field l-row">
    <label class="form-label l-col-3@md">Password</label>
    <div class="l-col-12 l-col-9@md">
      <input type="password" class="form-input">
    </div>
  </div>
  <div class="form-field l-row">
    <div class="l-col-9@md l-col-offset-3@md">
      <label class="form-checkbox">
        <input type="checkbox">
        <span class="form-checkbox__indicator"></span>
        Remember me?
      </label>
    </div>
  </div>
  <div class="form-field l-row">
    <div class="l-col-9@md l-col-offset-3@md">
      <button type="button" class="btn btn--primary">Login</button>
    </div>
  </div>
</form>
```
