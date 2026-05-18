<script setup lang="ts">

onMounted(async () => {
  await navigateTo('/watch/all');
})

</script>

<template>
  <section data-aos="fade-up" class="banners">
    <SwiperBanners ></SwiperBanners>
  </section>
  <SwiperNav data-aos="fade-up"></SwiperNav>
  <NuxtPage>
  </NuxtPage>
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