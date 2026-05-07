<script setup lang="ts">
const navigate = ref(null)
const swiper = useSwiper(navigate, {
  effect: 'creative',
  loop: true,
  slidesPerView: 8,
  creativeEffect: {
    prev: {
      translate: [0, 0, -1500],
    },
    next: {
      translate: [0, 0, -1500],
    },
  },
  breakpoints: {
    1200: {
      slidesPerView: 8,
    },
    760: {
      slidesPerView: 5,
    },
    1: {
      slidesPerView: 3,
    }
  }
})

</script>

<template>
  <section class="navigate">
    <ClientOnly>
      <swiper-container ref="navigate" :init="true">
        <swiper-slide>
          <NuxtLink class="nav-link active" to="/">
            All channels
          </NuxtLink>
        </swiper-slide>
        <swiper-slide>
          <NuxtLink class="nav-link" to="/">
            3D
          </NuxtLink>
        </swiper-slide>
        <swiper-slide>
          <NuxtLink class="nav-link" to="/">
            2D
          </NuxtLink>
        </swiper-slide>
        <swiper-slide>
          <NuxtLink class="nav-link" to="/">
            Character
          </NuxtLink>
        </swiper-slide>
        <swiper-slide>
          <NuxtLink class="nav-link" to="/">
            Models
          </NuxtLink>
        </swiper-slide>
        <swiper-slide>
          <NuxtLink class="nav-link" to="/">
            Fan art
          </NuxtLink>
        </swiper-slide>
        <swiper-slide>
          <NuxtLink class="nav-link" to="/">
            Environmental
          </NuxtLink>
        </swiper-slide>
        <swiper-slide>
          <NuxtLink class="nav-link" to="/">
            Anatomy
          </NuxtLink>
        </swiper-slide>
        <swiper-slide>
          <NuxtLink class="nav-link" to="/">
            Fantasy
          </NuxtLink>
        </swiper-slide>
      </swiper-container>
    </ClientOnly>

    <button class="chevron-left" @click="swiper.prev()">
      <font-awesome  icon="fa fa-chevron-left"></font-awesome>
    </button>

    <button class="chevron-right" @click="swiper.next()">
      <font-awesome  icon="fa fa-chevron-right"></font-awesome>
    </button>

  </section>
</template>

<style scoped>

swiper-slide {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  transform: none;
}

.navigate {
  padding: 4px 30px;
  position: relative;
  width: 80%;
  margin: 118px auto 0;
  background: #B2EBF2;
  background: linear-gradient(170deg,rgba(178, 235, 242, 1) 0%, rgba(209, 196, 233, 1) 65%, rgba(248, 187, 208, 1) 100%);
  border-radius: 32px;
}

.nav-link {
  text-decoration: none;
  padding: 4px 12px;
  color: black;
  opacity: 0.87;
  border-radius: 20px;
  transition: all 0.2s ease-in-out;
}

.nav-link:hover  {
  color: white;
  background-color: RGBA( 0,  0,  0, 0.98);
}

.nav-link.active {
  color: white;
  background-color: RGBA( 0,  0,  0, 1);
}

.chevron-left {
  position: absolute;
  top: 30%;
  left: 1%;
}

.chevron-right {
  position: absolute;
  top: 30%;
  right: 1%;
}

@media (max-width: 768px) {

  .navigate {
    margin: 15px auto;
  }

}

</style>