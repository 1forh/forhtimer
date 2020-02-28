<template>
  <b-form-group :id="id" :description="description" :label="label" :label-for="labelFor">
    <slot />
  </b-form-group>
</template>

<script>
import { BFormGroup } from 'bootstrap-vue';

/**
 * Wrapper for `b-form-group` component from [Bootstrap Vue](https://bootstrap-vue.js.org/docs/components/form-group).
 */
export default {
  name: 'BaseFormGroup',
  components: {
    BFormGroup,
  },
  props: {
    /**
     * 	Used to set the 'id' attribute on the rendered content, and used as the base to generate any additional element IDs as needed.
     */
    id: {
      type: String,
    },
    /**
     * Text to place in the help text area of the form group.
     */
    description: {
      type: String,
    },
    /**
     * Text to place in the label/legend of the form group
     */
    label: {
      type: String,
    },
    /**
     * 	Set to the ID of the singular form-control in the form-group. Do not set a value if there is more than one form control in the group.
     */
    labelFor: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped></style>
