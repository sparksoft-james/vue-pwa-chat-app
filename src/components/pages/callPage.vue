<template>
  <div class="call-page">
    <Header headerName="Calls" />
    <!-- all -->
    <CallListItem v-if="currentTabs === 'all'" :items="allItems" />
    <!-- missed -->
    <CallListItem v-else-if="currentTabs === 'missed'" :items="missedItems" />
  </div>
</template>
<script>
import Header from '@/components/generalComponents/Header'
import CallListItem from '@/components/callComponent/CallListItem'
import { mapGetters } from 'vuex'

export default {
  components: { Header, CallListItem },
  data() {
    return {
      allItems: [
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          name: 'Jane Cooper',
          datetime: '18:21',
          duration: '01.34',
          callStatus: `Incoming`
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          name: 'Robert Fox',
          datetime: '10:19',
          duration: '02.05',
          callStatus: `Outgoing`
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          name: 'Cameron Williamson',
          datetime: '10/8',
          duration: '',
          callStatus: 'Missed'
        }
      ],
      missedItems: [
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          name: 'Jane Cooper',
          datetime: '18:21',
          duration: '',
          callStatus: `Missed`
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          name: 'Robert Fox',
          datetime: '10:19',
          duration: '',
          callStatus: `Missed`
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          name: 'Cameron Williamson',
          datetime: '10/8',
          duration: '',
          callStatus: 'Missed'
        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      currentTabs: 'currentTabs'
    })
  }
}
</script>
<style lang=""></style>
