<template>
  <p :class="['paragraph', `font-weight-${weight}`, color ? `text-${color}` : '', `paragraph--${size}`]">
    <slot />
  </p>
</template>

<script>
/**
 * Used to display text in paragraph tags.
 */
export default {
  name: 'BaseParagraph',
  props: {
    /**
     * Weight of the text.
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
     * Size of the text. `sm, md, lg`
     */
    size: {
      type: String,
      default: 'md',
      validator: (value) => {
        return ['sm', 'md', 'lg'].includes(value);
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

<style lang="scss" scoped>
.paragraph--lg {
  @include font-size(20px);
  line-height: 1.6;
}

.paragraph--md {
  @include font-size(14px);
  line-height: 1.7;
}

.paragraph--sm {
  @include font-size(12px);
  line-height: 1.75;
}
</style>
