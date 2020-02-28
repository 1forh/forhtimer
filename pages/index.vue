<template>
  <div>
    <h1 v-balance-text>home page</h1>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Home',
      meta: [{ hid: 'description', name: 'description', content: 'This is an example description for the home page.' }],
    };
  },
};
</script>

<style lang="scss" scoped></style>
