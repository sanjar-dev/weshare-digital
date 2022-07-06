<script setup>
import SearchBar from "./SearchBar.vue";
import Cart from "./Cart.vue";
</script>

<template>
  <div class="line row">
    <SearchBar class="column"></SearchBar>
    <div class="column logo">
      <img src="../../assets/WESHAREtitle.svg" alt="WeShare" />
    </div>
    <div class="column row">
      <div class="icon-button">
        <img src="../../assets/icons/account_circle.svg" alt="Account" />
      </div>
      <Cart></Cart>
    </div>
  </div>
</template>

<style>
.icon-button {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: content-box;
  width: max-content;
  height: 32px;
  padding: 12px;
  border-radius: 32px;
  color: var(--sonic-silver);
  background-color: var(--cultured-2);
  cursor: pointer;
}

.icon-button p {
  font-size: 20px;
  margin: 0 12px;
  white-space: nowrap;
}

.icon-button img {
  width: 32px;
  height: 100%;
}
</style>

<style scoped>
.line {
  width: 100%;
  margin: 66px 0;
  padding: 0 64px;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.row .icon-button:not(:first-child) {
  margin-left: 18px;
}

.row .column {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.row .column.logo {
  display: flex;
  justify-content: center;
  width: 100%;
}

/* .row .column.search {
  width: 90%;
} */

/* .logo img {
  width: 100%;
  height: 100%;
} */

@media only screen and (max-width: 768px) {
  .row .column.search {
    display: none;
  }
  /* .row .column.logo {
    justify-content: flex-start;
  } */
}

@media only screen and (max-width: 468px) {
  .line .cart {
    display: none;
  }
}
</style>
