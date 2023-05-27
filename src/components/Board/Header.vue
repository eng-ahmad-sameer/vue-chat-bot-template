<template>
  <div class="qkb-board-header">
    <slot name="header">
      <div class="qkb-board-header__title">{{ botTitle }}</div>
      <slot name="headerExtraActions"></slot>
      <div
        class="qkb-board-header__full-screen-icon"
        @click="applyFullScreenMode"
        v-if="allowFullscreenMode"
      >
        <span v-show="fullScreenApplied">
          <Minimize />
        </span>
        <span v-show="!fullScreenApplied">
          <Maximize />
        </span>
      </div>
    </slot>
  </div>
</template>
<script>
import Maximize from "../../assets/icons/maximize.svg";
import Minimize from "../../assets/icons/minimize.svg";
export default {
  components: {
    Maximize,
    Minimize,
  },
  data() {
    return {
      isFullScreen: false,
    };
  },
  props: {
    botTitle: {
      type: String,
      default: "Chatbot",
    },
    fullScreenApplied: {
      type: Boolean,
      default: false,
    },
    allowFullscreenMode: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    applyFullScreenMode: function () {
      this.$emit("apply-full-screen-mode", !this.fullScreenApplied);
    },
  },
};
</script>
