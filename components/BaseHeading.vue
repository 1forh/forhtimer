<template>
  <component :is="tag" :class="[variant, `font-weight-${weight}`, color ? `text-${color}` : '']">
    <slot />
  </component>
</template>

<script>
/**
 * Headings are typically used as the titles of each major section of a page in the interface. For example, templates generally use headings as their title. Heading element provides an option to change the level of the heading.
 */
export default {
  name: 'BaseHeading',
  props: {
    /**
     * The tag used for the heading.
     * `h1, h2, h3, h4, h5, h6`
     */
    tag: {
      type: String,
      default: 'h1',
      validator(value) {
        return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(value);
      },
    },
    /**
     * The style variant for the heading.
     * `h1, h2, h3, h4, h5, h6, display-1, display-2, display-3, display-4`
     */
    variant: {
      type: String,
      default: 'h1',
      validator: (value) => {
        return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'display-1', 'display-2', 'display-3', 'display-4'].includes(value);
      },
    },
    /**
     * Weight of the heading.
     * `light, normal, semi-bold, bold`
     */
    weight: {
      type: String,
      default: 'normal',
      validator: (value) => {
        return ['light', 'normal', 'semi-bold', 'bold'].includes(value);
      },
    },
    /**
     * Overrides text of color. All Bootstrap theme colors are available.
     */
    color: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped></style>
