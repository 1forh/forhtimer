<template>
  <div>
    <the-navbar />
    <main>
      <nuxt />
    </main>
  </div>
</template>

<script>
import TheNavbar from '~/components/TheNavbar/TheNavbar';

export default {
  components: {
    TheNavbar,
  },
};
</script>

<style lang="scss" scoped></style>
