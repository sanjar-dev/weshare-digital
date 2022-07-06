<script setup>
import styles from "./Product.module.css";

defineProps({
  item: Object
})
</script>

<template>
  <div :class="styles.product">
    <div :class="styles.thumbnail">
      <img :src="item.images[0]" alt="" />
    </div>
    <div :class="styles.description">
      <b>{{ item.title }}</b>
      <p>${{ item.price }}</p>
    </div>
  </div>
</template>
