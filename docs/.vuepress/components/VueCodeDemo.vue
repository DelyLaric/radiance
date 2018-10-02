<template>
  <div class="demo-container">
    <div class="code-demo bulma">
      <html style="padding: 1px; width: 100%; overflow: hidden">
        <component :is="component" />
      </html>
    </div>

    <div class="code-container">
      <div v-if="hasCodeShow" class="code-block-divider"/>

      <slot v-if="hasCodeShow"/>

      <div class="code-block-divider"/>

    </div>

    <div
      v-if="collapsable"
      class="code-toggle-button"
      @click="isShowCode = !isShowCode">
      <span v-show="isShowCode">⬆</span>
      <span v-show="!isShowCode">⬇</span>
    </div>
  </div>
</template>

<script>
import  { buildCodeToComponent } from '../utils'

export default {
  name: 'VueCodeDemo',

  props: {
    code: String,
    collapsable: Boolean
  },

  data() {
    return {
      component: {},
      sourceCode: '',
      isShowCode: false
    };
  },

  computed: {
    hasCodeShow () {
      if (!this.collapsable) return true

      return this.isShowCode
    }
  },

  created () {
    this.component = buildCodeToComponent(unescape(this.code.trim()))
  }
}
</script>

<style lang="sass" scoped>
@import "../assets/style.sass"

.demo-container
  padding: 0
  margin-top: 1rem
  margin-bottom: 1rem
  border-radius: 6px
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1)

.code-demo,
.code-summary
  display: flex
  padding: 1rem

.code-container
  overflow: auto

.code-container pre:not(:last-child)
  margin-bottom: 0

.code-toggle-button
  width: 100%
  height: 2rem
  display: flex
  cursor: pointer
  align-items: center
  justify-content: center
  border-bottom-left-radius: 6px
  border-bottom-right-radius: 6px

.code-toggle-button:hover
  background-color: #f1f1f1

.code-block-divider
  height: 1px
  background-color: gainsboro

.bulma pre
  padding: 0
  margin-top: 0
</style>
