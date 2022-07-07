import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useCartStore = defineStore("cart", {
  state: () => {
    return {
      cart: useStorage("cart", []),
    };
  },
  getters: {
    itemsCount(state) {
      return state.cart.length;
    },
    itemsArray(state) {
      return state.cart;
    },
    totalCost(state) {
      let total = 0;
      state.cart.map((item) => {
        total += item.price;
      });
      return total;
    },
  },
  actions: {
    addItem(_item) {
      this.cart.push(_item);
    },
    removeItem(_item) {
      this.cart.filter((item) => item.id !== _item.id);
    },
  },
});
