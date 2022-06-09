<script setup>
import Header from "./components/Header.vue";
import Navbar from "./components/Navbar.vue";
import News from "./components/News.vue";
import PromoTag from "./components/PromoTag.vue";
</script>

<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  <div class="decor-line"></div>
  <div class="container center">
    <Header></Header>
    <Navbar></Navbar>
  </div>

  <div class="container showcase">
    <div class="content">
      <h1>Откройте для себя дизайн</h1>
      <p>эстетичный дизайн для каждого</p>
      <button>Магазин</button>
    </div>
    <img class="banner" src="./assets/showcase.jpg" alt="" />
  </div>

  <div class="container">
    <PromoTag desc="Новые скидки каждый день!"></PromoTag>
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
  margin: 41px auto;
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
  margin-top: auto;
  color: white;
  border: none;
  font-family: "Nunito";
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
  background-color: var(--eerie-black);
  cursor: pointer;
}

.center {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
