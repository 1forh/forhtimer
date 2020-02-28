import BaseInput from './BaseInput';

export default {
  title: 'BaseInput',
  component: BaseInput,
};

export const reference = () => ({
  components: { BaseInput },
  template: `
    <div class="p-5">
      <base-input
        v-for="(type, index) in types" :key="index"
        v-model="inputData[type]"
        :placeholder="'Input example - ' + type"
        class="mb-4"
      />

      <base-code>{{ inputData }}</base-code>
    </div>
  `,
  data() {
    return {
      types: ['text', 'number', 'email', 'password', 'search', 'tel'],
      inputData: {},
    };
  },
});
