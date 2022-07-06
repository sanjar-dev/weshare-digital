<script setup>
import Header from "../components/Header/Header.vue";
import Navbar from "../components/Navbar/Navbar.vue";
import PromoTag from "../components/PromoTag.vue";
import Recomended from "../components/Recomended.vue";
import Newsletter from "../components/Newsletter.vue";
import Footer from "../components/Footer.vue";

import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const modules = [Autoplay, Pagination, Navigation];
</script>

<template>
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
        <img class="banner" src="../assets/showcase.jpg" alt="" />
      </swiper-slide>
      <swiper-slide class="showcase">
        <div class="content">
          <h1>Комфортно и красиво</h1>
          <p>удобные товары дополняющие интерьер</p>
          <button>Магазин</button>
        </div>
        <img
          class="banner"
          src="../assets/virender-singh-hE0nmTffKtM-unsplash.jpg"
          alt=""
        />
      </swiper-slide>
    </swiper>
  </div>

  <div class="container center promo-wrapper">
    <div class="promos">
      <PromoTag icon="local_shipping">Доставка во все регионы</PromoTag>
      <PromoTag icon="percent">Не упустите хорошие сделки!</PromoTag>
      <PromoTag icon="star_outline">Высшее качество продуктов</PromoTag>
    </div>
  </div>

  <div class="container center">
    <Recomended></Recomended>
  </div>

  <div class="container center newsletter">
    <Newsletter></Newsletter>
  </div>

  <Footer />
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

.newsletter {
  height: 400px;
  justify-content: center;
}
</style>

<style>
.list {
  margin: 0;
  padding: 0;
}

.list-news {
  list-style: none;
  width: fit-content;
}

.showcase {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 100px 0;
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
  font-size: 48px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--eerie-black);
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
</style>
