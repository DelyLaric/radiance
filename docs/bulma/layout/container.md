---
sidebarDepth: 0
---

# Container

A simple container to center your content horizontally

The `.container` class can be used in any context,
but mostly as a direct child of either:

- `.navbar`
- `.hero`
- `.section`
- `.footer`

The containers **witdh** for each **breakpoint** is the result of: `$device - (2 * $gap)`. 
The `$gap` variable has a default value of `32px` but can be modified.

This is how the container will behave:

- on `$desktop` it will have a maxium width of **960px**.
- on `$widescreen` it will have a maximum width of **1152px**.
- on `$fullhd` it will have a maximum width of **1344px**.

The values 960, 1152, 1344 have been chosen because they are divisible by both 12 and 16.

::: vue-demo
``` html
<div class="container">
  <div class="notification">
    This container is <strong>centered</strong> on desktop.
  </div>
</div>
```
:::

# Fluid container

If you don't want to have a maxium width but want to keep the 32px margin
on the left and right sides, add the `is-fluid` modifier:

::: vue-demo
``` html
<div class="container is-fluid">
  <div class="notification">
    This container is <strong>fluid</strong>: it will have a 32px gap on either side, on any
    viewport size.
  </div>
</div>
```
:::

# Breakpoint containers

With the two modifiers `.is-widescreen` and `.is-fullhd`,
you can have a fullwidth container **until** those specific breakpoints.

::: vue-demo
``` html
<div class="container is-widescreen">
  <div class="notification">
    This container is <strong>fullwidth</strong> <em>until</em> the <code>$widescreen</code> breakpoint.
  </div>
</div>
```
:::

::: vue-demo
``` html
<div class="container is-fullhd">
  <div class="notification">
    This container is <strong>fullwidth</strong> <em>until</em> the <code>$fullhd</code> breakpoint.
  </div>
</div>
```
:::
