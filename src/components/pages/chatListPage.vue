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
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Julia Semid',
          datetime: '10:11',
          subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Joan Chapman',
          datetime: '17:21',
          subtitle:
            '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?'
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'James Dullmo',
          datetime: '13:28',
          subtitle:
            '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?'
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Kate Munch',
          datetime: '18:21',
          subtitle:
            '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.'
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
