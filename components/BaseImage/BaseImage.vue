<template>
  <b-img-lazy :src="src" :fluid="fluid" :alt="alt" :class="['base-image', { rounded: rounded }]" v-if="lazy" />
  <b-img :src="src" :fluid="fluid" :alt="alt" :class="['base-image', { rounded: rounded }]" v-else />
</template>

<script>
import { BImg, BImgLazy } from 'bootstrap-vue';

/**
 * Wrapper for `b-img, b-img-lazy` components from [Bootstrap Vue](https://bootstrap-vue.js.org/docs/components/image).
 */
export default {
  name: 'BaseImage',
  components: { BImg, BImgLazy },
  props: {
    /**
     * URL to set for the 'src' attribute.
     */
    src: {
      type: String,
      required: true,
    },
    /**
     * Value to set for the 'alt' attribute.
     */
    alt: {
      type: String,
    },
    /**
     * Lazy load images as they are scrolled into view.
     */
    lazy: {
      type: Boolean,
    },
    /**
     * Makes the image responsive. The image will shrink as needed or grow up the the image's native width.
     */
    fluid: {
      type: Boolean,
      default: true,
    },
    /**
     * Determines whether or not the corners of the image are rounded.
     */
    rounded: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped></style>
