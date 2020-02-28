import BaseBadge from './BaseBadge';

export default {
  title: 'BaseBadge',
  component: BaseBadge,
};

export const reference = () => ({
  components: { BaseBadge },
  template: `
    <div class="p-5">
      <base-badge class="mr-3" variant="primary">58%</base-badge>
      <base-badge class="mr-3" variant="secondary">234</base-badge>
      <base-badge class="mr-3" variant="tertiary">1,259</base-badge>
      <base-badge class="mr-3" variant="accent">100%</base-badge>

      <base-heading class="mt-5 d-flex align-items-center" variant="h4">Heading with Badge <base-badge class="ml-3" variant="primary">4</base-badge></base-heading>
    </div>
  `,
});
