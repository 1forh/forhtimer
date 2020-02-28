<template>
  <b-progress :value="value" :max="max" :height="height" :animated="animated" :variant="variant" />
</template>

<script>
import { BProgress } from 'bootstrap-vue';

/**
 * Wrapper for `b-progress` component from [Bootstrap Vue](https://bootstrap-vue.js.org/docs/components/progress).
 */
export default {
  name: 'BaseProgress',
  components: {
    BProgress,
  },
  props: {
    /**
     * 	The current value of the progress bar.
     */
    value: {
      type: [Number, String],
      default: 0,
    },
    /**
     * Set the maximum value.
     */
    max: {
      type: [Number, String],
      default: 100,
    },
    /**
     * Override the default height by specifying a CSS height value (including units).
     */
    height: {
      type: String,
    },
    /**
     * Enable the animated background. Also automatically sets 'striped'.
     */
    animated: {
      type: Boolean,
      default: false,
    },
    /**
     * Applies one of the Bootstrap theme color variants to the component.
     */
    variant: {
      type: String,
      default: 'primary',
    },
  },
};
</script>

<style lang="scss" scoped></style>
