---
sidebarDepth: 0
---

# General

The following form controls classes are supported:

- `.label`
- `.input`
- `.textarea`
- `.checkbox`
- `.radio`
- `.input`
- `.button`
- `.help`

Each of them should be wrapped in a `.control` container.<br/>
When combining serveral controls in a **form**, use the `.field` class
as a **container**, to keep the spacing consistent.

::: vue-demo collapsable
``` html
<div class="field">
  <label class="label">Name</label>
  <div class="control">
    <input class="input" type="text" placeholder="Text input">
  </div>
</div>

<div class="field">
  <label class="label">Username</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-success" type="text" placeholder="Text input" value="bulma">
    <span class="icon is-small is-left">
      <i class="fas fa-user"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
  <p class="help is-success">This username is available</p>
</div>

<div class="field">
  <label class="label">Email</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-danger" type="email" placeholder="Email input" value="hello@">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-exclamation-triangle"></i>
    </span>
  </div>
  <p class="help is-danger">This email is invalid</p>
</div>

<div class="field">
  <label class="label">Subject</label>
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
  <label class="label">Message</label>
  <div class="control">
    <textarea class="textarea" placeholder="Textarea"></textarea>
  </div>
</div>

<div class="field">
  <div class="control">
    <label class="checkbox">
      <input type="checkbox">
      I agree to the <a href="#">terms and conditions</a>
    </label>
  </div>
</div>

<div class="field">
  <div class="control">
    <label class="radio">
      <input type="radio" name="question">
      Yes
    </label>
    <label class="radio">
      <input type="radio" name="question">
      No
    </label>
  </div>
</div>

<div class="field is-grouped">
  <div class="control">
    <button class="button is-link">Submit</button>
  </div>
  <div class="control">
    <button class="button is-text">Cancel</button>
  </div>
</div>
```
:::

## Form field

The `field` container is a simple container for:

- a text `label`
- a form `control`
- an optional `help` text

::: vue-demo collapsable
``` html
<div class="field">
  <label class="label">Label</label>
  <div class="control">
    <input class="input" type="text" placeholder="Text input">
  </div>
  <p class="help">This is a help text</p>
</div>
```
:::

This container allows form fields to be **spaced** consistently.

::: vue-demo collapsable
``` html
<div class="field">
  <label class="label">Name</label>
  <div class="control">
    <input class="input" type="text" placeholder="e.g Alex Smith">
  </div>
</div>

<div class="field">
  <label class="label">Email</label>
  <div class="control">
    <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com">
  </div>
</div>
```
:::

## Form control

The `control` is a versatile container meant to **enhance single form controls**.
Because it has the same height as a control elements,
it can only contain the following elements:

- `input`
- `select`
- `button`
- `icon`


::: vue-demo collapsable
``` html
<div class="control">
  <input class="input" type="text" placeholder="Text input">
</div>
```
:::

::: vue-demo collapsable
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

::: vue-demo collapsable
``` html
<div class="control">
  <button class="button is-primary">Submit</button>
</div>
```
:::

# With icons

You can append one of 2 **modifiers** on a control:

- `has-icons-left`
- and/or `has-icons-right`

You also need to add a modifier on the icon:

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
<div class="field">
  <p class="control">
    <button class="button is-success">
      Login
    </button>
  </p>
</div>
```
:::

You can append icons to **select dropdowns** as well.

::: vue-demo collapsable
``` html
<div class="field">
  <p class="control has-icons-left">
    <span class="select">
      <select>
        <option selected>Country</option>
        <option>Select dropdown</option>
        <option>With options</option>
      </select>
    </span>
    <span class="icon is-small is-left">
      <i class="fas fa-globe"></i>
    </span>
  </p>
</div>
```
:::

If the control contains tan icon, Bulma will make sure the icon remains centered,
no matter the size of the input or of the icon.

::: vue-demo collapsable
``` html
<div class="field">
  <label class="label is-small">Small input</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-small" type="email" placeholder="Normal">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
</div>
```
:::

::: vue-demo collapsable
``` html
<div class="field">
  <label class="label">Normal input</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input" type="email" placeholder="Extra small">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope fa-xs"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check fa-xs"></i>
    </span>
  </div>
</div>

<div class="field">
  <div class="control has-icons-left has-icons-right">
    <input class="input" type="email" placeholder="Normal">
    <span class="icon is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
</div>
```
:::

::: vue-demo collapsable
``` html
<div class="field">
  <label class="label is-medium">Medium input</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-medium" type="email" placeholder="Extra small">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope fa-xs"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check fa-xs"></i>
    </span>
  </div>
</div>

<div class="field">
  <div class="control has-icons-left has-icons-right">
    <input class="input is-medium" type="email" placeholder="Small">
    <span class="icon is-left">
      <i class="fas fa-envelope fa-sm"></i>
    </span>
    <span class="icon is-right">
      <i class="fas fa-check fa-sm"></i>
    </span>
  </div>
</div>

<div class="field">
  <div class="control has-icons-left has-icons-right">
    <input class="input is-medium" type="email" placeholder="Normal">
    <span class="icon is-medium is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-medium is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
