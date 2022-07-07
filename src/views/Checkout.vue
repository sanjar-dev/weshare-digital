<script setup>
import Products from "../components/Products.vue";
import { useCartStore } from "../stores/cart";

const cart = useCartStore();
</script>

<template>
  <div class="container center checkout">
    <h1>
      Моя корзина <i>({{ cart.totalCost }}$)</i>
    </h1>
    <Products :products="cart.itemsArray" :clickable="false"></Products>
    <button @click="cart.clearItems()" class="cart-clear">
      Очистить корзину
    </button>
  </div>
</template>

<style scoped>
.checkout {
  margin-top: 64px;
  margin-bottom: 64px;
}

.checkout h1 {
  display: flex;
  align-items: center;
  padding: 0;
  margin-bottom: 64px;
  font-size: 24px;
  font-family: "Nunito";
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--eerie-black);
}

.checkout h1 i {
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
  margin-left: 12px;
}

.cart-clear {
  font-size: 18px;
  margin: 24px 0;
  padding: 12px 22px;
  border: 1px solid black;
  border-radius: 16px;
}
</style>
