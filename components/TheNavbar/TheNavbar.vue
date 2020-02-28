<template functional>
  <header class="bg-light p-3 d-flex justify-content-between">
    <strong>The Navbar</strong>
    <nav v-if="links">
      <nuxt-link v-for="(link, index) in links" :key="index" :to="link.to" class="ml-3">
        {{ link.text }}
      </nuxt-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'TheNavbar',
  props: {
    links: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped></style>