</div>
```
:::

::: vue-demo collapsable
``` html
<div class="field">
  <label class="label is-large">Large input</label>
  <div class="control has-icons-left has-icons-right">
    <input class="input is-large" type="email" placeholder="Extra small">
    <span class="icon is-small is-left">
      <i class="fas fa-envelope fa-xs"></i>
    </span>
    <span class="icon is-small is-right">
      <i class="fas fa-check fa-xs"></i>
    </span>
  </div>
</div>

<div class="field">
  <div class="control has-icons-left has-icons-right">
    <input class="input is-large" type="email" placeholder="Small">
    <span class="icon is-left">
      <i class="fas fa-envelope fa-sm"></i>
    </span>
    <span class="icon is-right">
      <i class="fas fa-check fa-sm"></i>
    </span>
  </div>
</div>

<div class="field">
  <div class="control has-icons-left has-icons-right">
    <input class="input is-large" type="email" placeholder="Normal">
    <span class="icon is-large is-left">
      <i class="fas fa-envelope"></i>
    </span>
    <span class="icon is-large is-right">
      <i class="fas fa-check"></i>
    </span>
  </div>
</div>

<div class="field">
  <div class="control has-icons-left has-icons-right">
    <input class="input is-large" type="email" placeholder="Large">
    <span class="icon is-medium is-left">
      <i class="fas fa-envelope fa-lg"></i>
    </span>
    <span class="icon is-medium is-right">
      <i class="fas fa-check fa-lg"></i>
    </span>
  </div>
</div>
```
:::

## Form addons

If you want to attach controls together,
use the `has-addons` modifier on the `field` container

::: vue-demo  collapsable
``` html
<div class="field has-addons">
  <div class="control">
    <input class="input" type="text" placeholder="Find a repository">
  </div>
  <div class="control">
    <a class="button is-info">
      Search
    </a>
  </div>
</div>
```
:::

You can attach inputs, buttons, and dropdowns **only**.

It can be useful to append a static button.

::: vue-demo collapsable
``` html
<div class="field has-addons">
  <p class="control">
    <input class="input" type="text" placeholder="Your email">
  </p>
  <p class="control">
    <a class="button is-static">
      @gmail.com
    </a>
  </p>
</div>
```
:::

Use the `is-expanded` modifier on the element you want to fill up the remaining space
(in this case, the input):

::: vue-demo collapsable
``` html
<div class="field has-addons">
  <p class="control">
    <span class="select">
      <select>
        <option>$</option>
        <option>£</option>
        <option>€</option>
      </select>
    </span>
  </p>
  <p class="control">
    <input class="input" type="text" placeholder="Amount of money">
  </p>
  <p class="control">
    <a class="button">
      Transfer
    </a>
  </p>
</div>

<div class="field has-addons">
  <p class="control">
    <span class="select">
      <select>
        <option>$</option>
        <option>£</option>
        <option>€</option>
      </select>
    </span>
  </p>
  <p class="control is-expanded">
    <input class="input" type="text" placeholder="Amount of money">
  </p>
  <p class="control">
    <a class="button">
      Transfer
    </a>
  </p>
</div>
```
:::

If you want a full width select dropdown,
pair `control is-expanded` with `select is-fullwidth`.

::: vue-demo collapsable
``` html
<div class="field has-addons">
  <div class="control is-expanded">
    <div class="select is-fullwidth">
      <select name="country">
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
  </div>
  <div class="control">
    <button type="submit" class="button is-primary">Choose</button>
  </div>
</div>
```
:::

Use the `has-addons-centered` or the `has-addons-right` modifiers to alter the **alignment**.

::: vue-demo collapsable
``` html
<div class="field has-addons has-addons-centered">
  <p class="control">
    <span class="select">
      <select>
        <option>$</option>
        <option>£</option>
        <option>€</option>
      </select>
    </span>
  </p>
  <p class="control">
    <input class="input" type="text" placeholder="Amount of money">
  </p>
  <p class="control">
    <a class="button is-primary">
      Transfer
    </a>
  </p>
</div>
```
:::

::: vue-demo collapsable
``` html
<div class="field has-addons has-addons-right">
  <p class="control">
    <span class="select">
      <select>
        <option>$</option>
        <option>£</option>
        <option>€</option>
      </select>
    </span>
  </p>
  <p class="control">
    <input class="input" type="text" placeholder="Amount of money">
  </p>
  <p class="control">
    <a class="button is-primary">
      Transfer
    </a>
  </p>
</div>
```
:::

## Form group

If you want to group controls together,
use the `is-grouped` modifier on the `field` container.

::: vue-demo collapsable
``` html
<div class="field is-grouped">
  <p class="control">
    <a class="button is-primary">
      Submit
    </a>
  </p>
  <p class="control">
    <a class="button is-light">
      Cancel
    </a>
  </p>
</div>
```
:::

Use the `is-grouped-centered` or the `is-grouped-right` modifiers to alter the **alignment**

::: vue-demo collapsable
``` html
<div class="field is-grouped is-grouped-centered">
  <p class="control">
    <a class="button is-primary">
      Submit
    </a>
  </p>
  <p class="control">
    <a class="button is-light">
      Cancel
    </a>
  </p>
