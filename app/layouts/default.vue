<script setup lang="ts">

const {closePopup} = usePopupController()

</script>

<template>
  <div @keyup.esc="closePopup" class="bg-layout">
    <header v-scroll>
      <Header></Header>
    </header>
    <slot></slot>
  </div>
</template>

<style scoped>

  .bg-layout {
    width: 100%;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
  }

  header {
    padding: 10px 0 0;
    transition: all 0.4s ease;
    align-items: center;
  }

  .el-scroll {
    padding: 10px 0;
    top: 0;
    position: sticky;
    width: 100%;
    transition: all 0.4s ease;
    background: RGBA(49, 27, 146, 0.4);
    background: linear-gradient(180deg,rgba(49, 27, 146, 0.6) 0%, rgba(48, 11, 214, 0.2) 100%);
    backdrop-filter: blur(7px);
    border-radius: 0 0 50px 50px;
    z-index: 20;
  }

</style>