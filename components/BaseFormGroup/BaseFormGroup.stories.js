import BaseFormGroup from './BaseFormGroup';
import BaseInput from '../BaseInput/BaseInput';

export default {
  title: 'BaseFormGroup',
  component: BaseFormGroup,
};

export const reference = () => ({
  components: { BaseFormGroup, BaseInput },
  template: `
    <div class="p-5">
      <base-form-group id="example-group" label="First Name" label-for="example-input" class="mb-4">
        <base-input id="example-input" />
      </base-form-group>

      <base-form-group label="Last Name" description="Usually the second name in your full name." class="mb-4">
        <base-input />
      </base-form-group>
    </div>
  `,
});
