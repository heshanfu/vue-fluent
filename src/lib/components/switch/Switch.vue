<template>
  <label
    ref="label"
    :class="[size, { 'is-disabled': disabled }]"
    :disabled="disabled"
    :tabindex="disabled ? false : 0"
    class="switch"
    @keydown.prevent.enter.space="$refs.label.click()"
    @mousedown="isMouseDown = true"
    @mouseup="isMouseDown = false"
    @mouseout="isMouseDown = false"
    @blur="isMouseDown = false">
    <input
      v-model="newValue"
      :disabled="disabled"
      :name="name"
      :value="nativeValue"
      :true-value="trueValue"
      :false-value="falseValue"
      type="checkbox"
      @click.stop>
    <span 
      :class="[{ 'is-elastic': isMouseDown && !disabled }, type]" 
      class="check"/>
    <span class="control-label"><slot/></span>
  </label>
</template>

<script>
export default {
  name: 'BSwitch',
  props: {
    value: [String, Number, Boolean, Function, Object, Array, Symbol],
    nativeValue: [String, Number, Boolean, Function, Object, Array, Symbol],
    disabled: Boolean,
    type: String,
    name: String,
    size: String,
    trueValue: {
      type: [String, Number, Boolean, Function, Object, Array, Symbol],
      default: true,
    },
    falseValue: {
      type: [String, Number, Boolean, Function, Object, Array, Symbol],
      default: false,
    },
  },
  data() {
    return {
      newValue: this.value,
      isMouseDown: false,
    }
  },
  watch: {
    /**
     * When v-model change, set internal value.
     */
    value(value) {
      this.newValue = value
    },
    /**
     * Emit input event to update the user v-model.
     */
    newValue(value) {
      this.$emit('input', value)
    },
  },
}
</script>
