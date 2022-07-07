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
    <NavbarItem link="/">Главная</NavbarItem>
    <NavbarItem link="/wip">Магазин</NavbarItem>
    <NavbarItem link="/wip">О нас</NavbarItem>
    <NavbarItem link="/wip">Контакты</NavbarItem>
  </ul>
</template>
<!-- 
<style scoped>

</style> -->
