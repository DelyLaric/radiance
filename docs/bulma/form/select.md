---
sidebarDepth: 0
---

# Select

The following **modifiers** are supported:

- the color
- the size
- the state

::: vue-demo
``` html
<div class="select">
  <select>
    <option>Select dropdown</option>
    <option>With options</option>
  </select>
</div>
```
:::

## Multiple select

You can style a multiple select dropdown, by using the `is-multiple` modifier,
and by using the `multiple` HTML attribute.

::: vue-demo collapsable
``` html
<div class="select is-multiple">
  <select multiple size="8">
    <option value="Argentina">Argentina</option>
    <option value="Bolivia">Bolivia</option>
    <option value="Brazil">Brazil</option>
    <option value="Chile">Chile</option>
    <option value="Colombia">Colombia</option>
    <option value="Ecuador">Ecuador</option>
    <option value="Guyana">Guyana</option>
    <option value="Paraguay">Paraguay</option>
    <option value="Peru">Peru</option>
    <option value="Suriname">Suriname</option>
    <option value="Uruguay">Uruguay</option>
    <option value="Venezuela">Venezuela</option>
  </select>
</div>
```
:::

## Colors

::: vue-demo collapsable
``` html
<div class="field">
  <div class="control">
    <div class="select is-primary">
      <select>
        <option>Select dropdown</option>
        <option>With options</option>
      </select>
    </div>
  </div>
</div>
<div class="field">
  <div class="control">
    <div class="select is-info">
      <select>
        <option>Select dropdown</option>
        <option>With options</option>
      </select>
    </div>
  </div>
</div>
<div class="field">
  <div class="control">
    <div class="select is-success">
      <select>
        <option>Select dropdown</option>
        <option>With options</option>
      </select>
    </div>
  </div>
</div>
<div class="field">
  <div class="control">
    <div class="select is-warning">
      <select>
        <option>Select dropdown</option>
        <option>With options</option>
      </select>
    </div>
  </div>
</div>
<div class="field">
  <div class="control">
    <div class="select is-danger">
      <select>
        <option>Select dropdown</option>
        <option>With options</option>
      </select>
    </div>
  </div>
</div>
```
:::

## Styles

::: vue-demo
``` html
<div class="select is-rounded">
  <select>
    <option>Rounded dropdown</option>
    <option>With options</option>
  </select>
</div>
```
:::

## Sizes

::: vue-demo collapsable
``` html
<div class="field">
  <div class="control">
    <div class="select is-small">
      <select>
        <option>Select dropdown</option>
        <option>With options</option>
      </select>
    </div>
  </div>
</div>
<div class="field">
  <div class="control">
    <div class="select">
      <select>
        <option>Select dropdown</option>
        <option>With options</option>
      </select>
    </div>
  </div>
</div>
<div class="field">
  <div class="control">
    <div class="select is-medium">
      <select>
        <option>Select dropdown</option>
        <option>With options</option>
      </select>
    </div>
  </div>
</div>
<div class="field">
  <div class="control">
    <div class="select is-large">
      <select>
        <option>Select dropdown</option>
        <option>With options</option>
      </select>
    </div>
  </div>
</div>
```
:::

## States

### Normal

::: vue-demo
``` html
<div class="control">
  <div class="select">
    <select>
      <option>Select dropdown</option>
      <option>With options</option>
    </select>
  </div>
</div>
```
:::

### Hover

::: vue-demo
``` html
<div class="control">
  <div class="select">
    <select class="is-hovered">
      <option>Select dropdown</option>
      <option>With options</option>
    </select>
  </div>
</div>
```
:::

### Focus

::: vue-demo
``` html
<div class="control">
  <div class="select">
    <select class="is-focused">
      <option>Select dropdown</option>
      <option>With options</option>
    </select>
  </div>
</div>
```
:::

### Loading

::: vue-demo
``` html
<div class="control">
  <div class="select is-loading">
    <select>
      <option>Select dropdown</option>
      <option>With options</option>
    </select>
  </div>
</div>
```
:::

## With icons

You can append the **modifier** on a control:

- `has-icons-left`

You also need to add a modifier on the **icon**:

- `icon is-left` since `has-icons-left` is used

The size of the **select** will define the size of the icon container.

::: vue-demo
``` html
<div class="field">
  <div class="control has-icons-left">
    <div class="select">
      <select>
        <option selected>Country</option>
        <option>Select dropdown</option>
        <option>With options</option>
      </select>
    </div>
    <div class="icon is-small is-left">
      <i class="fas fa-globe"></i>
    </div>
  </div>
</div>
```
:::

If the control contains an icon, Bulma will make sure the icon remains
**centered**, no matter the size of the input of the icon.

::: vue-demo collapsable
``` html
<div class="field">
  <div class="control has-icons-left">
    <div class="select is-small">
      <select>
        <option selected>Country</option>
        <option>Select dropdown</option>
        <option>With options</option>
      </select>
    </div>
    <span class="icon is-small is-left">
      <i class="fas fa-globe"></i>
    </span>
  </div>
</div>

<div class="field">
  <div class="control has-icons-left">
    <div class="select">
      <select>
        <option selected>Country</option>
        <option>Select dropdown</option>
        <option>With options</option>
      </select>
    </div>
    <span class="icon is-left">
      <i class="fas fa-globe"></i>
    </span>
  </div>
</div>

<div class="field">
  <div class="control has-icons-left">
    <div class="select is-medium">
      <select>
        <option selected>Country</option>
        <option>Select dropdown</option>
        <option>With options</option>
      </select>
    </div>
    <span class="icon is-medium is-left">
      <i class="fas fa-globe"></i>
    </span>
  </div>
</div>

<div class="field">
  <div class="control has-icons-left">
    <div class="select is-large">
      <select>
        <option selected>Country</option>
        <option>Select dropdown</option>
        <option>With options</option>
      </select>
    </div>
    <span class="icon is-large is-left">
      <i class="fas fa-globe"></i>
    </span>
  </div>
</div>
```
:::
