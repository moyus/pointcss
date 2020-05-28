---
layout: master
title: "Menu"
catalogue:
  - Basic
  - Variant
  - Size
---

# Menu

Provide vertical navigation for content.

## Basic

<div class="row">
  <div class="col-4@lg col-5@md">
    <aside class="menu">
      <p class="menu__heading">OVERVIEW</p>
      <ul class="menu__list">
        <li class="menu__item">
          <a class="menu__link">
            <span class="menu__icon">🇺🇳</span>
            <span class="menu__label">Dashboard</span>
            <span class="menu__after">
              <span class="badge badge--danger">13</span>
            </span>
          </a>
        </li>
      </ul>
      <p class="menu__heading">UI ELEMENTS</p>
      <ul class="menu__list">
        <li class="menu__item">
          <a class="menu__link">
            <span class="menu__icon">🇦🇱</span>
            <span class="menu__label">Content</span>
            <span class="menu__after"></span>
          </a>
          <ul class="menu__list">
            <li class="menu__item">
              <a class="menu__link">Typography</a>
            </li>
            <li class="menu__item">
              <a class="menu__link">Table</a>
            </li>
            <li class="menu__item">
              <a class="menu__link">Media</a>
            </li>
          </ul>
        </li>
        <li class="menu__item is-active">
          <a class="menu__link">
            <span class="menu__icon">🇩🇿</span>
            <span class="menu__label">Components</span>
            <span class="menu__after"></span>
          </a>
          <ul class="menu__list">
            <li class="menu__item">
              <a class="menu__link">Alert</a>
            </li>
            <li class="menu__item">
              <a class="menu__link">Badge</a>
            </li>
            <li class="menu__item">
              <a class="menu__link">Button</a>
            </li>
          </ul>
        </li>
        <li class="menu__item">
          <a class="menu__link">
            <span class="menu__icon">🇦🇫</span>
            <span class="menu__label">Form</span>
            <span class="menu__after"></span>
          </a>
          <ul class="menu__list">
            <li class="menu__item">
              <a class="menu__link">Control</a>
            </li>
            <li class="menu__item">
              <a class="menu__link">Layout</a>
            </li>
            <li class="menu__item">
              <a class="menu__link">Validation</a>
            </li>
          </ul>
        </li>
        <li class="menu__item">
          <a class="menu__link">
            <span class="menu__icon">🇦🇷</span>
            <span class="menu__label">Chart</span>
            <span class="menu__after"></span>
          </a>
          <ul class="menu__list">
            <li class="menu__item">
              <a class="menu__link">D3</a>
            </li>
            <li class="menu__item">
              <a class="menu__link">Peity</a>
            </li>
            <li class="menu__item">
              <a class="menu__link">Highcharts</a>
            </li>
          </ul>
        </li>
        <li class="menu__item">
          <a class="menu__link">
            <span class="menu__icon">🇦🇪</span>
            <span class="menu__label">Pages</span>
            <span class="menu__after"></span>
          </a>
          <ul class="menu__list">
            <li class="menu__item">
              <a class="menu__link">Sign In</a>
            </li>
            <li class="menu__item">
              <a class="menu__link">Sign Up</a>
            </li>
            <li class="menu__item">
              <a class="menu__link">Forgot Password</a>
            </li>
            <li class="menu__item">
              <a class="menu__link">404</a>
            </li>
            <li class="menu__item">
              <a class="menu__link">500</a>
            </li>
          </ul>
        </li>
      </ul>
      <p class="menu__heading">LABELS</p>
      <ul class="menu__list">
        <li class="menu__item">
          <a class="menu__link">
            <span class="menu__icon">
              <span class="badge badge--primary"></span>
            </span>
            <span class="menu__label">Primary</span>
          </a>
        </li>
        <li class="menu__item">
          <a class="menu__link">
            <span class="menu__icon">
              <span class="badge badge--info"></span>
            </span>
            <span class="menu__label">Info</span>
          </a>
        </li>
        <li class="menu__item">
          <a class="menu__link">
            <span class="menu__icon">
              <span class="badge badge--success"></span>
            </span>
            <span class="menu__label">Success</span>
          </a>
        </li>
        <li class="menu__item">
          <a class="menu__link">
            <span class="menu__icon">
              <span class="badge badge--danger"></span>
            </span>
            <span class="menu__label">Danger</span>
          </a>
        </li>
        <li class="menu__item">
          <a class="menu__link">
            <span class="menu__icon">
              <span class="badge badge--warning"></span>
            </span>
            <span class="menu__label">Warning</span>
          </a>
        </li>
      </ul>
    </aside>
  </div>
  <div class="col-8@lg col-7@md">

