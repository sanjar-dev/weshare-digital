<script setup>
import { RouterLink } from "vue-router";

defineProps({
  link: {
    type: String,
    default: "/",
  },
});
</script>

<template>
  <li>
    <RouterLink :to="link">
      <slot></slot>
    </RouterLink>
  </li>
</template>
