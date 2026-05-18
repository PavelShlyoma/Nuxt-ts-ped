<!-- components/ScrollWrapper.vue -->
<template>
  <div ref="scrollElement" :class="{ 'el-scroll': isScrolledUp }">
    <slot />
  </div>
</template>

<script setup lang="ts">
const scrollElement = ref<HTMLElement | null>(null);
const isScrolledUp = ref(false);
let lastScrollTop = 0;
let scrollListener: (() => void) | null = null;

// Функция throttle
function throttle(func: () => void, wait: number): () => void {
  let inThrottle = false;
  return function() {
    if (!inThrottle) {
      func();
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, wait);
    }
  };
}

// Обработчик скролла
const handleScroll = throttle(() => {
  if (typeof window === 'undefined') return;

  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop < 45) {
    isScrolledUp.value = false;
  } else if (scrollTop > lastScrollTop) {
    isScrolledUp.value = false;
  } else {
    isScrolledUp.value = true;
  }

  lastScrollTop = scrollTop;
}, 200);

// Инициализация на клиенте
onMounted(() => {
  if (process.client) {
    scrollListener = handleScroll;
    window.addEventListener('scroll', handleScroll);
    console.log('✅ Scroll effect initialized');
  }
});

// Очистка
onUnmounted(() => {
  if (scrollListener && process.client) {
    window.removeEventListener('scroll', scrollListener);
  }
});
</script>

<style scoped>
</style>