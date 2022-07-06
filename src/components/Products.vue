<script setup>
import ky from "ky";
import Product from "./Product.vue"

defineProps({
  columns: String
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
.products-container {
  display: grid;
  grid-template-columns: repeat(v-bind(columns), 1fr);
  grid-template-rows: auto auto;
  grid-auto-rows: 0px;
  /* overflow: hidden; */
  column-gap: 80px;
  row-gap: 52px;
  position: relative;
}
</style>
