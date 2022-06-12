<script setup>
import Header from "./components/Header.vue";
import Navbar from "./components/Navbar.vue";
import News from "./components/News.vue";
import PromoTag from "./components/PromoTag.vue";

import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const modules = [Autoplay, Pagination, Navigation];
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  <div class="container">
    <div class="decor-line"></div>
  </div>

  <div class="container center">
    <Header></Header>
    <Navbar></Navbar>
  </div>

  <div class="container showcase-wrapper">
    <swiper
      :pagination="{
        dynamicBullets: true,
      }"
      :modules="modules"
      :loop="true"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
      }"
    >
      <swiper-slide class="showcase">
        <div class="content">
          <h1>Откройте для себя дизайн</h1>
          <p>эстетичный дизайн для каждого</p>
          <button>Магазин</button>
        </div>
        <img class="banner" src="./assets/showcase.jpg" alt="" />
      </swiper-slide>
      <swiper-slide class="showcase">
        <div class="content">
          <h1>Откройте для себя дизайн</h1>
          <p>эстетичный дизайн для каждого</p>
          <button>Магазин</button>
        </div>
        <img
          class="banner"
          src="./assets/virender-singh-hE0nmTffKtM-unsplash.jpg"
          alt=""
        />
      </swiper-slide>
    </swiper>
  </div>

  <!-- <div class="container">
    <swiper
      :pagination="{
        dynamicBullets: true,
      }"
      :modules="modules"
      :loop="true"
    >
      <swiper-slide>
        <img src="./assets/showcase.jpg" alt="" style="width: 100%" />
      </swiper-slide>
      <swiper-slide>
        <img src="./assets/showcase.jpg" alt="" style="width: 100%" />
      </swiper-slide>
      <swiper-slide>
        <img src="./assets/showcase.jpg" alt="" style="width: 100%" />
      </swiper-slide>
      <swiper-slide>
        <img src="./assets/showcase.jpg" alt="" style="width: 100%" />
      </swiper-slide>
    </swiper>
  </div> -->

  <div class="container center promo-wrapper">
    <div class="promos">
      <PromoTag desc="Доставка во все регионы" icon="local_shipping"></PromoTag>
      <PromoTag desc="Не упустите хорошие сделки!" icon="percent"></PromoTag>
      <PromoTag desc="Высшее качество продуктов" icon="star_outline"></PromoTag>
    </div>
  </div>

  <div class="container center">
    <h1>Новые товары</h1>
    <Suspense>
      <News></News>
      <template #fallback>
        <p class="center">Загрузка...</p>
      </template>
    </Suspense>
  </div>
</template>

<style scoped>
.banner {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  z-index: -1;
}

.decor-line {
  width: 100%;
  height: 16px;
  background-color: var(--cultured-2);
}

.promos {
  display: flex;
  width: 80%;
  padding: 18px;
  justify-content: space-between;
}

.promo-wrapper {
  background-color: var(--cultured-2);
}
</style>

<style>
:root {
  --cultured: #f8f9faff;
  --cultured-2: #e9ecefff;
  --gainsboro: #dee2e6ff;
  --light-gray: #ced4daff;
  --cadet-blue-crayola: #adb5bdff;
  --sonic-silver: #6c757dff;
  --davys-grey: #495057ff;
  --onyx: #343a40ff;
  --eerie-black: #212529ff;

  --blue-jeans: #66a9e1ff;
  --glaucous: #5c7bb5ff;
  --maya-blue: #8ac5f4ff;
  --baby-blue-eyes: #b1d5f8ff;
  --african-violet: #b385b2ff;

  --swiper-theme-color: var(--glaucous);
}

* {
  font-family: "Source Sans Pro";
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  margin: 0;
  padding: 0;
}

.container {
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}

.list {
  margin: 0;
  padding: 0;
}

.list-news {
  list-style: none;
  width: fit-content;
}

.product {
  display: flex;
  flex-direction: column;
  max-width: 500px;
}

.product:not(:first-child) {
  padding-top: 80px;
}

.product p {
  margin: 0;
  margin-bottom: 20px;
}

.product .description {
  color: gray;
  overflow: hidden;
}

.product img {
  width: 240px;
  height: 240px;
  object-fit: scale-down;
  border: 1px solid black;
  padding: 20px;
  margin: 0 auto;
}

.showcase {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 100px 0;
  /* margin-top: 42px; */
  /* margin-bottom: 42px; */
  /* margin: 42px auto; */
  overflow: hidden;
}

.showcase .content {
  height: 50%;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.showcase .content h1 {
  font-family: "Nunito";
  font-size: 48px;
  color: var(--eerie-black);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.showcase .content p {
  font-size: 36px;
  color: var(--eerie-black);
}

.showcase .content button {
  padding: 16px 48px;
  margin-top: 18px;
  color: white;
  border: none;
  font-family: "Nunito";
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
  background-color: var(--eerie-black);
  cursor: pointer;
}

.showcase-wrapper {
  margin: 42px auto;
}

.showcase-wrapper .swiper-pagination {
  margin-bottom: 24px;
}

.center {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
