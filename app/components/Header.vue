<script setup lang="ts">

const {isOpenLogin, toggleLoginOpen, isOpenReg, toggleRegOpen, isMenuOpen, toggleMenu} = usePopupController()

</script>

<template>
  <div  class="nav-header">
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
        Sign in
      </button>
      <button @click="toggleRegOpen" class="nav-button--go">
        Sign up
      </button>
      <font-awesome @click="console.log()" class="cog--custom" icon="fa fa-cog"></font-awesome>
      <button @click="toggleMenu" class="nav-button-gamb-container">
        <div class="nav-button-gamb">
        </div>
      </button>
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
    <teleport to="body">
      <transition name="slide-fade">
        <MobileMenu class="menu-pos" v-if="isMenuOpen">
        </MobileMenu>
      </transition>
    </teleport>
  </div>
</template>

<style scoped>

.nav-header {
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 80%;
  justify-content: space-between;
}

.nav-main {
  display: flex;
  align-items: center;
}

.nav-main-icon {
  width: 40px;
  height: 40px;
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
  padding-left: 40px;
  max-width: calc(350px + 10%);
}

.cog--custom {
  cursor: pointer;
  color: #D1C4E9;
  width: 20px;
  height: 20px;
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
  font-size: 15px;
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
  max-width: 220px;
}

.nav-button--go {
  cursor: pointer;
  font-size: 14px;
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

.nav-button-gamb-container {
  display: none;
  width: 20px;
  height: 20px;
  position: relative;
}

.nav-button-gamb {
  width: 15px;
  height: 2px;
  background-color: white;
  border-radius: 2px;
}

.nav-button-gamb::before, .nav-button-gamb::after {
  content: '';
  background-color: white;
  height: 2px;
  border-radius: 2px;
  position: absolute;
}

.nav-button-gamb:hover, .nav-button-gamb:hover::before, .nav-button-gamb:hover::after {
  background-color: #D1C4E9;
}

.nav-button-gamb::before {
  width: 15px;
  top: 4px;
  right: -4px;
}

.nav-button-gamb::after {
  width: 15px;
  bottom: 4px;
  left: -6px;
}

.menu-pos {
  overflow: hidden;
}

@media (max-width: 768px) {
  .nav-container {
    display: none;
  }

  .nav-button-container {
    max-width: 230px;
  }

  .nav-button-gamb-container {
    display: flex;
    align-items: center;
  }
}

</style>