import { defineStore } from "pinia";

export const indexStore = defineStore("index", {
  state: () => {
    return {
      current: 0,
      theme: ["primary", "info", "success", "warning", "error", "dark"],
    };
  },

  actions: {
    changeTheme() {
      console.log(this.current);
      if (this.current == 5) {
        this.current = 0;
      } else {
        this.current++;
      }
    },
  },
});
