<template>
  <div class="qkb-board-header">
    <slot name="header">
      <div class="qkb-board-header__title">{{ botTitle }}</div>
      <div
        class="qkb-board-header__full-screen-icon"
        @click="applyFullScreenMode"
      >
        <span v-show="fullScreenApplied">
          <i class="fa-solid fa-minimize"></i>
        </span>
        <span v-show="!fullScreenApplied">
          <i class="fa-solid fa-maximize"></i>
        </span>
      </div>
    </slot>
  </div>
</template>
<script>
export default {
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
  },
  methods: {
    applyFullScreenMode: function () {
      this.$emit("apply-full-screen-mode", !this.fullScreenApplied);
    },
  },
};
</script>
