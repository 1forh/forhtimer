import BaseIcon from './BaseIcon';

export default {
  title: 'BaseIcon',
  component: BaseIcon,
};

export const Icons = () => ({
  components: { BaseIcon },
  template: `
    <div class="p-5 d-flex flex-wrap">
      <div v-for="(icon, index) in icons" :key="index" class="mr-3 text-center">
        <div class="mb-2">{{ icon[1] }}</div>
        <base-icon :icon="icon" size="2x" />
      </div>
    </div>
  `,
  data() {
    return {
      icons: [
        ['fas', 'plus'],
        ['fas', 'search'],
        ['fas', 'arrows-alt'],
      ],
    };
  },
});

export const Sizes = () => ({
  components: { BaseIcon },
  template: `
    <div class="p-5 d-flex align-items-center">
      <div v-for="(size, index) in sizes" :key="index" class="mr-3 text-center">
        <div class="mb-2">{{ size }}</div>
        <base-icon :size="size" :icon="['fas', 'search']" />
      </div>
    </div>
  `,
  data() {
    return {
      sizes: ['xs', 'sm', 'lg', '2x', '3x', '5x', '7x', '10x'],
    };
  },
});
