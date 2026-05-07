<script setup lang="ts">

</script>

<template>
 <ul class="nav-menu">
   <NuxtLink to="/watch" class="nav-menu--go">Watch</NuxtLink>
   <NuxtLink to="/learning" class="nav-menu--go">Learning</NuxtLink>
   <NuxtLink to="/shop" class="nav-menu--go">Shop</NuxtLink>
   <NuxtLink to="/job" class="nav-menu--go">Job</NuxtLink>
   <NuxtLink to="/hire" class="nav-menu--go">Hire</NuxtLink>
 </ul>
</template>

<style scoped>

@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateY(-50%);
  }
  100% {
    opacity: 1;
    transform: translatey(0);
  }
}

.nav-menu {
  animation: slideIn .5s;
  display: flex;
  box-sizing: border-box;
  padding: 15px;
  flex-direction: column;
  gap: 15px;
  position: fixed;
  top: 63px;
  left: 0;
  margin: 0 auto;
  width: 100%;
  transition: all 0.4s ease;
  background: RGBA(49, 27, 146, 0.4);
  background: linear-gradient(180deg,rgba(49, 27, 146, 0.6) 0%, rgba(48, 11, 214, 0.2) 100%);
  backdrop-filter: blur(7px);
  border-radius: 50px;
}

.nav-menu--go {
  cursor: pointer;
  color: #FFFFFF;
  font-size: 15px;
  font-weight: 400;
  padding: 0 10px 0;
  transition: ease-in-out .1s;
  text-decoration: none;
}

.nav-menu--go:hover {
  color: #D1C4E9;
  position: relative;
}

</style>