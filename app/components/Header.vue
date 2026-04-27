<script setup lang="ts">

const {isOpenLogin, toggleLoginOpen, isOpenReg, toggleRegOpen} = usePopupController()

</script>

<template>
  <header>
    <NuxtLink to="/" class="nav-main">
      <img class="nav-main-icon" src="~/../public/icons/header-logo.png" alt="1">
    </NuxtLink>
    <div class="nav-container">
      <NuxtLink to="/watch" class="nav--go">Watch</NuxtLink>
      <div class="nav--separator"></div>
      <NuxtLink to="/learning" class="nav--go">Learning</NuxtLink>
      <div class="nav--separator"></div>
      <NuxtLink to="/shop" class="nav--go">Shop</NuxtLink>
      <div class="nav--separator"></div>
      <NuxtLink to="/job" class="nav--go">Job</NuxtLink>
      <div class="nav--separator"></div>
      <NuxtLink to="/hire" class="nav--go">Hire</NuxtLink>
    </div>
    <div class="nav-button-container">
      <button @click="toggleLoginOpen" class="nav-button--go">
        SIGN IN
      </button>
      <button @click="toggleRegOpen" class="nav-button--go">
        SIGN UP
      </button>
      <font-awesome class="cog--custom" icon="fa fa-cog"></font-awesome>
    </div>
    <teleport to="body">
      <transition name="slide-fade">
        <AuthLogin v-if="isOpenLogin">
        </AuthLogin>
      </transition>
      <transition name="slide-fade">
        <AuthRegister v-if="isOpenReg">
        </AuthRegister>
      </transition>
    </teleport>
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
  text-decoration: none;
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
  max-width: 255px;
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
  text-decoration: none;
}

.nav-button--go:hover {
  color: #651FFF;
  background-color: #D1C4E9;
  border-radius: 40px;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}

</style>