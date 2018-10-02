---
sidebarDepth: 0
---

# Textarea

::: vue-demo
``` html
<textarea class="textarea" placeholder="e.g. Hello world"></textarea>
```
:::

::: vue-demo
``` html
<textarea class="textarea" placeholder="10 lines of textarea" rows="10"></textarea>
```
:::

# Colors

::: vue-demo collapsable
``` html
<div class="field">
  <div class="control">
    <textarea class="textarea is-primary" type="text" placeholder="Primary textarea"></textarea>
  </div>
</div>
<div class="field">
  <div class="control">
    <textarea class="textarea is-info" type="text" placeholder="Info textarea"></textarea>
  </div>
</div>
<div class="field">
  <div class="control">
    <textarea class="textarea is-success" type="text" placeholder="Success textarea"></textarea>
  </div>
</div>
<div class="field">
  <div class="control">
    <textarea class="textarea is-warning" type="text" placeholder="Warning textarea"></textarea>
  </div>
</div>
<div class="field">
  <div class="control">
    <textarea class="textarea is-danger" type="text" placeholder="Danger textarea"></textarea>
  </div>
</div>
```
:::

## Sizes

::: vue-demo collapsable
``` html
<div class="field">
  <div class="control">
    <textarea class="textarea is-small" type="text" placeholder="Small textarea"></textarea>
  </div>
</div>
<div class="field">
  <div class="control">
    <textarea class="textarea" type="text" placeholder="Normal textarea"></textarea>
  </div>
</div>
<div class="field">
  <div class="control">
    <textarea class="textarea is-medium" type="text" placeholder="Medium textarea"></textarea>
  </div>
</div>
<div class="field">
  <div class="control">
    <textarea class="textarea is-large" type="text" placeholder="Large textarea"></textarea>
  </div>
</div>
```
:::

## States

### Normal

::: vue-demo
``` html
<div class="control">
  <textarea class="textarea" type="text" placeholder="Normal textarea"></textarea>
</div>
```
:::

### Hover

::: vue-demo
``` html
<div class="control">
  <textarea class="textarea is-hovered" type="text" placeholder="Hovered textarea"></textarea>
</div>
```
:::

### Focus

::: vue-demo
``` html
<div class="control">
  <textarea class="textarea is-focused" type="text" placeholder="Focused textarea"></textarea>
</div>
```
:::

### Loading

::: vue-demo
``` html
<div class="control is-loading">
  <textarea class="textarea" type="text" placeholder="Loading textarea"></textarea>
</div>
```
:::

You can resize the loading spinner by appending `is-small`, `is-medium`
or `is-large` to the `control` container.

::: vue-demo collapsable
``` html
<div class="field">
  <div class="control is-small is-loading">
    <textarea class="textarea is-small" type="text" placeholder="Small loading textarea"></textarea>
  </div>
</div>
<div class="field">
  <div class="control is-loading">
    <textarea class="textarea" type="text" placeholder="Normal loading textarea"></textarea>
  </div>
</div>
<div class="field">
  <div class="control is-medium is-loading">
    <textarea class="textarea is-medium" type="text" placeholder="Medium loading textarea"></textarea>
  </div>
</div>
<div class="field">
  <div class="control is-large is-loading">
    <textarea class="textarea is-large" type="text" placeholder="Large loading textarea"></textarea>
  </div>
</div>
```
:::

## Disabled

::: vue-demo
``` html
<div class="control">
  <textarea class="textarea" type="text" placeholder="Disabled textarea" disabled></textarea>
</div>
```
:::

## Readonly

If you use the `readonly` HTML attribute, the textarea will look similar to normal one,
but is not editable and has no shadow.

::: vue-demo
``` html
<div class="control">
  <textarea class="textarea" type="text" readonly>This content is readonly</textarea>
</div>
```
:::
