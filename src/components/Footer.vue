<script setup>
import Navbar from "./Navbar/Navbar.vue";
import BackToTop from "./BackToTop.vue";
</script>

<template>
  <footer>
    <div class="container">
      <div class="socials-wrapper">
        <img src="../assets/WESHAREtitle white.svg" alt="" />
        <div class="socials">
          <img :src="'/src/assets/icons/facebook.svg'" alt="" />
          <img :src="'/src/assets/icons/twitter.svg'" alt="" />
          <img :src="'/src/assets/icons/instagram.svg'" alt="" />
        </div>
      </div>
      <div>
        <Navbar :forFooter="true" />
      </div>
      <div class="legal">
        <div class="copyright">
          <p>© WeShare. Все права защищены.</p>
        </div>
        <div class="tos">
          <a href="">Политика конфедициальности</a>
          <a href="">Условия использования</a>
        </div>
      </div>
    </div>
  </footer>
  <BackToTop />
</template>

<style scoped>
footer {
  padding: 58px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--onyx);
}

footer .container > div:not(:last-child) {
  margin-bottom: 52px;
}

.socials-wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
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
  cursor: pointer;
}

.navbar {
  color: white;
}

.legal {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: var(--cultured-2);
}

.legal > div:not(:last-child) {
  margin-bottom: 1rem;
}

.copyright {
  font-size: 20px;
}

.tos a {
  font-size: 16px;
  text-decoration: none;
  color: var(--cultured-2);
}

.tos a:not(:last-child) {
  padding-right: 1rem;
  border-right: 1px solid var(--cultured-2);
}

.tos a:not(:first-child) {
  padding-left: 1rem;
}

@media only screen and (max-width: 425px) {
  .socials-wrapper {
    justify-content: center;
    gap: 16px;
  }
}
</style>
