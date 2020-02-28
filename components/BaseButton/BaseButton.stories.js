import { action } from '@storybook/addon-actions';

import BaseButton from './BaseButton';
import BaseIcon from '../BaseIcon/BaseIcon';

export default {
  title: 'BaseButton',
  component: BaseButton,
};

const buttonSizes = ['md', 'lg'];
const buttonVariants = [
  'primary',
  'secondary',
  'accent',
  'success',
  'outline-primary',
  'outline-secondary',
  'outline-accent',
];

export const reference = () => ({
  components: { BaseButton, BaseIcon },
  template: `
    <div class="p-5">
      <div v-for="(size, sizeIndex) in sizes" :key="sizeIndex" class="mb-4">
        <base-button
          v-for="(variant, index) in variants"
          href="#"
          :key="index"
          :variant="variant"
          :size="size" class="mr-3 mb-2"
          @click="action"
        >
          {{ variant }}-{{ size }}
        </base-button>
      </div>

      <base-button no-padding class="mb-4">No Padding</base-button>
      <base-button to="/" class="mb-4">Anchor Link</base-button>
      <base-button href="https://google.com" target="_blank" class="mb-4">External Link</base-button>
      <base-button to="/" block class="mb-4">Full Width Button</base-button>
      <base-button to="/" variant="primary" active class="mb-4">Active Button</base-button>
      <base-button to="/" variant="secondary" active class="mb-4">Active Button</base-button>
      <base-button to="/" variant="tertiary" active class="mb-4">Active Button</base-button>
      <base-button to="/" variant="accent" active class="mb-4">Active Button</base-button>

      <div>
        <base-button to="/" variant="accent" icon-on="right" class="mb-4">
          Button with icon
          <base-icon :icon="['fas', 'plus']" size="sm" />
        </base-button>
        <base-button to="/" variant="accent" icon-on="left" class="mb-4">
          <base-icon :icon="['fas', 'plus']" size="sm" />
          Button with icon
        </base-button>
      </div>
    </div>
  `,
  data() {
    return {
      variants: buttonVariants,
      sizes: buttonSizes,
    };
  },
  methods: { action: action('clicked') },
});