```html
<aside class="menu">
  <p class="menu__heading">OVERVIEW</p>
  <ul class="menu__list">
    <li class="menu__item">
      <a class="menu__link">
        <span class="menu__icon">🇺🇳</span>
        <span class="menu__label">Dashboard</span>
        <span class="menu__after">
          <span class="badge badge--danger">13</span>
        </span>
      </a>
    </li>
  </ul>
  <p class="menu__heading">UI ELEMENTS</p>
  <ul class="menu__list">
    <li class="menu__item">
      <a class="menu__link">
        <span class="menu__icon">🇦🇱</span>
        <span class="menu__label">Content</span>
        <span class="menu__after"></span>
      </a>
      <ul class="menu__list">
        <li class="menu__item">
          <a class="menu__link">Typography</a>
        </li>
        <li class="menu__item">
          <a class="menu__link">Table</a>
        </li>
        <li class="menu__item">
          <a class="menu__link">Media</a>
        </li>
      </ul>
    </li>
    ...
  </ul>
  ...
</aside>
```

  </div>
</div>

## Variant

Create a dark background menu by adding `.menu--dark` modifier class on `.menu` container.

<div class="row">
  <div class="col-4@lg col-5@md">
    <aside class="menu menu--dark bg-dark p-4">
      <p class="menu__heading">OVERVIEW</p>
      <ul class="menu__list">
        <li class="menu__item">
          <a class="menu__link">
            <span class="menu__icon">🇺🇳</span>
            <span class="menu__label">Dashboard</span>
            <span class="menu__after">
              <span class="badge badge--danger">13</span>
            </span>
          </a>
        </li>
      </ul>
      <p class="menu__heading">UI ELEMENTS</p>
      <ul class="menu__list">
        <li class="menu__item">
          <a class="menu__link">
            <span class="menu__icon">🇦🇱</span>
            <span class="menu__label">Content</span>
            <span class="menu__after"></span>
          </a>
          <ul class="menu__list">
            <li class="menu__item">
              <a class="menu__link">Typography</a>
            </li>
            <li class="menu__item">
              <a class="menu__link">Table</a>
            </li>
            <li class="menu__item">
              <a class="menu__link">Media</a>
            </li>
          </ul>
        </li>
        <li class="menu__item">
          <a class="menu__link">
            <span class="menu__icon">🇩🇿</span>
            <span class="menu__label">Components</span>
            <span class="menu__after"></span>
          </a>
          <ul class="menu__list">
            <li class="menu__item">
              <a class="menu__link">Alert</a>
            </li>
            <li class="menu__item">
              <a class="menu__link">Badge</a>
            </li>
            <li class="menu__item">
              <a class="menu__link">Button</a>
            </li>
          </ul>
        </li>
        <li class="menu__item">
          <a class="menu__link">
            <span class="menu__icon">🇦🇫</span>
            <span class="menu__label">Form</span>
            <span class="menu__after"></span>
          </a>
          <ul class="menu__list">
            <li class="menu__item">
              <a class="menu__link">Control</a>
            </li>
            <li class="menu__item">
              <a class="menu__link">Layout</a>
            </li>
            <li class="menu__item">
              <a class="menu__link">Validation</a>
            </li>
          </ul>
        </li>
        <li class="menu__item">
          <a class="menu__link">
            <span class="menu__icon">🇦🇷</span>
            <span class="menu__label">Chart</span>
            <span class="menu__after"></span>
          </a>
          <ul class="menu__list">
            <li class="menu__item">
              <a class="menu__link">D3</a>
            </li>
            <li class="menu__item">
              <a class="menu__link">Peity</a>
            </li>
            <li class="menu__item">
              <a class="menu__link">Highcharts</a>
            </li>
          </ul>
        </li>
        <li class="menu__item">
          <a class="menu__link">
            <span class="menu__icon">🇦🇪</span>
            <span class="menu__label">Pages</span>
            <span class="menu__after"></span>
          </a>
          <ul class="menu__list">
            <li class="menu__item">
              <a class="menu__link">Sign In</a>
            </li>
            <li class="menu__item">
              <a class="menu__link">Sign Up</a>
            </li>
            <li class="menu__item">
              <a class="menu__link">Forgot Password</a>
            </li>
            <li class="menu__item">
              <a class="menu__link">404</a>
            </li>
            <li class="menu__item">
              <a class="menu__link">500</a>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  </div>
  <div class="col-8@lg col-7@md">

