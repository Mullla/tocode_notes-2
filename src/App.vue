<template lang="pug">
.wrapper
  AppHeader

  .wrapper-content
    .container
      router-view

  AppFooter
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style lang="scss"></style>
