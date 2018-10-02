---
sidebarDepth: 0
---

# Input

The following **modifiers** are supported:

- the color
- the size
- the state

The following type attributes are supported:

- `type="text"`
- `type="password"`
- `type="password"`
- `type="email"`
- `type="tel"`

::: vue-demo collaspable
``` html
<input class="input" type="text" placeholder="Text input">
```
:::

## Colors

::: vue-demo collapsable
``` html
<div class="field">
  <div class="control">
    <input class="input is-primary" type="text" placeholder="Primary input">
  </div>
</div>
<div class="field">
  <div class="control">
    <input class="input is-info" type="text" placeholder="Info input">
  </div>
</div>
<div class="field">
  <div class="control">
    <input class="input is-success" type="text" placeholder="Success input">
  </div>
</div>
<div class="field">
  <div class="control">
    <input class="input is-warning" type="text" placeholder="Warning input">
  </div>
</div>
<div class="field">
  <div class="control">
    <input class="input is-danger" type="text" placeholder="Danger input">
  </div>
</div>
```
:::

## Sizes

::: vue-demo collapsable
``` html
<div class="field">
  <div class="control">
    <input class="input is-small" type="text" placeholder="Small input">
  </div>
</div>
<div class="field">
  <div class="control">
    <input class="input" type="text" placeholder="Normal input">
  </div>
</div>
<div class="field">
  <div class="control">
    <input class="input is-medium" type="text" placeholder="Medium input">
  </div>
</div>
<div class="field">
  <div class="control">
    <input class="input is-large" type="text" placeholder="Large input">
  </div>
</div>
```
:::

## Styles

::: vue-demo
``` html
<input class="input is-rounded" type="text" placeholder="Rounded input">
```
:::

## States

### Normal

::: vue-demo
``` html
<div class="control">
  <input class="input" type="text" placeholder="Normal input">
</div>
```
:::

### Hover

::: vue-demo
``` html
<div class="control">
  <input class="input is-hovered" type="text" placeholder="Hover input">
</div>
```
:::

### Focus

::: vue-demo
``` html
<div class="control">
  <input class="input is-focused" type="text" placeholder="Focus input">
</div>
```
:::

### Loading

::: vue-demo
``` html
<div class="control">
  <input class="input is-loading" type="text" placeholder="Loading input">
</div>
```
:::

You can resize the loading spinner by appending `is-small`, `is-medium`
or `is-large` to the `control` container.

::: vue-demo collapsable
``` html
<div class="field">
  <div class="control is-small is-loading">
    <input class="input is-small" type="text" placeholder="Small loading input">
  </div>
</div>
<div class="field">
  <div class="control is-loading">
    <input class="input" type="text" placeholder="Normal loading input">
  </div>
</div>
<div class="field">
  <div class="control is-medium is-loading">
    <input class="input is-medium" type="text" placeholder="Medium loading input">
  </div>
</div>
<div class="field">
  <div class="control is-large is-loading">
    <input class="input is-large" type="text" placeholder="Large loading input">
  </div>
</div>
```
:::

### Disabled

::: vue-demo
``` html
<div class="control">
  <input class="input" type="text" placeholder="Disabled input" disabled>
</div>
```
:::

### Readonly

::: vue-demo
``` html
<div class="control">
  <input class="input" type="text" value="This text is readonly" readonly>
</div>
```
:::

### Static

::: vue-demo
``` html
<div class="control">
  <input class="input is-static" type="text" value="This text is static, you can input here also">
</div>
```
:::

If you also append the `is-static` modifier,
it removes the background, border, shadow, and horizontal padding,
while maintaining the **vertical spacing**
so you can easily align the input in an context, like a horizontal form.

::: vue-demo collapsable
``` html
<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">From</label>
  </div>
  <div class="field-body">
    <div class="field">
      <p class="control">
        <input class="input is-static" type="email" value="me@example.com" readonly>
      </p>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">To</label>
  </div>
  <div class="field-body">
    <div class="field">
      <p class="control">
        <input class="input" type="email" placeholder="Recipient email">
      </p>
    </div>
  </div>
</div>
```
:::

## With Font Awesome icons

You can append one of 2 **modifiers** on a control:

- `has-icons-left`
- and/or `has-icons-right`

You also need to add a modifier on the **icon**:

- `icon is-left` if `has-icons-left` is used
- `icon is-right` if `has-icons-right` is used

The size of the **input** will define the size of the icon container.

::: vue-demo collapsable
``` html
<div class="field">
  <p class="control has-icons-left has-icons-right">
    <input class="input" type="email" placeholder="Email">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </p>
</div>
<div class="field">
  <p class="control has-icons-left">
    <input class="input" type="password" placeholder="Password">
    <span class="icon is-small is-left">
      <i class="fas fa-lock"></i>
    </span>
  </p>
</div>
```
:::

If the control contains an icon, Bulma will make sure the icon remains
**centered**, no matter the size of the input or of the icon.

::: vue-demo collapsable
``` html
<div class="control has-icons-left has-icons-right">
  <input class="input is-small" type="email" placeholder="Email">
  <span class="icon is-small is-left">
    <i class="fas fa-envelope"></i>
  </span>
  <span class="icon is-small is-right">
    <i class="fas fa-check"></i>
  </span>
</div>
```
:::

::: vue-demo
``` html
<div class="control has-icons-left has-icons-right">
  <input class="input" type="email" placeholder="Email">
  <span class="icon is-small is-left">
    <i class="fas fa-envelope"></i>
  </span>
  <span class="icon is-small is-right">
    <i class="fas fa-check"></i>
  </span>
</div>
```
:::

::: vue-demo
``` html
<div class="control has-icons-left has-icons-right">
  <input class="input is-medium" type="email" placeholder="Email">
  <span class="icon is-left">
    <i class="fas fa-envelope"></i>
  </span>
  <span class="icon is-right">
    <i class="fas fa-check"></i>
  </span>
</div>
```
:::

::: vue-demo
``` html
<div class="control has-icons-left has-icons-right">
  <input class="input is-large" type="email" placeholder="Email">
  <span class="icon is-medium is-left">
    <i class="fas fa-envelope"></i>
  </span>
  <span class="icon is-medium is-right">
    <i class="fas fa-check"></i>
  </span>
</div>
```
:::