```html
<aside class="menu menu--dark bg-dark p-4">
  <p class="menu__heading">OVERVIEW</p>
  <ul class="menu__list">
    <li class="menu__item">
      <a class="menu__link">
        <span class="menu__icon">🇺🇳</span>
        <span class="menu__label">Dashboard</span>
        <span class="menu__after">
          <span class="badge badge--danger">13</span>
        </span>
      </a>
    </li>
  </ul>
  ...
</aside>
```

  </div>
</div>

Create a light background menu by adding `.menu--light` modifier class on `.menu` container.

<div class="row">
  <div class="col-4@lg col-5@md">
    <aside class="menu menu--light bg-light p-4">
      <p class="menu__heading">OVERVIEW</p>
      <ul class="menu__list">
        <li class="menu__item">
          <a class="menu__link">
            <span class="menu__icon">🇺🇳</span>
            <span class="menu__label">Dashboard</span>
            <span class="menu__after">
              <span class="badge badge--danger">13</span>
            </span>
          </a>
        </li>
      </ul>
      <p class="menu__heading">UI ELEMENTS</p>
      <ul class="menu__list">
        <li class="menu__item">
          <a class="menu__link">
            <span class="menu__icon">🇦🇱</span>
            <span class="menu__label">Content</span>
            <span class="menu__after"></span>
          </a>
          <ul class="menu__list">
            <li class="menu__item">
              <a class="menu__link">Typography</a>
            </li>
            <li class="menu__item">
              <a class="menu__link">Table</a>
            </li>
            <li class="menu__item">
              <a class="menu__link">Media</a>
            </li>
          </ul>
        </li>
        <li class="menu__item">
          <a class="menu__link">
            <span class="menu__icon">🇩🇿</span>
            <span class="menu__label">Components</span>
            <span class="menu__after"></span>
          </a>
          <ul class="menu__list">
            <li class="menu__item">
              <a class="menu__link">Alert</a>
            </li>
            <li class="menu__item">
              <a class="menu__link">Badge</a>
            </li>
            <li class="menu__item">
              <a class="menu__link">Button</a>
            </li>
          </ul>
        </li>
        <li class="menu__item">
          <a class="menu__link">
            <span class="menu__icon">🇦🇫</span>
            <span class="menu__label">Form</span>
            <span class="menu__after"></span>
          </a>
          <ul class="menu__list">
            <li class="menu__item">
              <a class="menu__link">Control</a>
            </li>
            <li class="menu__item">
              <a class="menu__link">Layout</a>
            </li>
            <li class="menu__item">
              <a class="menu__link">Validation</a>
            </li>
          </ul>
        </li>
        <li class="menu__item">
          <a class="menu__link">
            <span class="menu__icon">🇦🇷</span>
            <span class="menu__label">Chart</span>
            <span class="menu__after"></span>
          </a>
          <ul class="menu__list">
            <li class="menu__item">
              <a class="menu__link">D3</a>
            </li>
            <li class="menu__item">
              <a class="menu__link">Peity</a>
            </li>
            <li class="menu__item">
              <a class="menu__link">Highcharts</a>
            </li>
          </ul>
        </li>
        <li class="menu__item">
          <a class="menu__link">
            <span class="menu__icon">🇦🇪</span>
            <span class="menu__label">Pages</span>
            <span class="menu__after"></span>
          </a>
          <ul class="menu__list">
            <li class="menu__item">
              <a class="menu__link">Sign In</a>
            </li>
            <li class="menu__item">
              <a class="menu__link">Sign Up</a>
            </li>
            <li class="menu__item">
              <a class="menu__link">Forgot Password</a>
            </li>
            <li class="menu__item">
              <a class="menu__link">404</a>
            </li>
            <li class="menu__item">
              <a class="menu__link">500</a>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  </div>
  <div class="col-8@lg col-7@md">

