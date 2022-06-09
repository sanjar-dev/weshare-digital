<template>
  <div class="search">
    <input type="text" placeholder="Найти..." />
  </div>
</template>

<style scoped>
input[type="text"] {
  display: block;
  /* height: 56px; */
  width: 80%;
  min-width: 150px;
  padding: 12px;
  padding-left: 50px;
  margin-right: auto;
  font-size: 20px;
  border: none;
  border-radius: 28px;

  background-color: var(--cultured-2);
  background-image: url("../assets/icons/search.svg");
  background-position: 12px;
  background-size: 32px;
  background-repeat: no-repeat;
}
</style>
