<template>
  <div class="qkb-msg-bubble-component qkb-msg-bubble-component--single-text">
    <div
      class="qkb-msg-bubble-component__text qkb-msg-bubble-component__text-type"
      v-if="mainData.type === 'text'"
      ref="inputToCopy"
    >
      {{ mainData.text }}
    </div>
    <div
      class="qkb-msg-bubble-component__text"
      ref="inputToCopy"
      v-if="['html', 'button'].includes(mainData.type)"
      v-html="mainData.text"
    ></div>
    <div
      class="qkb-msg-bubble-component_copy-button-wrapper"
      v-if="showCopyButton"
    >
      <button
        class="qkb-msg-bubble-component_copy-button"
        @click.prevent="copyText"
      >
        <span v-if="copied">copied</span>
        <span v-else>copy</span>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    mainData: {
      type: Object,
    },
    showCopyButton: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      copied: false,
    };
  },
  methods: {
    copyText: async function () {
      const vm = this;
      this.copied = true;
      const element = this.$refs.inputToCopy;
      navigator.clipboard.writeText(element.innerText).then(() => {
        setTimeout(() => {
          vm.copied = false;
        }, 500);
      });
    },
  },
};
</script>
