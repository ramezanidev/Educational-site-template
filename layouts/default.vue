<template>
  <v-app>
    <Header />
    <transition @enter="scrollTop" name="fade" mode="in-out">
      <Nuxt />
    </transition>
    <Footer />
  </v-app>
</template>

<script>
export default {
  methods: {
    scrollTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: 700ms;
}
.fade-enter {
  opacity: 0;
  transform: translateX(15px);
}
.fade-leave-to {
  transform: translateX(15px);
  opacity: 0;
}
</style>