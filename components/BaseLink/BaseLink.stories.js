import BaseLink from './BaseLink';
import BaseIcon from '../BaseIcon/BaseIcon';

export default {
  title: 'BaseLink',
  component: BaseLink,
};

export const reference = () => ({
  components: { BaseLink, BaseIcon },
  template: `
    <div class="p-5">
      <div v-for="(variant, index) in variants" :key="index" class="d-flex flex-column mb-4">
        <base-link :variant="variant" class="mb-2">Link - {{ variant }}</base-link>
        <base-link href="#" :variant="variant" class="mb-2">Anchor - {{ variant }}</base-link>
        <base-link to="/" :variant="variant" class="mb-2">Nuxt Link - {{ variant }}</base-link>
        <base-link href="https://google.com" target="_blank" :variant="variant" class="mb-2">External Link - {{ variant }}</base-link>
        <base-link :disabled="true" :variant="variant" class="mb-2">Disabled Link - {{ variant }}</base-link>
        <base-link text-decoration="underline" :variant="variant" class="mb-2">Underlined Link - {{ variant }}</base-link>

        <base-link :variant="variant" icon-on="right" class="mb-2">
          Link with Icon
          <base-icon :icon="['fas', 'plus']" size="sm" />
        </base-link>

        <base-link :variant="variant" icon-on="left" class="mb-2">
          <base-icon :icon="['fas', 'plus']" size="sm" />
          Link with Icon
        </base-link>

        <base-link :variant="variant" size="sm" class="mb-2">Small Link</base-link>
        <base-link :variant="variant" size="md" class="mb-2">Medium/Default Link</base-link>
        <base-link :variant="variant" size="lg" class="mb-2">Large Link</base-link>

        <base-link :variant="variant" weight="light" class="mb-2">Light Weight Link</base-link>
        <base-link :variant="variant" weight="normal" class="mb-2">Medium Weight Link</base-link>
        <base-link :variant="variant" weight="semi-bold" class="mb-2">Semi-Bold Weight Link</base-link>
        <base-link :variant="variant" weight="bold" class="mb-2">Bold Weight Link</base-link>

        <div>
          <hr/>
        </div>

      </div>
    </div>
  `,
  data() {
    return {
      variants: ['primary', 'secondary', 'accent'],
    };
  },
});
