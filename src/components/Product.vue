<script setup>
import styles from "./Product.module.css";
import { useCartStore } from "../stores/cart";

defineProps({
  item: Object,
  clickable: Boolean,
});

const cart = useCartStore();
</script>

<template>
  <div @click="clickable && cart.addItem(item)" :class="styles.product">
    <div :class="styles.thumbnail">
      <img :src="item.images[0]" alt="" />
    </div>
    <div :class="styles.description">
      <b>{{ item.title }}</b>
      <p>${{ item.price }}</p>
    </div>
  </div>
</template>
