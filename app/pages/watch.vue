<script setup lang="ts">

</script>

<template>
  <section class="banners">
    <SwiperBanners ></SwiperBanners>
  </section>
  <SwiperNav></SwiperNav>
</template>

<style scoped>

.banners {
  display: block;
}

@media (max-width: 768px) {
  .banners {
    display: none;
  }
}

</style>