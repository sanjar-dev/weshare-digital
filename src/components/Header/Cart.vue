<script setup>
import { RouterLink } from "vue-router";
import { useCartStore } from "../../stores/cart";

const cart = useCartStore();
</script>

<template>
  <div class="icon-button cart">
    <img src="../../assets/icons/shopping_cart.svg" alt="" />
    <RouterLink to="/checkout">
      <p>{{ cart.itemsCount }} предмет(а)</p>
    </RouterLink>
  </div>
</template>
