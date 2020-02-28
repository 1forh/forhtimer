import { action } from '@storybook/addon-actions';

import BaseForm from './BaseForm';
import BaseButton from '../BaseButton/BaseButton';
import BaseFormGroup from '../BaseFormGroup/BaseFormGroup';
import BaseInput from '../BaseInput/BaseInput';

export default {
  title: 'BaseForm',
  component: BaseForm,
};

export const reference = () => ({
  components: { BaseForm, BaseFormGroup, BaseInput, BaseButton },
  template: `
    <div class="p-5">
      <base-form @submit.prevent="submit" @reset="reset">
        <base-form-group id="example-group" label="First Name" label-for="example-input" class="mb-4">
          <base-input id="example-input" />
        </base-form-group>

        <base-form-group label="Last Name" description="Usually the second name in your full name." class="mb-4">
          <base-input />
        </base-form-group>

        <base-button type="submit" variant="primary">Submit</base-button>
        <base-button type="reset" variant="danger">Reset</base-button>
      </base-form>
    </div>
  `,
  methods: { submit: action('Form submitted!'), reset: action('Form reset!') },
});
