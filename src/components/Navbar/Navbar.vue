<script setup>
import styles from "./Navbar.module.css";
import NavbarItem from "./NavbarItem.vue";

defineProps({
  forFooter: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <ul :class="[forFooter ? styles.recolored : '', styles.navbar]">
    <NavbarItem>Главная</NavbarItem>
    <NavbarItem>Магазин</NavbarItem>
    <NavbarItem>О нас</NavbarItem>
    <NavbarItem>Контакты</NavbarItem>
  </ul>
</template>
<!-- 
<style scoped>

</style> -->
