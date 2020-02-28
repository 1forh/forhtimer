import BaseTextarea from './BaseTextarea';

export default {
  title: 'BaseTextarea',
  component: BaseTextarea,
};

export const reference = () => ({
  components: { BaseTextarea },
  template: `
    <div class="p-5">
      <base-textarea
        v-model="inputData"
        placeholder="Type here..."
        class="mb-4"
      />

      <base-code>{{ inputData }}</base-code>
    </div>
  `,
  data() {
    return {
      inputData: null,
    };
  },
});
