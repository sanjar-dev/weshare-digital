<script setup>
import Navbar from "./Navbar/Navbar.vue";
</script>

<template>
  <footer>
    <div class="container">
      <div class="socials-wrapper">
        <img src="../assets/WESHAREtitle.svg" alt="" />
        <div class="socials">
          <img :src="'/src/assets/icons/facebook.svg'" alt="" />
          <img :src="'/src/assets/icons/twitter.svg'" alt="" />
          <img :src="'/src/assets/icons/instagram.svg'" alt="" />
        </div>
      </div>
      <Navbar />
    </div>
  </footer>
</template>

<style scoped>
footer {
  padding: 58px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--onyx);
}

.socials-wrapper {
  display: flex;
  justify-content: space-between;
}

.socials {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
}

.socials img {
  width: 32px;
  height: 32px;
}
</style>
