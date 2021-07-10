<template lang="">
  <div class="chat-page">
    <!-- header part -->
    <div class="chat-header d-flex flex-row">
      <v-icon @click="$router.go(-1)">mdi-chevron-left</v-icon>
      <v-list-item class="chat-header-info">
        <v-list-item-avatar class="avatar">
          <v-img :src="item.avatar"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title
            v-html="item.title"
            class="name"
          ></v-list-item-title>
          <v-list-item-subtitle
            v-html="'last seen 2 hours ago'"
            class="description"
          ></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </div>
    <!-- chat part -->
    <section>
      <main>
        <div
          v-for="(msg, index) in messages"
          :key="'index =' + index"
          :class="['message', sentOrReceived(msg.userUID)]"
        >
        <!--  v-if="messages[index-1].userUID !== msg.userUID" -->
        <!-- {{messages[index-1].userUID}} -->
          <img v-if="checkLastMessage(msg,index)" :src="msg.photoURL" :alt="msg.displayName"> </img>
          <p>{{ msg.text }}</p>
        </div>
      </main>
      <div ref="scrollable"></div>
    </section>
    <!-- input part -->
    <div
      class="input-section d-flex flex-row align-center justify-space-between"
    >
      <v-textarea
        class="input-box"
        placeholder="type here .."
        auto-grow
        filled
        rounded
        dense
        max-rows="6"
        rows="1"
        hide-details
        v-model="message"
        @keydown.enter.exact.prevent
        @keyup.enter.exact="sendMessages"
        @keydown.enter.shift.exact="newline"
      ></v-textarea>
      <!-- {{user}} -->
      <v-btn icon small @click="sendMessages" :disabled="!message">
        <v-icon> mdi-microphone </v-icon>
      </v-btn>
    </div>
  </div>
</template>
<script>
import firebase from 'firebase'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      item: {},
      db: firebase.firestore(),
      message: '',
      messages: []
    }
  },
  computed: {
    ...mapGetters({
      user: 'user'
    })
  },
  mounted() {
    this.item = this.$cookies.get('current_user')
    this.db
      .collection('messages')
      .orderBy('createdAt')
      .onSnapshot(querySnap => {
        this.messages = querySnap.docs.map(doc => doc.data())
      })
  },
  methods: {
     newline() {
      this.message = `${this.message}\n`;
    },
    sendMessages() {
      const messageInfo = {
        userUID: this.user.data.uid,
        displayName: this.user.data.displayName,
        photoURL: this.user.data.photoURL,
        text: this.message,
        createdAt: Date.now()
      }
      this.db.collection('messages').add(messageInfo)

      this.message = ''

      this.$refs['scrollable'].scrollIntoView({ behavior: 'smooth' })
    },
    sentOrReceived(userUID) {
      return userUID === this.user.data.uid ? 'sent' : 'received'
    },
    checkLastMessage(msg,index) {
      if(this.messages.length > 0 && index < this.messages.length -1 ) {
        const prevMessage = this.messages[index + 1]
        return prevMessage.userUID  ? prevMessage.userUID !== msg.userUID : false
      }
      return true
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/css/variable.scss';

.chat-page {
  .chat-header {
    margin: 20px 0;
  }
  .input-section {
    position: absolute;
    bottom: 30px;
    width: 100%;
    .input-box textarea {
      max-height: 180px;
    }
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    main {
      padding: 10px;
      height: 75vh;
      overflow-y: scroll;
      display: flex;
      flex-direction: column;
    }
  }

  .message {
    display: flex;
    align-items: center;
    position: relative;
      p {
          color: $black;
          background: $chatBoxColor;
      }
    &.sent {
      flex-direction: row-reverse;
    }
    img {
      position: absolute;
      width: 22px;
      height: 22px;
      border-radius: 50%;
      bottom: 0px;
      z-index: 1;
    }
    p {
      max-width: 500px;
      margin-bottom: 8px;
      line-height: 24px;
      padding: 10px 20px;
      border-radius: 15px;
      position: relative;
      text-align: start;
    }
  }
}
</style>
