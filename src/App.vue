<template>
  <div id="app">
    <img alt="Vue Bot UI" src="./assets/logo.png" />
    <VueChatBot
      :options="botOptions"
      :messages="messageData"
      :bot-typing="true"
      :show-copy-button="showCopyButton"
      :allow-fullscreen-mode="allowFullscreenMode"
      :input-disable="inputDisable"
      :is-open="false"
      @init="botStart"
      @msg-send="msgSend"
    >
      <template v-slot:extraContent>
        <div class="ahmad">Ahmad</div>
      </template>
    </VueChatBot>
  </div>
</template>

<script>
import BotIcon from "./assets/icons/bot.png";
import { VueChatBot } from "./vue-chat-bot";
import { messageService } from "./helpers/message";

export default {
  components: {
    VueChatBot,
  },

  data() {
    return {
      messageData: [],
      botTyping: false,
      inputDisable: false,
      showCopyButton: true,
      allowFullscreenMode: true,
      botOptions: {
        botAvatarImg: BotIcon,
        boardContentBg: "#f4f4f4",
        msgBubbleBgBot: "#fff",
        inputPlaceholder: "Type here...",
        inputDisableBg: "#fff",
        inputDisablePlaceholder: "Hit the buttons above to respond",
      },
    };
  },

  methods: {
    botStart() {
      // Get token if you want to build a private bot
      // Request first message here

      // Fake typing for the first message
      this.botTyping = true;
      setTimeout(() => {
        this.botTyping = false;
        this.messageData.push({
          agent: "bot",
          type: "text",
          text: "Hello",
        });
      }, 1000);
    },

    msgSend(value) {
      // Push the user's message to board
      this.messageData.push({
        agent: "user",
        type: "text",
        text: value.text,
      });

      this.getResponse();
    },

    // Submit the message from user to bot API, then get the response from Bot
    getResponse() {
      // Loading
      this.botTyping = true;

      // Post the message from user here
      // Then get the response as below

      // Create new message from fake data
      messageService.createMessage().then((response) => {
        const replyMessage = {
          agent: "bot",
          ...response,
        };

        this.inputDisable = response.disableInput;
        this.messageData.push(replyMessage);

        // finish
        this.botTyping = false;
      });
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.ahmad {
  position: fixed;
  left: 0;
}
</style>
