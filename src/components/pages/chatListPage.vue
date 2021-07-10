<template lang="">
  <div class="chat-list-page">
    <Header headerName="Chats" />
    <ChatListItem :items="listitem" />
  </div>
</template>

<script>
import ChatListItem from '@/components/chatComponent/ChatListItem'
import Header from '@/components/generalComponents/Header'
export default {
  name: 'app',
  components: { ChatListItem, Header },
  data () {
    return {
      listitem: [
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Default Chat Room',
          datetime: '18:21',
          subtitle: `Join us to chat`
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.chat-list-page {
  .chat-list-header {
    margin-bottom: 20px;
    .chat-list-title {
      width: 111px;
      height: 36px;

      /* H1 */

      font-family: Space Mono;
      font-style: normal;
      font-weight: normal;
      font-size: 36px;
      line-height: 36px;
      /* identical to box height, or 100% */

      text-transform: capitalize;

      color: #000000;

      opacity: 0.9;
    }
    .magnify-icon {
      font-size: 40px;
    }
  }
}
</style>
