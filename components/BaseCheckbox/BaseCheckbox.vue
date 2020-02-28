<template>
  <b-form-checkbox
    @input="onInput"
    @change="onInput"
    :id="id"
    :name="name"
    :checked="checked"
    :value="value"
    :unchecked-value="uncheckedValue"
  >
    <slot />
  </b-form-checkbox>
</template>

<script>
import { BFormCheckbox } from 'bootstrap-vue';

/**
 * Wrapper for `b-form-checkbox` component from [Bootstrap Vue](https://bootstrap-vue.js.org/docs/components/form-checkbox).
 */
export default {
  name: 'BaseCheckbox',
  components: {
    BFormCheckbox,
  },
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: {
    /**
     * Value returned when this checkbox is checked.
     */
    value: {
      default: true,
    },
    /**
     * Value returned when this checkbox is checked.
     */
    uncheckedValue: {
      default: false,
    },
    /**
     * The current value of the checkbox(es). Must be an array when there are multiple checkboxes bound to the same v-model.
     */
    checked: {},
    /**
     * Sets the value of the 'name' attribute on the form control
     */
    name: {
      type: String,
    },
    /**
     * Used to set the 'id' attribute on the rendered content, and used as the base to generate any additional element IDs as needed.
     */
    id: {
      type: String,
    },
  },
  methods: {
    onInput(value) {
      this.$emit('change', value);
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep .custom-control-label {
  @include font-size(14px);
}
</style>
