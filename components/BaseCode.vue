<template>
  <pre :class="[`language-${language}`]">
    <code :class="[`language-${language}`]">
      <slot />
    </code>
  </pre>
</template>

<script>
import Prism from '@/helpers/prism';

/**
 * Used to display code examples.
 */
export default {
  name: 'BaseCode',
  props: {
    /**
     * Determines look of syntax highlighting.
     */
    language: {
      type: String,
      default: 'markup',
    },
    /**
     * Determines whether or not to use syntax highlighting.
     */
    highlight: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    if (this.highlight) {
      Prism.highlightElement(this.$el);
    }
  },
};
</script>

<style lang="scss" scoped>
pre[class*='language-'] {
  margin: 0;
}

code[class*='language-'] {
  font-size: 1rem;
}
</style>
