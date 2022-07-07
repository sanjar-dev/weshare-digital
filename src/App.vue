<script setup>
import Header from "./components/Header/Header.vue";
import Navbar from "./components/Navbar/Navbar.vue";
import PromoTag from "./components/PromoTag.vue";
import Recomended from "./components/Recomended.vue";
import Newsletter from "./components/Newsletter.vue";
import Footer from "./components/Footer.vue";
import { RouterView } from "vue-router";

// Load default CSS.
import "./App.css";
</script>

<template>
  <!-- Layout -->
  <div class="container">
    <div class="decor-line"></div>
  </div>

  <div class="container center">
    <Header></Header>
    <Navbar></Navbar>
  </div>
  <!-- Show router view -->
  <!-- For more details, visit /router/index.js -->
  <RouterView></RouterView>

  <Footer></Footer>
</template>

<style scoped>
.decor-line {
  width: 100%;
  height: 16px;
  background-color: var(--cultured-2);
}
</style>
