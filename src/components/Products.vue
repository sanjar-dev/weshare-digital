<script setup>
import ky from "ky";
import Product from "./Product.vue";

defineProps({
  products: Object,
  clickable: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <div class="products-container">
    <Product
      v-for="item in products"
      :item="item"
      :clickable="clickable"
    ></Product>
  </div>
</template>

<style scoped>
.products-container {
  min-width: 80%;
  max-width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-template-rows: auto auto;
  column-gap: 80px;
  row-gap: 52px;
  position: relative;
}
</style>
