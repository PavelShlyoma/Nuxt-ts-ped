<script setup lang="ts">

</script>

<template>
  <div class="bg-layout">
    <Header></Header>
    <Transition name="slide-fade">
      <slot></slot>
    </Transition>
  </div>
</template>

<style scoped>

  .bg-layout {
    width: 100%;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .slide-fade-enter-active {
    transition: all 0.3s ease-out;
  }

  .slide-fade-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
  }

</style>