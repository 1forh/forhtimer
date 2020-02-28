<template>
  <component :is="type" :class="['base-text', `base-text--${variant}`, color ? `text-${color}` : '', `base-text--${size}`]"> <slot /> </component>
</template>

<script>
/**
 * Text style enhances text with additional visual meaning. For example, using
 * disabled text to de-emphasize it from its surrounding text.
 */
export default {
  name: 'BaseText',
  props: {
    /**
     * Style variant to give additional meaning.
     * `default, disabled, strong, positive, negative`
     */
    variant: {
      type: String,
      default: 'default',
      validator: (value) => {
        const accepted = [
          'default',
          'strong',
          'deleted',
          'inaccurate',
          'addition',
          'underline',
          'small',
          'italicized',
          'highlight',
          'voice',
        ];

        if (accepted.includes(value)) {
          return true
        } else {
          throw Error(`${value} is not a valid property value for BaseText.variant`)
        }
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
  computed: {
    /**
     * The html element used for the text style.
     * `span, em, i, strong`
     */
    type: function() {
      switch (this.variant) {
        case 'highlight-important':
          return 'mark';
        case 'strong':
          return 'strong';
        case 'deleted':
          return 'del';
        case 'inaccurate':
          return 's';
        case 'addition':
          return 'ins';
        case 'underline':
          return 'u';
        case 'small':
          return 'small';
        case 'italicized':
          return 'em';
        case 'highlight':
          return 'b';
        case 'voice':
          return 'i';
        default:
          return 'span';
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.base-text--lg {
  @include font-size(20px);
  line-height: 1.6;
}

.base-text--md {
  @include font-size(14px);
  line-height: 1.7;
}

.base-text--sm {
  @include font-size(12px);
  line-height: 1.75;
}
</style>
