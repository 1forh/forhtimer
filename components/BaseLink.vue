<template>
  <b-link
    :to="to"
    :href="href"
    :disabled="disabled"
    :target="target"
    :class="[
      'base-link',
      `text-${variant}`,
      `font-weight-${weight}`,
      {
        'd-block w-100': block,
        'text-decoration-none': textDecoration === 'none',
        'text-decoration-underline': textDecoration === 'underline',
        'base-link-icon-left d-inline-flex align-items-center': iconOn === 'left',
        'base-link-icon-right d-inline-flex align-items-center': iconOn === 'right',
        'btn-sm': size === 'sm',
        'btn-lg': size === 'lg',
      },
    ]">
    <slot />
  </b-link>
</template>

<script>
/**
 * Used to display an anchor, button, or nuxt-link with link-like styles.
 */
export default {
  name: 'BaseLink',
  props: {
    /**
     * 	Denotes the target URL of the link for standard a links.
     */
    href: {
      type: String,
    },
    /**
     * nuxt-link prop: Denotes the target route of the link. When clicked, the value of the to prop will be passed to router.push() internally, so the value can be either a string or a Location descriptor object.
     */
    to: {
      type: String,
    },
    /**
     * Applies one of the Bootstrap theme color variants to the component. `primary, secondary, accent`
     */
    variant: {
      type: String,
      default: 'secondary',
    },
    /**
     * When set to 'true', disables the component's functionality and places it in a disabled state.
     */
    disabled: {
      type: Boolean,
    },
    /**
     * Determines what type of text-decoration to use. `underline, none`
     */
    textDecoration: {
      type: String,
      default: 'none',
      validator(value) {
        return ['underline', 'none'];
      },
    },
    /**
     * Applies additional styles based on which side of text icon is placed. `left, right`
     */
    iconOn: {
      type: String,
      validator(value) {
        return ['left', 'right'].includes(value);
      },
    },
    /**
     * Set the size of the component's appearance. 'xs', 'sm', 'md' (default), or 'lg'
     */
    size: {
      type: String,
      default: 'md',
      validator(value) {
        return ['sm', 'md', 'lg'].includes(value);
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
     * Sets the 'target' attribute on the rendered link. `_self, `_blank`
     */
    target: {
      type: String,
      default: '_self',
      validator(value) {
        return ['_self', '_blank'].includes(value);
      },
    },
    /**
     * Renders a 100% width button (expands to the width of its parent container)
     */
    block: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.base-link {
  @include reset-button;

  &:hover,
  &:focus,
  &:active,
  &.active {
    text-decoration: none;
  }

  &.disabled {
    opacity: 0.5;
    pointer-events: none;
  }
}

@each $color, $value in $theme-colors {
  .base-link-#{$color} {
    color: $value;

    &:hover,
    &:focus,
    &:active,
    &.active {
      color: darken($value, 10%);
    }
  }
}

.base-link-icon-left {
  ::v-deep {
    svg {
      margin-right: spacer(2);
    }
  }
}

.base-link-icon-right {
  ::v-deep {
    svg {
      margin-left: spacer(2);
    }
  }
}
</style>
