<script setup lang="ts">
const banners = ref(null)
const swiper = useSwiper(banners, {
  effect: 'creative',
  loop: true,
  slidesPerView: 1,
  autoplay: {
    delay: 10000,
  },
  creativeEffect: {
    prev: {
      translate: [0, 0, -1500],
    },
    next: {
      translate: [0, 0, -1500],
    },
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
})

</script>

<template>
  <ClientOnly>
    <swiper-container ref="banners" :init="false">
      <swiper-slide>
        <div class="swiper-slide-content">
          <div class="banners-image">
            <div class="banners-image-shadow"></div>
          </div>
          <h2 class="banners-text">Explore More Than
            200 Our Works</h2>
          <img class="banners-image-circle-bottom" src='~/../public/images/banners/circle-left-1.png' alt="">
          <img class="banners-image-circle-top" src='~/../public/images/banners/circle-left-2.png' alt="">

          <img class="banners-image-circle-right" src='~/../public/images/banners/circle-right.png' alt="">

          <img class="banners-image-rectangle-first" src='~/../public/images/banners/rectangle-1.png' alt="">
          <img class="banners-image-rectangle-two" src='~/../public/images/banners/rectangle-2.png' alt="">
          <img class="banners-image-rectangle-free" src='~/../public/images/banners/rectangle-banner-1.png' alt="">
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="swiper-slide-content">
          <div class="banners-image-two">
          </div>
          <h1 class="banners-title">Branding, Creative</h1>
          <h2 class="banners-text">Interdum et
            Malesuada Fames</h2>
          <img class="banners-image-circle-top" src='~/../public/images/banners/banners-2-circle-left.png' alt="">

          <img class="banners-image-rectangle-first" src='~/../public/images/banners/banners-2-circle-right.png' alt="">

          <img class="banners-image-rectangle-banners-two" src='~/../public/images/banners/banners-2-rectangle.png' alt="">
        </div>
      </swiper-slide>
    </swiper-container>
  </ClientOnly>

</template>

<style scoped>

swiper-slide {
  padding: 80px 0 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  transform: none;
}

.swiper-slide-content {
  width: 90%;
  margin: 0 auto;
}

.banners-image {
  background: #651FFF;
  background: linear-gradient(170deg,rgba(101, 31, 255, 1) 0%, rgba(0, 229, 255, 1) 67%, rgba(255, 64, 129, 1) 100%);
  width: 95%;
  height: 342px;
  overflow: hidden;
  border-radius: 50px;
}

.banners-image-two {
  width: 95%;
  height: 342px;
  border-radius: 50px;
  background-color: #651FFF;
  background-image: url("~/../public/images/banners/banners-2-background.png");
  background-size: cover;
  background-position: center;
}

.banners-image-shadow {
  width: 100%;
  height: 100%;
  position: relative;
  background-color: RGBA(0, 0, 0, 0.5);
}

.banners-image-shadow::after {
  content: "";
  position: absolute;
  background-image: url('~/../public/images/banners/background-shadow.png');
  background-size: 1252px 487px;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  height: 120%;
}

.banners-image-shadow::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 120%;
  background-image: url('~/../public/images/banners/background-image.png');
  background-size: 1252px 487px;
  background-repeat: no-repeat;
  background-position: center -200%;
  transform: rotate(5deg);
  z-index: 1;
}

.banners-title {
  position: absolute;
  color: #D1C4E9;
  z-index: 2;
  top: 48%;
  left: 8%;
  font-size: 24px;
  font-weight: 700;
  animation: slideIn 0.5s ease-in-out;
  z-index: 5;
}

.banners-text {
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 8%;
  color: white;
  font-size: 64px;
  font-weight: 700;
  line-height: 72px;
  max-width: 640px;
  animation: slideIn 0.5s ease-in-out;
  z-index: 5;
}

.banners-image-circle-bottom {
  position: absolute;
  top: 19%;
  left: 2%;
}

.banners-image-circle-top {
  position: absolute;
  top: 0%;
  left: 2%;
}

.banners-image-circle-right {
  position: absolute;
  top: 45%;
  right: 3%;
  z-index: 3;
}

.banners-image-rectangle-first {
  position: absolute;
  top: 10%;
  right: 4%;
  z-index: 2;
}

.banners-image-rectangle-two {
  position: absolute;
  top: 47%;
  right: 4%;
  z-index: 2;
}

.banners-image-rectangle-free {
  position: absolute;
  top: 0;
  right: 19%;
  z-index: 1;
}

.banners-image-rectangle-banners-two {
  position: absolute;
  top: 30%;
  right: 19%;
  z-index: 1;
}


</style>
