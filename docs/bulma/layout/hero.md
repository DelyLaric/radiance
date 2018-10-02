---
sidebarDepth: 0
---

# Hero

The hero component allows you to add a **full width banner** to your webpage,
which can optionally cover the full height of the page as well.

The basic requirement of this component are:

- `hero` as the main container
  - `hero-body` as a direct child, in which you can put all your content

For the full height hero to work, you will also need a `hero-head` and a `hero-foot`.

::: vue-demo
``` html
<section class="hero">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        Hero title
      </h1>
      <h2 class="subtitle">
        Hero subtitle
      </h2>
    </div>
  </div>
</section>
```
:::

# Colors

As the buttons, you can choose one of the **7 different colors**:

::: vue-demo collapsable
``` html
<template>
  <div>
    <section
      v-for="color in colors"
      :class="['hero', 'is-' + color]">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Primary title
          </h1>
          <h2 class="subtitle">
            Primary subtitle
          </h2>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data () {
    return {
      colors: ['primary', 'info', 'success', 'warning', 'danger', 'light', 'dark']
    }
  }
}
</script>
```
:::

# Gradients

By adding the `is-bold` modifier, you can generate a subtle gradient

::: vue-demo collapsable
``` html
<template>
  <div>
    <section
      v-for="color in colors"
      :class="['hero', 'is-bold', 'is-medium', 'is-' + color]">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Primary title
          </h1>
          <h2 class="subtitle">
            Primary subtitle
          </h2>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data () {
    return {
      colors: ['primary', 'info', 'success', 'warning', 'danger', 'light', 'dark']
    }
  }
}
</script>
```
:::

## Sizes

::: vue-demo
``` html
<section class="hero is-primary is-medium">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        Medium title
      </h1>
      <h2 class="subtitle">
        Medium subtitle
      </h2>
    </div>
  </div>
</section>

<section class="hero is-info is-large">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        Large title
      </h1>
      <h2 class="subtitle">
        Large subtitle
      </h2>
    </div>
  </div>
</section>

<section class="hero is-success is-fullheight">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        Full Height title
      </h1>
      <h2 class="subtitle">
        Full Height subtitle
      </h2>
    </div>
  </div>
</section>
```
:::

# Full height hero

## [Todo](https://bulma.io/documentation/layout/hero/#full-height-hero)

## troubles

- `width` limitation of `.content` container
