<script setup>
import ky from "ky";
import Product from "./Product.vue";

defineProps({
  columns: String,
});

const products = await ky
  .get("https://api.escuelajs.co/api/v1/products?offset=0&limit=8")
  .json();
</script>

<template>
  <div class="products-container">
    <Product v-for="item in products" :item="item"></Product>
  </div>
</template>

<style scoped>
/* @media only screen and (max-width: 768px) {
  .products-container {
    grid-template-columns: repeat(3, 1fr);
    background-color: aquamarine;
  }
} */

.products-container {
  min-width: 80%;
  max-width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-template-rows: auto auto;
  /* padding: 0 32px; */
  column-gap: 80px;
  row-gap: 52px;
  position: relative;
}
</style>
