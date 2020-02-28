<template>
  <b-badge :variant="variant" pill>
    <slot />
  </b-badge>
</template>

<script>
import { BBadge } from 'bootstrap-vue';

/**
 * Small and adaptive tag for adding context to just about any content.
 * Badges scale to match the size of the immediate parent element by using relative font sizing and em units.
 */
export default {
  name: 'BaseBadge',
  components: {
    BBadge,
  },
  props: {
    /**
     * Applies one of the Bootstrap theme color variants to the component
     */
    variant: {
      type: String,
      default: 'accent',
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
