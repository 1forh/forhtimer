import BaseCode from './BaseCode';

export default {
  title: 'BaseCode',
  component: BaseCode,
};

export const reference = () => ({
  components: { BaseCode },
  template: `
    <div class="p-5 w-50">
      <base-code language="javascript" highlight class="mb-4">
        // highlighted code
        const example = {
          key: 'value'
        };
      </base-code>
      <base-code language="javascript">
        // non-highlighted code
        const example = {
          key: 'value'
        };
      </base-code>
    </div>
  `,
});
