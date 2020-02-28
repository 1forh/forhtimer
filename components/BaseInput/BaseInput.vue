<template>
  <b-form-input
    @input="onInput"
    :id="id"
    :value="value"
    :placeholder="placeholder"
    :disabled="disabled"
    :required="required"
    :type="type"
  />
</template>

<script>
import { BFormInput } from 'bootstrap-vue';

/**
 * Wrapper for `b-form-input` component from [Bootstrap Vue](https://bootstrap-vue.js.org/docs/components/form-input).
 */
export default {
  name: 'BaseInput',
  components: { BFormInput },
  props: {
    /**
     * The type of input to render. See the Bootstrap Vue docs for supported types.
     */
    type: {
      type: String,
      default: 'text',
      validator(type) {
        return ['text', 'number', 'email', 'password', 'search', 'tel', 'url'].includes(type);
      },
    },
    /**
     * Used to set the 'id' attribute on the rendered content, and used as the base to generate any additional element IDs as needed
     */
    id: {
      type: String,
    },
    /**
     * 	The current value of the input. Result will always be a string, except when the 'number' prop is used.
     */
    value: {
      type: [Number, String],
    },
    /**
     * 	When set to 'true', disables the component's functionality and places it in a disabled state.
     */
    disabled: {
      type: Boolean,
    },
    /**
     * 	Adds the 'required' attribute to the form control
     */
    required: {
      type: Boolean,
      default: false,
    },
    /**
     * 	Sets the 'placeholder' attribute value on the form control.
     */
    placeholder: {
      type: String,
    },
  },
  methods: {
    onInput(value) {
      this.$emit('input', value);
    },
  },
};
</script>

<style lang="scss" scoped></style>
