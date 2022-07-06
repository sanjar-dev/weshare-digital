<script setup>
import NavbarItem from "./NavbarItem.vue";
</script>

<template>
  <ul>
    <NavbarItem title="Главная"></NavbarItem>
    <NavbarItem title="Магазин"></NavbarItem>
    <NavbarItem title="О нас"></NavbarItem>
    <NavbarItem title="Контакты"></NavbarItem>
  </ul>
</template>

<style scoped>
ul {
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 0;
}

ul li {
  padding: 0;
  font-size: 24px;
  font-family: "Nunito";
  font-weight: bold;
  text-transform: uppercase;
  color: var(--davys-grey);
  cursor: pointer;
}

ul li:not(:first-child) {
  margin-left: 80px;
}
</style>
