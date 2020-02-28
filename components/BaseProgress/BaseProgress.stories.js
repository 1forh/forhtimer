import BaseProgress from './BaseProgress';

export default {
  title: 'BaseProgress',
  component: BaseProgress,
};

export const reference = () => ({
  components: { BaseProgress },
  template: `
    <div class="p-5">
      <base-progress class="mb-2" />
      <base-progress :value="27" class="mb-2" />
      <base-progress :value="75" variant="accent" class="mb-2" />
    </div>
  `,
});
