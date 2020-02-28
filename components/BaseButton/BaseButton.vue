<script>
/**
 * Wrapper for `b-button` component from [Bootstrap Vue](https://bootstrap-vue.js.org/docs/components/button).
 */
export default {
  name: 'BaseButton',
  functional: true,
  props: {
    /**
     * Applies one of the Bootstrap theme color variants to the component. Can use `transparent` for no background color.
     */
    variant: {
      type: String,
      default: 'secondary',
    },
    /**
     * Set the size of the component's appearance. 'sm', 'md' (default), or 'lg'
     */
    size: {
      type: String,
      default: 'md',
      validator(value) {
        return ['sm', 'md', 'lg'].includes(value);
      },
    },
    /**
     * Removes default padding from button.
     */
    noPadding: {
      type: Boolean,
      default: false,
    },
    /**
     * 	Denotes the target URL of the link for standard a links
     */
    href: {
      type: String,
    },
    /**
     * 	router-link prop: Denotes the target route of the link. When clicked, the value of the to prop will be passed to router.push() internally, so the value can be either a string or a Location descriptor object.
     */
    to: {
      type: [String, Object],
    },
    /**
     * The value to set the button's 'type' attribute to. Can be one of 'button', 'submit', or 'reset'
     */
    type: {
      type: String,
      default: 'button',
    },
    /**
     * router-link prop: Specify which tag to render, and it will still listen to click events for navigation. 'router-tag' translates to the tag prop on the final rendered router-link. Typically you should use the default value.
     */
    routerTag: {
      type: String,
      default: 'a',
    },
    /**
     * Renders a 100% width button (expands to the width of it's parent container).
     */
    block: {
      type: Boolean,
      default: false,
    },
    /**
     * router-link prop: Specify the event that triggers the link. In most cases you should leave this as the default
     */
    event: {
      type: String,
      default: 'click',
    },
    /**
     * When set to 'true', disables the component's functionality and places it in a disabled state
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * 	When set to 'true', places the component in the active state with active styling
     */
    active: {
      type: Boolean,
      default: false,
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
     * Weight of the heading.
     * `light, normal, semi-bold, bold`
     */
    weight: {
      type: String,
      default: 'semi-bold',
      validator: (value) => {
        return ['light', 'normal', 'semi-bold', 'bold'].includes(value);
      },
    },
  },
  render(h, { data, children, props }) {
    const { noPadding, iconOn, weight } = props;
    return h(
      'b-button',
      {
        ...data,
        attrs: props,
        class: [
          { 'p-0': noPadding, 'btn-icon-left': iconOn === 'left', 'btn-icon-right': iconOn === 'right' },
          `font-weight-${weight}`,
        ],
      },
      children
    );
  },
};
</script>

<style lang="scss" scoped>
.btn-icon-left {
  ::v-deep {
    svg {
      margin-right: spacer(1);
    }
  }
}

.btn-icon-right {
  ::v-deep {
    svg {
      margin-left: spacer(1);
    }
  }
}
</style>