```html
<aside class="menu menu--light bg-light p-4">
  <p class="menu__heading">OVERVIEW</p>
  <ul class="menu__list">
    <li class="menu__item">
      <a class="menu__link">
        <span class="menu__icon">🇺🇳</span>
        <span class="menu__label">Dashboard</span>
        <span class="menu__after">
          <span class="badge badge--danger">13</span>
        </span>
      </a>
    </li>
  </ul>
  ...
</aside>
```

  </div>
</div>

## Size

You can create s small size of menu by adding `.menu--sm` on `.menu` container.

<div class="row">
  <div class="col-4@lg col-5@md">
    <aside class="menu menu--sm border rounded shadow-sm p-5">
      <p class="menu__heading">OVERVIEW</p>
      <ul class="menu__list">
        <li class="menu__item">
          <a class="menu__link">
            <span class="menu__icon">🇺🇳</span>
            <span class="menu__label">Dashboard</span>
            <span class="menu__after">
              <span class="badge badge--danger">13</span>
            </span>
          </a>
        </li>
      </ul>
      <p class="menu__heading">UI ELEMENTS</p>
      <ul class="menu__list">
        <li class="menu__item">
          <a class="menu__link">
            <span class="menu__icon">🇦🇱</span>
            <span class="menu__label">Content</span>
            <span class="menu__after"></span>
          </a>
          <ul class="menu__list">
            <li class="menu__item">
              <a class="menu__link">Typography</a>
            </li>
            <li class="menu__item">
              <a class="menu__link">Table</a>
            </li>
            <li class="menu__item">
              <a class="menu__link">Media</a>
            </li>
          </ul>
        </li>
        <li class="menu__item">
          <a class="menu__link">
            <span class="menu__icon">🇩🇿</span>
            <span class="menu__label">Components</span>
            <span class="menu__after"></span>
          </a>
          <ul class="menu__list">
            <li class="menu__item">
              <a class="menu__link">Alert</a>
            </li>
            <li class="menu__item">
              <a class="menu__link">Badge</a>
            </li>
            <li class="menu__item">
              <a class="menu__link">Button</a>
            </li>
          </ul>
        </li>
        <li class="menu__item">
          <a class="menu__link">
            <span class="menu__icon">🇦🇫</span>
            <span class="menu__label">Form</span>
            <span class="menu__after"></span>
          </a>
          <ul class="menu__list">
            <li class="menu__item">
              <a class="menu__link">Control</a>
            </li>
            <li class="menu__item">
              <a class="menu__link">Layout</a>
            </li>
            <li class="menu__item">
              <a class="menu__link">Validation</a>
            </li>
          </ul>
        </li>
        <li class="menu__item">
          <a class="menu__link">
            <span class="menu__icon">🇦🇷</span>
            <span class="menu__label">Chart</span>
            <span class="menu__after"></span>
          </a>
          <ul class="menu__list">
            <li class="menu__item">
              <a class="menu__link">D3</a>
            </li>
            <li class="menu__item">
              <a class="menu__link">Peity</a>
            </li>
            <li class="menu__item">
              <a class="menu__link">Highcharts</a>
            </li>
          </ul>
        </li>
        <li class="menu__item">
          <a class="menu__link">
            <span class="menu__icon">🇦🇪</span>
            <span class="menu__label">Pages</span>
            <span class="menu__after"></span>
          </a>
          <ul class="menu__list">
            <li class="menu__item">
              <a class="menu__link">Sign In</a>
            </li>
            <li class="menu__item">
              <a class="menu__link">Sign Up</a>
            </li>
            <li class="menu__item">
              <a class="menu__link">Forgot Password</a>
            </li>
            <li class="menu__item">
              <a class="menu__link">404</a>
            </li>
            <li class="menu__item">
              <a class="menu__link">500</a>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  </div>
  <div class="col-8@lg col-7@md">

```html
<aside class="menu menu--sm border rounded shadow-sm p-5">
  <p class="menu__heading">OVERVIEW</p>
  <ul class="menu__list">
    <li class="menu__item">
      <a class="menu__link">
        <span class="menu__icon">🇺🇳</span>
        <span class="menu__label">Dashboard</span>
        <span class="menu__after">
          <span class="badge badge--danger">13</span>
        </span>
      </a>
    </li>
  </ul>
  ...
</aside>
```

  </div>
</div>