<template lang="">
  <div class="chat-list-item">
     <v-list three-line >
       <template v-for="(item, index) in items">
        <v-list-item class="single-list-item" @click="routeToChat(item)">
          <v-list-item-avatar class="avatar">
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="renderChatListTitle(item)" class="name"></v-list-item-title>
            <v-list-item-subtitle v-html="item.subtitle" class="description"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        </template>
      </v-list>
  </div>
 
</template>
<script>
export default {
  props: { items: { type: Array, required: true } },
  methods: {
    renderChatListTitle (item) {
      return `<b>${item.title}</b> <span style="float:right; font-weight: 400; font-size: 13px">${item.datetime}</span>`
    },
    routeToChat (item) {
      this.$cookies.set('current_user', item)
      this.$router.push('/chat')
    }
  }
}
</script>
<style lang="scss">
.chat-list-item {
  padding:0;
  .single-list-item {
    padding:0;
    margin-bottom: 10px;
    .avatar {
      margin-right: 20px;
      height: 40px;
      width: 40px;
    }
    .name {
      font-weight: bold;
    }
    .description {
      font-size: 15px;
      line-height: 22px;
      white-space: nowrap;
      overflow: hidden; 
      text-overflow: ellipsis;
    }
  }
}
</style>