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
            v-html="item.subtitle"
            class="description"
          ></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </div>
    <!-- chat part -->

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
      ></v-textarea>
      <v-btn icon small>
        <v-icon> mdi-microphone </v-icon>
      </v-btn>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      item: {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'James Dullmo',
        subtitle: `last seen 2 hours ago`
      },
      message: [
        'Do you have Paris recommendations? Have you ever been?',
        'Have any ideas about what we should get Heidi for her birthday',
        'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.'
      ]
    }
  }
}
</script>
<style lang="scss">
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
}
</style>
