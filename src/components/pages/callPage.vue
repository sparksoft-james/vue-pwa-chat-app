<template>
  <div class="call-page">
    <Header headerName="Calls" />
    <CallListItem :items="listitem" />
  </div>
</template>
<script>
import Header from '@/components/generalComponents/Header'
import CallListItem from '@/components/callComponent/CallListItem'

export default {
  components: { Header, CallListItem },
  data() {
    return {
      listitem: [
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          datetime: '',
          subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          datetime: '',
          subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          datetime: '',
          subtitle:
            '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?'
        }
      ]
    }
  }
}
</script>
<style lang=""></style>
