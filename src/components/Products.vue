<script setup>
import ky from "ky";

defineProps({
  columns: String,
  rows: String,
});

const products = await ky
  .get("https://api.escuelajs.co/api/v1/products?offset=0&limit=8")
  .json();
console.log(products);
</script>

<template>
  <div class="products-container">
    <div class="product" v-for="item in products">
      <div class="thumbnail">
        <img :src="item.images[0]" alt="" />
      </div>
      <div class="description">
        <b>{{ item.title }}</b>
        <p>${{ item.price }}</p>
      </div>
    </div>
  </div>
</template>

<style>
.products-container {
  display: grid;
  grid-template-columns: repeat(v-bind(columns), 1fr);
  /* grid-template-rows: repeat(v-bind(rows), 1fr); */
  grid-template-rows: auto auto;
  grid-auto-rows: 0px;
  overflow: hidden;
  column-gap: 80px;
  row-gap: 52px;
  position: relative;
}

.product {
  width: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.product .thumbnail {
  width: 100%;
  height: 250px;
  background-color: var(--cultured-2);
}

.product .thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product .description {
  width: 100%;
  margin-top: 12px;
}

.product .description b {
  width: 100%;
  font-family: "Nunito";
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--eerie-black);
}

.product .description p {
  font-family: "Nunito";
  font-size: 14px;
}
</style>
