<template>
  <div>
    <b-form-textarea
      @input="onInput"
      :id="id"
      :value="value"
      :placeholder="placeholder"
      :rows="rows"
      :max-rows="maxRows"
    />
  </div>
</template>

<script>
import { BFormTextarea } from 'bootstrap-vue';

/**
 * Wrapper for `b-form-textarea` component from [Bootstrap Vue](https://bootstrap-vue.js.org/docs/components/form-textarea).
 */
export default {
  name: 'BaseTextarea',
  components: {
    BFormTextarea,
  },
  props: {
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
     * The minimum number of rows to display. Must be a value greater than 1
     */
    rows: {
      type: [Number, String],
      default: 2,
    },
    /**
     * The maximum number of rows to show. When provided, the textarea will grow (or shrink) to fit the content up to maximum rows
     */
    maxRows: {
      type: [Number, String],
    },
    /**
     * 	Sets the 'placeholder' attribute value on the form control
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

<style lang="scss" scoped>
</style>
