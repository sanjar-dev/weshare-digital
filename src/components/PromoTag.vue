<script setup>
defineProps({
  desc: String,
  icon: String,
});
</script>

<template>
  <div class="promo">
    <div class="icon-button">
      <!-- <img src="../assets/icons/shopping_cart.svg" alt="" /> -->
      <img :src="'/src/assets/icons/' + icon + '.svg'" alt="" />
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
  margin-left: 16px;
  color: var(--davys-grey);
}

.promo .icon-button {
  width: 24px;
  height: 24px;
  padding: 10px;
  background-color: var(--cultured);
}
</style>
