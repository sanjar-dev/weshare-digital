<script setup>
function toTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
</script>

<template>
  <button class="back-to-top" :onclick="toTop">
    <img src="../assets/icons/arrow_upward.svg" alt="Вверх" />
    Наверх страницы
  </button>
</template>

<style scoped>
.back-to-top {
  width: 100%;
  padding: 16px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  color: var(--cultured-2);
  background-color: var(--davys-grey);
  border: none;
  cursor: pointer;
}
</style>
