import BaseCheckbox from './BaseCheckbox';

export default {
  title: 'BaseCheckbox',
  component: BaseCheckbox,
};

export const reference = () => ({
  components: { BaseCheckbox },
  template: `
    <div class="p-5">
      <base-checkbox v-model="checked">
        Check this box out
      </base-checkbox>
      <base-code class="my-4">{{ checked }}</base-code>

      <base-checkbox v-model="checkedTwo" :value="1" :unchecked-value="0">
        Check this box out
      </base-checkbox>
      <base-code class="my-4">{{ checkedTwo }}</base-code>
    </div>
  `,
  data() {
    return {
      checked: false,
      checkedTwo: 0,
    };
  },
});
