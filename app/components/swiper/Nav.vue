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

const route = useRoute()

let currentRoute = useState<string | undefined>(() => "")

watch(() => route.path, (newPath) => {
  currentRoute.value = newPath.split('/').pop();
}, {immediate: true})

</script>

<template>
  <section class="navigate">
    <ClientOnly>
      <swiper-container ref="navigate" :init="true">
        <swiper-slide>
          <NuxtLink :class="{ active: currentRoute === 'all' }" class="nav-link" to="/watch/all">
            All channels
          </NuxtLink>
        </swiper-slide>
        <swiper-slide>
          <NuxtLink :class="{ active: currentRoute === '3D' }" class="nav-link" to="/watch/3D">
            3D
          </NuxtLink>
        </swiper-slide>
        <swiper-slide>
          <NuxtLink :class="{ active: currentRoute === '2D' }" class="nav-link" to="/watch/2D">
            2D
          </NuxtLink>
        </swiper-slide>
        <swiper-slide>
          <NuxtLink :class="{ active: currentRoute === 'characters' }" class="nav-link" to="/watch/characters">
            Characters
          </NuxtLink>
        </swiper-slide>
        <swiper-slide>
          <NuxtLink :class="{ active: currentRoute === 'models' }" class="nav-link" to="/watch/models">
            Models
          </NuxtLink>
        </swiper-slide>
        <swiper-slide>
          <NuxtLink :class="{ active: currentRoute === 'fan-art' }" class="nav-link" to="/watch/fan-art">
            Fan art
          </NuxtLink>
        </swiper-slide>
        <swiper-slide>
          <NuxtLink :class="{ active: currentRoute === 'environment' }" class="nav-link" to="/watch/environment">
            Environment
          </NuxtLink>
        </swiper-slide>
        <swiper-slide>
          <NuxtLink :class="{ active: currentRoute === 'anatomy' }" class="nav-link" to="/watch/anatomy">
            Anatomy
          </NuxtLink>
        </swiper-slide>
        <swiper-slide>
          <NuxtLink :class="{ active: currentRoute === 'fantasy' }" class="nav-link" to="/watch/fantasy">
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
  background: RGBA( 0,  0,  0, 0.98);
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

  .nav-link {
    font-size: 12px;
  }

}

</style>