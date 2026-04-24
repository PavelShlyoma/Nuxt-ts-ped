<script setup lang="ts">

</script>

<template>
  <header>
    <NuxtLink to="/" class="nav-main">
      <img class="nav-main-icon" src="~/../public/icons/header-logo.png" alt="1">
    </NuxtLink>
    <div class="nav-container">
      <nav class="nav--go">Watch</nav>
      <div class="nav--separator"></div>
      <nav class="nav--go">Learning</nav>
      <div class="nav--separator"></div>
      <nav class="nav--go">Shop</nav>
      <div class="nav--separator"></div>
      <nav class="nav--go">Job</nav>
      <div class="nav--separator"></div>
      <nav class="nav--go">Hire</nav>
    </div>
    <div class="nav-button-container">
      <button class="nav-button--go">LOGIN</button>
      <button class="nav-button--go">REGISTER</button>
      <font-awesome class="cog--custom" icon="fa fa-cog"></font-awesome>
    </div>
  </header>
</template>

<style scoped>

header {
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 30px 0 0;
  max-width: 90%;
  justify-content: space-between;
}

.nav-main {
  display: flex;
  align-items: center;
}

.nav-main-icon {
  cursor: pointer;
  transition: transform 4s linear;
  transform: rotate(0deg);
  will-change: transform;
}

.nav-main-icon:hover {
  transform: rotate(360deg);
  transition: transform 4s;

}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 630px;
}

.cog--custom {
  cursor: pointer;
  color: #D1C4E9;
  width: 30px;
  height: 30px;
  margin: 0 15px 0;
  transition: ease-in-out .1s;
}

.cog--custom:hover {
  color: #651FFF;
  opacity: 0.8;
}

.nav--go {
  cursor: pointer;
  color: #FFFFFF;
  font-size: 18px;
  font-weight: 400;
  padding: 0 10px 0;
  transition: ease-in-out .1s;
}

.nav--go:hover {
  color: #D1C4E9;
  position: relative;
}

.nav--go::after {
  display: none;
  position: absolute;
  bottom: -10px;
  left: 30%;
  content: "";
  background-color: #D1C4E9;
  width: 6px;
  height: 6px;
  border-radius: 50%;
}

.nav--go::before {
  display: none;
  position: absolute;
  bottom: -10px;
  left: calc(30% + 10px);
  content: "";
  background-color: #D1C4E9;
  width: 20%;
  height: 6px;
  border-radius: 4px;
}

.nav--go:hover::before, .nav--go:hover::after {
  display: block;
  animation: slideIn 0.5s;
}

@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateX(-300%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.nav--separator {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #D1C4E9;
}

.nav-button-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 250px;
}

.nav-button--go {
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  padding: 10px 15px;
  background: none;
  border: none;
  color: #fff;
  transition: ease-in-out .1s;
}

.nav-button--go:hover {
  color: #651FFF;
  background-color: #D1C4E9;
  border-radius: 40px;
}

</style>