<script setup>
defineProps({
  desc: String,
});
</script>

<template>
  <div class="promo">
    <div class="icon-button">
      <img src="../assets/icons/shopping_cart.svg" alt="" />
    </div>
    <p>{{ desc }}</p>
  </div>
</template>

<style scoped>
.promo {
  display: flex;
  align-items: center;
}

.promo p {
  font-size: 20px;
  margin-left: 12px;
}

.promo .icon-button {
  padding: 10px;
}
</style>
