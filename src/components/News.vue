<script setup>
import ky from "ky";

const products = await ky.get("https://fakestoreapi.com/products").json();
console.log(products);
</script>

<template>
  <div>
    <!-- <p>{{ articles }}</p> -->
    <ul class="list list-news">
      <li v-for="product in products" class="product">
        <p class="title">{{ product.title }}</p>
        <p class="price">${{ product.price }}</p>
        <a class="description">{{ product.description }}</a>
        <img :src="product.image" :alt="product.title" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.title {
  margin-bottom: 0;
}

.price {
  margin-bottom: 12px;
}

.title,
.price {
  cursor: pointer;
}
</style>
