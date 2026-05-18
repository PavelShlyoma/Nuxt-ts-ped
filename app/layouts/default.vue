<script setup lang="ts">

import ClientOnlyScroll from "~/components/ClientOnlyScroll.vue";

const {closePopup} = usePopupController()

</script>

<template>
  <div @keyup.esc="closePopup" class="bg-layout">
    <Header></Header>
    <slot></slot>
  </div>
</template>

<style scoped>

  .bg-layout {
    width: 100%;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
  }

</style>