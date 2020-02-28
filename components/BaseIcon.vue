<template>
  <font-awesome-icon :icon="icon" :size="size" :fixed-width="fixedWidth" :class="[`${color ? `text-${color}` : ''}`]" />
</template>

<script>
/**
 * Wrapper for `font-awesome-icon` component from [vue-fontawesome](https://github.com/FortAwesome/vue-fontawesome).
 */
export default {
  name: 'BaseIcon',
  props: {
    /**
     * Example: ['fas', 'search']
     */
    icon: {
      type: Array,
      required: true,
    },
    /**
     * Set size of icon. [View documentation](https://fontawesome.com/how-to-use/on-the-web/styling/sizing-icons)
     */
    size: {
      type: String,
      validator(value) {
        return ['xs', 'sm', 'lg', '2x', '3x', '5x', '7x', '10x'].includes(value);
      },
    },
    /**
     * Color of the icon. All Bootstrap theme-colors are available.
     */
    color: {
      type: String,
    },
    /**
     * Adds a class of fa-fw on the HTML element referencing your icon to set one or more icons to the same fixed width.
     */
    fixedWidth: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped></style>
