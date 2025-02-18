import VueChatBot from "./components/BotUI.vue";

const Plugin = {
  install(Vue) {
    Vue.component("VueChatBot", VueChatBot);

    if (typeof window !== "undefined" && window.Vue) {
      window.Vue.use(Plugin);
    }
  },
};

export default Plugin;
export { VueChatBot };
