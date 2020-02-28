<script>
/**
 * Wrapper for `b-form` component from [Bootstrap Vue](https://bootstrap-vue.js.org/docs/components/form).
 */
export default {
  name: 'BaseForm',
  functional: true,
  render(h, { data, children, props }) {
    return h('b-form', { ...data, attrs: props }, children);
  },
};
</script>

<style lang="scss" scoped></style>
