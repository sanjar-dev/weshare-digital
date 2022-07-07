<script setup>
import ky from "ky";
import Products from "./Products.vue";

const data = await ky
  .get("https://api.escuelajs.co/api/v1/products?offset=0&limit=8")
  .json();
</script>

<template>
  <div class="recomended center">
    <h1>Рекомендуемые товары</h1>
    <Suspense>
      <Products :products="data"></Products>
    </Suspense>
  </div>
</template>

<style scoped>
.recomended {
  width: 100%;
  margin: 64px 0;
}

.recomended h1 {
  padding: 0;
  margin-bottom: 64px;
  font-size: 24px;
  font-family: "Nunito";
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--eerie-black);
  cursor: pointer;
}
</style>