</div>
```
:::

::: vue-demo collapsable
``` html
<div class="field is-grouped is-grouped-right">
  <p class="control">
    <a class="button is-primary">
      Submit
    </a>
  </p>
  <p class="control">
    <a class="button is-light">
      Cancel
    </a>
  </p>
</div>
```
:::

Add the `is-expanded` modifier on the control element
you want to **fill up the remainint space** with.

::: vue-demo collapsable
``` html
<div class="field is-grouped">
  <p class="control is-expanded">
    <input class="input" type="text" placeholder="Find a repository">
  </p>
  <p class="control">
    <a class="button is-info">
      Search
    </a>
  </p>
</div>
```
:::

Add the `is-grouped-multiline` modifier to allow controls
to fill up **multiple lines**. This is ideal for a long list of controls.

::: vue-demo collapsable
``` html
<div class="field is-grouped is-grouped-multiline">
  <p class="control">
    <a class="button">
      One
    </a>
  </p>
  <p class="control">
    <a class="button">
      Two
    </a>
  </p>
  <p class="control">
    <a class="button">
      Three
    </a>
  </p>
  <p class="control">
    <a class="button">
      Four
    </a>
  </p>
  <p class="control">
    <a class="button">
      Five
    </a>
  </p>
  <p class="control">
    <a class="button">
      Size
    </a>
  </p>
  <p class="control">
    <a class="button">
      Seven
    </a>
  </p>
  <p class="control">
    <a class="button">
      Eight
    </a>
  </p>
  <p class="control">
    <a class="button">
      Nine
    </a>
  </p>
  <p class="control">
    <a class="button">
      Ten
    </a>
  </p>
  <p class="control">
    <a class="button">
      Eleven
    </a>
  </p>
  <p class="control">
    <a class="button">
      Twelve
    </a>
  </p>
  <p class="control">
    <a class="button">
      Thirteen
    </a>
  </p>
</div>
```
:::

## Horizontal form

If you want a **horizontal** form control,
use the **is-horizontal** modifier on the `field` container,
in which you include:

- `field-label` for the side label
- `field-body` for the input/select/textarea container

You can use `is-grouped` or `has-addons` for the child elements.

::: vue-demo collapsable
``` html
<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">From</label>
  </div>
  <div class="field-body">
    <div class="field">
      <p class="control is-expanded has-icons-left">
        <input class="input" type="text" placeholder="Name">
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control is-expanded has-icons-left has-icons-right">
        <input class="input is-success" type="email" placeholder="Email" value="alex@smith.com">
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-check"></i>
        </span>
      </p>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label"></div>
  <div class="field-body">
    <div class="field is-expanded">
      <div class="field has-addons">
        <p class="control">
          <a class="button is-static">
            +44
          </a>
        </p>
        <p class="control is-expanded">
          <input class="input" type="tel" placeholder="Your phone number">
        </p>
      </div>
      <p class="help">Do not enter the first zero</p>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">Department</label>
  </div>
  <div class="field-body">
    <div class="field is-narrow">
      <div class="control">
        <div class="select is-fullwidth">
          <select>
            <option>Business development</option>
            <option>Marketing</option>
            <option>Sales</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label">
    <label class="label">Already a member?</label>
  </div>
  <div class="field-body">
    <div class="field is-narrow">
      <div class="control">
        <label class="radio">
          <input type="radio" name="member">
          Yes
        </label>
        <label class="radio">
          <input type="radio" name="member">
          No
        </label>
      </div>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">Subject</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <input class="input is-danger" type="text" placeholder="e.g. Partnership opportunity">
      </div>
      <p class="help is-danger">
        This field is required
      </p>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">Question</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <textarea class="textarea" placeholder="Explain how we can help you"></textarea>
      </div>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label">
    <!-- Left empty for spacing -->
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <button class="button is-primary">
          Send message
        </button>
      </div>
    </div>
  </div>
</div>
```
:::

To preserve the **vertical alignment** of labels with each type and size of control,
the `.field-label` comes with **4 size modifiers**:

- `.is-small`
- `.is-normal` for any `.input` or `.button`
- `.is-medium`
- `.is-large`

::: vue-demo collapsable
``` html
<div class="field is-horizontal">
  <div class="field-label">
    <label class="label">No</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <label class="checkbox">
          <input type="checkbox">
          Checkbox
        </label>
      </div>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label is-small">
    <label class="label">Small</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <input class="input is-small" type="text" placeholder="Small sized input">
      </div>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label is-normal">
    <label class="label">Normal</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <input class="input" type="text" placeholder="Normal sized input">
      </div>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label is-medium">
    <label class="label">Medium</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <input class="input is-medium" type="text" placeholder="Medium sized input">
      </div>
    </div>
  </div>
</div>

<div class="field is-horizontal">
  <div class="field-label is-large">
    <label class="label">Large</label>
  </div>
  <div class="field-body">
    <div class="field">
      <div class="control">
        <input class="input is-large" type="text" placeholder="Large sized input">
      </div>
    </div>
  </div>
</div>
```
:::
